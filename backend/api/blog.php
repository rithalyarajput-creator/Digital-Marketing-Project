<?php
// ==============================
// GET    /api/blog.php          → List published posts
// GET    /api/blog.php?slug=X   → Get single post
// POST   /api/blog.php          → Create post (Admin)
// PUT    /api/blog.php?id=X     → Update post (Admin)
// DELETE /api/blog.php?id=X     → Delete post (Admin)
// ==============================
require_once '../config/db.php';

$method = $_SERVER['REQUEST_METHOD'];
$id     = isset($_GET['id']) ? (int)$_GET['id'] : null;
$slug   = $_GET['slug'] ?? null;

// Auth required for non-GET requests
if ($method !== 'GET') {
    $token = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    if ($token !== 'Bearer clicksemrus-admin-token') {
        http_response_code(401);
        echo json_encode(['error' => 'Unauthorized']);
        exit();
    }
}

$db = getDB();

if ($method === 'GET') {
    if ($slug) {
        $stmt = $db->prepare("SELECT * FROM blog_posts WHERE slug = :slug AND status = 'published'");
        $stmt->execute([':slug' => $slug]);
        $post = $stmt->fetch();
        if (!$post) { http_response_code(404); echo json_encode(['error' => 'Post not found']); exit(); }
        echo json_encode($post);
    } else {
        $stmt = $db->query("SELECT id, title, slug, excerpt, category, read_time, author, created_at FROM blog_posts WHERE status = 'published' ORDER BY created_at DESC");
        echo json_encode($stmt->fetchAll());
    }

} elseif ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $slug  = preg_replace('/[^a-z0-9-]/', '', strtolower(str_replace(' ', '-', $input['title'] ?? '')));
    $stmt  = $db->prepare(
        "INSERT INTO blog_posts (title, slug, excerpt, content, category, status, read_time, author)
         VALUES (:title, :slug, :excerpt, :content, :category, :status, :read_time, :author)"
    );
    $stmt->execute([
        ':title'     => $input['title'] ?? '',
        ':slug'      => $slug,
        ':excerpt'   => $input['excerpt'] ?? '',
        ':content'   => $input['content'] ?? '',
        ':category'  => $input['category'] ?? '',
        ':status'    => $input['status'] ?? 'draft',
        ':read_time' => $input['read_time'] ?? '5 min read',
        ':author'    => $input['author'] ?? 'Clicksemrus Team',
    ]);
    http_response_code(201);
    echo json_encode(['success' => true, 'id' => $db->lastInsertId()]);

} elseif ($method === 'PUT' && $id) {
    $input = json_decode(file_get_contents('php://input'), true);
    $stmt  = $db->prepare(
        "UPDATE blog_posts SET title=:title, excerpt=:excerpt, content=:content,
         category=:category, status=:status, read_time=:read_time WHERE id=:id"
    );
    $stmt->execute([
        ':title'     => $input['title'] ?? '',
        ':excerpt'   => $input['excerpt'] ?? '',
        ':content'   => $input['content'] ?? '',
        ':category'  => $input['category'] ?? '',
        ':status'    => $input['status'] ?? 'draft',
        ':read_time' => $input['read_time'] ?? '5 min read',
        ':id'        => $id,
    ]);
    echo json_encode(['success' => true]);

} elseif ($method === 'DELETE' && $id) {
    $stmt = $db->prepare("DELETE FROM blog_posts WHERE id = :id");
    $stmt->execute([':id' => $id]);
    echo json_encode(['success' => true]);
}

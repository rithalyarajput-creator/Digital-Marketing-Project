<?php
// ==============================
// GET  /api/leads.php          → List all leads (Admin)
// PUT  /api/leads.php?id=X     → Update lead status (Admin)
// DELETE /api/leads.php?id=X   → Delete lead (Admin)
// ==============================
require_once '../config/db.php';

$method = $_SERVER['REQUEST_METHOD'];
$id     = isset($_GET['id']) ? (int)$_GET['id'] : null;

// Simple token auth (replace with proper JWT in production)
$token = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
if ($token !== 'Bearer clicksemrus-admin-token') {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit();
}

$db = getDB();

if ($method === 'GET') {
    // Fetch all leads with optional filters
    $status = $_GET['status'] ?? null;
    $sql = "SELECT * FROM leads";
    $params = [];
    if ($status) {
        $sql .= " WHERE status = :status";
        $params[':status'] = $status;
    }
    $sql .= " ORDER BY created_at DESC";
    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    echo json_encode($stmt->fetchAll());

} elseif ($method === 'PUT' && $id) {
    $input = json_decode(file_get_contents('php://input'), true);
    $status = $input['status'] ?? null;
    $allowed = ['new', 'contacted', 'proposal', 'closed'];
    if (!in_array($status, $allowed)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid status']);
        exit();
    }
    $stmt = $db->prepare("UPDATE leads SET status = :status WHERE id = :id");
    $stmt->execute([':status' => $status, ':id' => $id]);
    echo json_encode(['success' => true]);

} elseif ($method === 'DELETE' && $id) {
    $stmt = $db->prepare("DELETE FROM leads WHERE id = :id");
    $stmt->execute([':id' => $id]);
    echo json_encode(['success' => true]);

} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}

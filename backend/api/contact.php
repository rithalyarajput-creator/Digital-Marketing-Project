<?php
// ==============================
// POST /api/contact.php
// Save contact form submissions
// ==============================
require_once '../config/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);

// Validation
$required = ['name', 'email'];
foreach ($required as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['error' => ucfirst($field) . ' is required']);
        exit();
    }
}

if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// Sanitize inputs
$name    = htmlspecialchars(trim($input['name']), ENT_QUOTES, 'UTF-8');
$email   = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
$phone   = htmlspecialchars(trim($input['phone'] ?? ''), ENT_QUOTES, 'UTF-8');
$company = htmlspecialchars(trim($input['company'] ?? ''), ENT_QUOTES, 'UTF-8');
$service = htmlspecialchars(trim($input['service'] ?? ''), ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars(trim($input['message'] ?? ''), ENT_QUOTES, 'UTF-8');

try {
    $db = getDB();
    $stmt = $db->prepare(
        "INSERT INTO leads (name, email, phone, company, service, message)
         VALUES (:name, :email, :phone, :company, :service, :message)"
    );
    $stmt->execute([
        ':name'    => $name,
        ':email'   => $email,
        ':phone'   => $phone,
        ':company' => $company,
        ':service' => $service,
        ':message' => $message,
    ]);

    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => 'Your message has been received! We will contact you within 24 hours.',
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save. Please try again.']);
}

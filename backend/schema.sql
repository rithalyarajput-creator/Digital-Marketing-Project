-- ==============================
-- CLICKSEMRUS — MySQL Database Schema
-- ==============================
-- Run this file in phpMyAdmin or MySQL CLI to create the database

CREATE DATABASE IF NOT EXISTS clicksemrus_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE clicksemrus_db;

-- Leads / Contact Form Submissions
CREATE TABLE IF NOT EXISTS leads (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    email       VARCHAR(150) NOT NULL,
    phone       VARCHAR(20),
    company     VARCHAR(100),
    service     VARCHAR(100),
    message     TEXT,
    status      ENUM('new', 'contacted', 'proposal', 'closed') DEFAULT 'new',
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Blog Posts
CREATE TABLE IF NOT EXISTS blog_posts (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(255) NOT NULL,
    slug        VARCHAR(255) UNIQUE NOT NULL,
    excerpt     TEXT,
    content     LONGTEXT,
    category    VARCHAR(50),
    status      ENUM('draft', 'published') DEFAULT 'draft',
    read_time   VARCHAR(20),
    author      VARCHAR(100) DEFAULT 'Clicksemrus Team',
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Admin Users
CREATE TABLE IF NOT EXISTS admin_users (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    email       VARCHAR(150) UNIQUE NOT NULL,
    password    VARCHAR(255) NOT NULL,   -- Store bcrypt hashed passwords only
    role        ENUM('admin', 'editor') DEFAULT 'editor',
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Newsletter Subscribers
CREATE TABLE IF NOT EXISTS subscribers (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    email       VARCHAR(150) UNIQUE NOT NULL,
    status      ENUM('active', 'unsubscribed') DEFAULT 'active',
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample data for testing
INSERT INTO leads (name, email, phone, company, service, message, status) VALUES
('Vikram Singh', 'vikram@company.com', '+91 98765 43210', 'TechCorp', 'SEO', 'Need help with organic traffic', 'new'),
('Anita Patel', 'anita@brand.com', '+91 87654 32109', 'StyleNest', 'PPC', 'Want to run Google Ads', 'contacted'),
('Rohit Kumar', 'rohit@startup.com', '+91 76543 21098', 'Startup XYZ', 'Web Design', 'Need a new website', 'new');

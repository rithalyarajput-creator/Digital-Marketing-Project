# ⚡ Clicksemrus — Digital Marketing Agency Website

> Professional, full-stack digital marketing agency website built with Next.js 14, PHP, and MySQL.

---

## 🌐 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 14 (App Router) + TypeScript + Tailwind CSS |
| **Admin Panel** | Next.js (built-in at `/admin`) |
| **Backend API** | PHP 8 REST API |
| **Database** | MySQL |

---

## 📁 Project Structure

```
Digital-Marketing-Project/
├── clicksemrus/               ← Next.js Frontend + Admin
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx           Home Page
│   │   │   ├── about/             About Us
│   │   │   ├── services/          All Services
│   │   │   ├── portfolio/         Case Studies
│   │   │   ├── blog/              Blog Articles
│   │   │   ├── contact/           Contact Form
│   │   │   └── admin/             Admin Dashboard
│   │   └── components/
│   │       ├── ui/                Navbar, Footer
│   │       └── sections/          Hero, Services, About, etc.
│   └── package.json
│
├── backend/                   ← PHP + MySQL Backend
│   ├── config/
│   │   └── db.php             Database connection
│   ├── api/
│   │   ├── contact.php        POST - Save contact form
│   │   ├── leads.php          GET/PUT/DELETE - Manage leads
│   │   └── blog.php           CRUD - Blog posts
│   └── schema.sql             MySQL database schema
│
└── README.md
```

---

## 🚀 How to Run Locally

### Frontend (Next.js)
```bash
cd clicksemrus
npm install
npm run dev
# Opens at http://localhost:3000
```

### Backend (PHP + MySQL)
```bash
# 1. Import database schema
mysql -u root -p < backend/schema.sql

# 2. Update credentials in backend/config/db.php

# 3. Run with PHP built-in server
cd backend
php -S localhost:8000
# API available at http://localhost:8000/api/
```

---

## 📄 Website Pages

| Page | URL | Description |
|---|---|---|
| Home | `/` | Hero, Services, About, Process, Stats, Testimonials |
| About | `/about` | Story, Values, Team |
| Services | `/services` | All 6 services in detail |
| Portfolio | `/portfolio` | 6 case studies with results |
| Blog | `/blog` | Articles and insights |
| Contact | `/contact` | Contact form |
| Admin | `/admin` | Dashboard, Leads, Blog Manager |

---

## 🎨 Design System

- **Theme:** Light/Professional (white + purple gradient)
- **Primary Color:** `#6C47FF` (Electric Purple)
- **Font:** Inter + Space Grotesk
- **Style:** Clean, minimal, conversion-focused

---

## 🗄️ Database Tables

| Table | Purpose |
|---|---|
| `leads` | Contact form submissions |
| `blog_posts` | Blog articles |
| `admin_users` | Admin login accounts |
| `subscribers` | Email newsletter |

---

## 🔄 Update Log

| Date | Update |
|---|---|
| 2026-04-14 | Complete website rebuild — Next.js + PHP + MySQL |
| 2026-04-14 | Initial HTML prototype (replaced) |

---

## 📞 Brand Info

**Brand:** Clicksemrus  
**Email:** hello@clicksemrus.com  
**Phone:** +91 12345 67890  
**Type:** Digital Marketing Agency

---

_Built for Clicksemrus — Result-Driven Digital Marketing Agency_

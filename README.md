
# 🩺 Doctor Listing Platform (Apollo Clone)

A full-stack clone of the Apollo 24/7 doctor listing page using **Next.js (frontend)** and **Express + MongoDB (backend)**.  
It supports filtering doctors by **consultation mode**, **experience**, **fees**, **language**, and **facility**, with pagination and REST API integration.

Live reference: [Apollo General Physician Page](https://www.apollo247.com/specialties/general-physician-internal-medicine)

---

## ⚙️ Technologies Used

### Frontend (Next.js)
- **Next.js 14 (App Router)**
- **Vanilla CSS**
- **Dynamic Filters with SearchParams**
- **Off-page SEO Support**
- **Custom Hook (`useFilter`)**
- **SSR Ready**

### Backend (Express.js + MongoDB)
- **Express.js REST API**
- **MongoDB with Mongoose**
- **Filtering, Range Search, Pagination**
- **Endpoints: `/add-doctor`, `/list-doctors`**

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- NPM or Yarn

---

### ▶️ Start Next.js App

```bash
npm run dev
```

### 🌐 Main Page

* Route: `/`
* Filters: Multi-select checkboxes
* Features:

  * SEO Tags using `<head>`
  * Filter persistence via URL
  * Pagination
  * Dummy doctors display

---

## 🧩 Key Features

* Dynamic URL-based filtering (great for SEO + shareable URLs)
* Full range search with multiple ranges
* Server-side pagination support
* Responsive UI (Apollo-style clone)
* Easily extendable schema and UI

---
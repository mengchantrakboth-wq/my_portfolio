import coffeeshop from "../assets/icons/projects/coffeshop.png";
export const projects = [
  {
    id: 'coffee-store',
    path: '~/projects/coffee-store',
    title: 'Coffee Store Website',
    summary:
      'A responsive coffee shop website with a working cart, product catalog, and account pages — vanilla HTML, CSS, and JavaScript.',
    description:
      "A multi-page coffee shop site built with plain HTML, CSS, and JavaScript. Includes a homepage, a full drinks/beans menu, a filterable shop page (beans, brew gear, merch) with category tabs, an about page with team and location sections, and a login/sign-up page with client-side validation. A shared cart system (add/remove/quantity, persisted in localStorage) and live search work across every page, along with a mobile nav, scroll-reveal animations, and toast notifications.",
    role: 'Solo — layout, responsive design, cart logic, page structure',
    team: [],
    course: 'Independent project',
    stack: ['HTML', 'CSS', 'JavaScript'],
    year: '2026',
    type: 'Solo project',
    links: { repo: 'https://github.com/mengchantrakboth-wq/Coffee-Store', demo: 'https://coffee-store-gold.vercel.app/index.html' },
    image: coffeeshop,
  },
  {
    id: 'cafepos',
    path: '~/projects/cafe-shop-pos',
    title: 'Cafe Shop POS',
    summary:
      'A point-of-sale desktop app for a cafe: order entry, receipts, and a MySQL-backed inventory, built with a four-person team.',
    description:
      "A group project for Advanced Java Programming, built with Java Swing and MySQL. Handles order entry, receipt printing, and inventory tracking end to end. Along the way we tracked down a flaky OS print-to-PDF path and moved receipt export onto a dedicated Export File flow instead, and put together a full project book with system diagrams, database schema cards, and inline code walkthroughs.",
    role: 'Team member — UI panels, print/export flow, project documentation',
    team: ['Samnang Tharith', 'Ros Monycheysattia', 'Yang Raksmey'],
    course: 'Advanced Java Programming · Instructor: Ung Rithy',
    stack: ['Java', 'Swing', 'MySQL', 'NetBeans'],
    year: '2026',
    type: 'Group project',
    links: { repo: '', demo: '' },
    image: '/images/projects/cafepos.png',
  },
  {
    id: 'lms',
    path: '~/projects/lms-frontend',
    title: 'Learning Management System',
    summary:
      'A role-based LMS frontend — separate student and admin experiences over a Laravel API.',
    description:
      "A React + Vite frontend for a learning management system, with role-based routing that splits student and admin experiences behind the same shell. Talks to a Laravel backend authenticated with Sanctum. The admin side covers CRUD pages for courses and users; the student side is built around a 'Roster & Ledger' style home page for tracking enrollment and progress.",
    role: 'Frontend — routing, admin CRUD views, student dashboard',
    team: [],
    course: 'Independent / coursework project',
    stack: ['React', 'Vite', 'Laravel', 'Sanctum'],
    year: '2026',
    type: 'Solo project',
    links: { repo: '', demo: '' },
    image: '/images/projects/lms.png',
  },
  {
    id: 'phone-shop',
    path: '~/projects/phone-shop-app',
    title: 'Phone Shop E-Commerce',
    summary:
      'A full-stack e-commerce app for a phone shop — Vue 3 storefront, Laravel API, Dockerized deploy.',
    description:
      'A full-stack e-commerce application: a Vue 3 storefront (Vue Router + Pinia) backed by a Laravel 10 REST API. The API covers Sanctum authentication with a single shared login/register endpoint split by role-based middleware, product CRUD with image upload, and consistent JSON error handling. The schema went through a real review pass — adding an Order_Items pivot table was the key fix. Containerized with Docker and MySQL 8.0 locally, with a custom Dockerfile and Nginx/Supervisor setup for deploying the API to Render.',
    role: 'Full-stack — API design, schema, Docker deployment, storefront auth',
    team: [],
    course: 'Independent project',
    stack: ['Vue 3', 'Pinia', 'Laravel', 'MySQL', 'Docker'],
    year: '2026',
    type: 'Solo project',
    links: { repo: '', demo: '' },
    image: '/images/projects/phone-shop.png',
  },
]

# My Portfolio Website

A modern, responsive portfolio built with React (Vite) and TailwindCSS. Single-page layout with four primary sections: Landing, About, Projects, and Contact. Contact form uses EmailJS to send messages.

---

## Demo

Live demo: https://your-vercel-deployment.vercel.app

---

## Features

- Built with React + Vite for fast dev and builds
- TailwindCSS utility-first styling
- Responsive: Desktop / Tablet / Mobile
- Component-based structure (each section is a component)
- Optional dark mode toggle
- Project showcase with thumbnails and links
- Contact form integrated with EmailJS (Name, Email, Message, success/error feedback)
- Social links: GitHub, LinkedIn, Twitter

---

## Tech Stack

- React
- Vite
- TailwindCSS
- EmailJS
- React Icons

---

## Project Structure
```bash
my-portfolio/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.tsx
│  │  ├─ Landing.tsx
│  │  ├─ About.tsx
│  │  ├─ Projects.tsx
│  │  ├─ ProjectCard.tsx
│  │  └─ Contact.tsx
│  ├─ data/
│  │  └─ projects.ts
│  ├─ assets/      # images (profile, thumbnails)
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ public/         # public assets (images, favicon)
├─ package.json
├─ vite.config.ts
└─ tailwind.config.cjs
```
---

## Installation

1. Clone the repo and install dependencies:
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd paxius-portfolio
npm install
```

2. Create a .env file in the project root with EmailJS credentials (Vite requires VITE_ prefix):
```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

3. Run the dev server:
```bash
npm run dev
```
Open http://localhost:5173

---

## Build & Deploy (Vercel)

1. Build for production:
```bash
npm run build
```

2. Deploy to Vercel:
- Push repo to GitHub.
- Import project in Vercel.
- Set Environment Variables (same VITE_ keys).
- Build Command: npm run build
- Output Directory: dist

---

## Customization

- Profile & project images: update files in /public and src/assets
- Projects list: edit src/data/projects.ts
- Social links: edit Contact.tsx
- Tailwind colors/typography: update tailwind.config.cjs and component classes
- Dark mode: toggle via Navbar component state

---

## License

MIT License © [Paxius]

--- 

Notes:
- Keep EmailJS keys secret; do not commit .env to git.
- Replace demo link and GitHub repo URL with your own before publishing.

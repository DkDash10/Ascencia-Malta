# Ascencia Malta

A fully static, responsive frontend website built with **React 19 + Vite**, recreating the [Ascencia Malta](https://www.ascencia-business-school.mt/) website with a fresh UI theme. No UI libraries were used — all layout, components, and animations are written from scratch using plain CSS Modules.

---

## 🔗 Live Demo

> https://ascencia-malta.onrender.com/

---

## 🛠 Tech Stack

| Category       | Choice                                              |
|----------------|-----------------------------------------------------|
| Framework      | React 19 (functional components + hooks)            |
| Build Tool     | Vite 8                                              |
| Routing        | React Router DOM v7                                 |
| Styling        | CSS Modules + CSS custom properties                 |
| Fonts          | Google Fonts — Cormorant Garamond + DM Sans         |
| Linting        | ESLint 9 + React Hooks + React Refresh plugins      |
| Compiler       | React Compiler (babel-plugin-react-compiler)        |
| UI Libraries   | **None** — Bootstrap / Tailwind / MUI excluded      |

---

## 📄 Pages

| Route      | Page     | Key Sections                                                                                                                                               |
|------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/`        | Home     | Hero · Programmes Carousel · About Strip · Why Floriana · Director Message · Campuses · Partners · Accreditations · News & Events · Join Us / Work With Us |
| `/about`   | About Us | Page Hero · Pedagogy & Mission · Core Values · Mission Banner · Accreditations |
| `/contact` | Contact  | Page Hero · Contact Form · Contact Info · Google Map |

---

## 📁 Project Structure

```
Ascencia-Malta/
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
├── package-lock.json
├── .gitignore
├── .gitattributes
├── README.md
└── src/
    ├── main.jsx                                  # React entry point
    ├── App.jsx                                   # BrowserRouter + Routes
    ├── styles/
    │   └── globals.css                           # CSS variables, reset, utility classes
    ├── assets/
    │   ├── logo.png                              # Ascencia brand logo
    │   └── accredited/                           # Accreditation body logos
    │       ├── athelogo.png
    │       ├── bgam.png
    │       ├── edusign.png
    │       ├── EQF.png
    │       ├── erasmuspluslogo.png
    │       ├── getqualified.png
    │       └── tmc.png
    ├── pages/
    │   ├── Home.jsx
    │   ├── About.jsx
    │   ├── Contact.jsx
    │   └── Contact.module.css
    └── components/
        ├── layout/
        │   ├── Navbar.jsx                        # Fixed nav with mobile hamburger drawer
        │   ├── Navbar.module.css
        │   ├── Footer.jsx
        │   └── Footer.module.css
        ├── common/
        │   ├── Button.jsx                        # 4 variants · 3 sizes
        │   ├── Button.module.css
        │   ├── Card.jsx                          # 3 variants (default, ghost, dark)
        │   ├── Card.module.css
        │   ├── Partners.jsx                      # Reusable partner logos strip
        │   ├── Partners.module.css
        │   ├── Section.jsx                       # Section wrapper (bg + padding variants)
        │   └── Section.module.css
        ├── home/
        │   ├── Hero.jsx                          # Full-screen hero with stats panel
        │   ├── Hero.module.css
        │   ├── Programs.jsx                      # Carousel — prev/next, snap scroll, dots, swipe
        │   ├── Programs.module.css
        │   ├── WhyUs.jsx                         # About strip · Floriana · Director · Campuses · Accreditations
        │   ├── WhyUs.module.css
        │   ├── News.jsx                          # Filterable news grid (All / News / Event)
        │   ├── News.module.css
        │   ├── JoinUs.jsx                        # Why Join Us banner
        │   └── JoinUs.module.css
        ├── about/
        │   ├── PageHero.jsx                      # Reusable inner-page hero (About + Contact)
        │   ├── PageHero.module.css
        │   ├── Pedagogy.jsx
        │   ├── Pedagogy.module.css
        │   ├── Values.jsx                        # Core values · Mission banner 
        │   ├── Values.module.css
        └── contact/
            ├── ContactForm.jsx                   # Controlled form · validation · success state
            ├── ContactForm.module.css
            ├── ContactInfo.jsx                   # Address · email · phone · hours · socials
            ├── ContactInfo.module.css
            ├── Departments.jsx                   # Google Map iframe
            └── Departments.module.css
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/DkDash10/Ascencia-Malta.git
cd Ascencia-Malta

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

App runs at **http://localhost:5173**

### Other Scripts

```bash
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

---

## ✨ Features

### Programmes Carousel
- Built from scratch — no external carousel library
- CSS `scroll-behavior: smooth` + `scroll-snap-type: x mandatory`
- Manual Prev / Next buttons with disabled state at boundaries
- Dot indicators that expand into a gold pill for the active page
- Responsive visible count: **3 cards** (≥1024px) · **2** (640–1023px) · **1** (<640px)
- Mouse drag and touch swipe support

### News & Events
- Filter tabs — **All / News / Event** — filter in place without re-rendering the page
- Editorial layout: large featured article (left) + side card stack (right)
- Real articles sourced from the live Ascencia Malta website

### Contact Form
- Fully controlled React state with `useState`
- Client-side validation with per-field error messages
- Success confirmation state on submit (no backend required)

### Responsive Design
- Breakpoints at **1024px · 768px · 640px · 480px**
- Mobile hamburger drawer with smooth slide-in transition
- All sections reflow to single column on mobile

---

## 🎨 Design Decisions

| Decision | Rationale |
|----------|-----------|
| **CSS Modules** | Scoped styles per component, zero runtime overhead, no class name collisions |
| **CSS custom properties** | All design tokens (`--clr-*`, `--font-*`, `--sp-*`) centralised in `globals.css` |
| **Cormorant Garamond + DM Sans** | Refined academic feel — display serif for headings, clean sans-serif for body |
| **Navy `#0B1F3A` + Gold `#C9A84C`** | Aligned with Ascencia brand identity while bringing a fresh, premium aesthetic |
| **Local asset folder** | Accreditation logos stored in `src/assets/accredited/` for reliability and offline use |
| **No UI libraries** | Assignment requirement; keeps the bundle lean and all styling fully customisable |

---

## 📋 Assignment Reference

- **Source website:** [ascencia-business-school.mt](https://www.ascencia-business-school.mt/)
- **Pages recreated:** Home · About Us · Contact
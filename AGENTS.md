# Project Context: Landing Page Escalada

## 1. Project Overview
- **Goal:** Create a high-performance, visually striking landing page for a mountain climbing & tour company.
- **Aesthetic:** Adventure, Earth tones, clean typography, emphasis on high-quality photography.
- **Key Features:** Hero Section (video/image), Services Grid, WhatsApp Reservation link, Gallery.

## 2. Tech Stack
- **Framework:** React 19 (Vite)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4 (using CSS variables for theming)
- **Animation:** tailwindcss-animated
- **Icons:** Lucide React (Standard)
- **Package Manager:** npm

## 3. Architecture: Atomic Design
Structure the `src/components` folder strictly as follows:
- **atoms/**: Base components (Button, Input, IconWrapper, Typography). NO business logic.
- **molecules/**: Simple combinations (ServiceCard, NavItem, SocialButton).
- **organisms/**: Complex sections (HeroSection, ServicesGrid, Navbar, Footer).
- **templates/**: Page layouts (MainLayout).
- **pages/**: Route views / Landing assembly.

## 4. Development Workflow & Commands
Use these commands for project management. Do not use yarn or pnpm.
- **Start Dev Server:** `npm run dev`
- **Build Production:** `npm run build`
- **Linting:** `npm run lint`
- **Preview Build:** `npm run preview`

## 5. Coding Standards & Rules
1. **Component Structure:**
   - Use Arrow Functions: `const ComponentName = ({ prop }: Props) => { ... }`.
   - Always export component at the end or inline export default.
2. **Typing:**
   - Explicitly define `interface Props` for every component.
   - Extend HTML attributes when necessary: `interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>`.
3. **Styling Strategy:**
   - Use `cn()` utility for class merging on ALL reusable components (`atoms` & `molecules`).
   - Use **Variants** pattern for buttons/cards (Primary/Secondary/Outline) instead of creating separate components.
   - **Mobile First:** Write base classes for mobile, use `md:` and `lg:` for larger screens.
4. **Imports:**
   - Use Absolute Imports: `import { Button } from '@/components/atoms/Button'` (Configured in tsconfig).

## 6. Business Logic (Minimal)
- This is a static site.
- CTA (Call to Action) buttons should primarily link to:
  - WhatsApp API link.
  - Linktree URL.
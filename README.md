# 🌟 Frontend Intern Assignment

A pixel-perfect implementation of the provided Figma design using **React (TypeScript), Vite, TailwindCSS**, and custom SVG/GIF assets.  
This project demonstrates UI precision, clean code structure, accessibility, and interactive quiz logic.

---

## 🔗 Live Demo  
👉 *https://frontend-intern-assignment-eta.vercel.app/*

## 📦 GitHub Repository  
👉 *https://github.com/Mradull/frontend-intern-assignment*

---
# 🛠 Setup Instructions

### **1. Clone the repository**
```sh
git clone https://github.com/your-username/frontend-intern-assignment.git
cd frontend-intern-assignment
```

2. Install dependencies
```sh
npm install
```

3. Start the development server
```sh
npm run dev
```
Local dev server will start at:
```sh
http://localhost:5173
```
---

# 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend Framework** | React + TypeScript |
| **Bundler** | Vite |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion (optional) |
| **Icons & Shapes** | Custom SVGs |
| **Graphics** | GIF assets extracted from Figma |
| **Deployment** | Vercel |

---

# 🎨 Features Implemented

### ✅ **1. Pixel-Perfect UI from Figma**
- Exact sizing, spacing, gradients, shadows, and typography  
- Outer gradient background  
- Large rounded frame  
- Main quiz card: **1542 × 856px**, 42px border-radius  
- Custom SVG “Best of Luck!” speech bubble  
- Paw GIF positioned accurately  
- Gradient italic header text  

---

### ✅ **2. Interactive Multi-Step Quiz**
- Each question shows on its **own screen**  
- Navigation logic as per assignment:
  - **Q1:** Back disabled (30% opacity), Next enabled  
  - **Q2–Q3:** Back + Next active  
  - **Q4:** Only Submit button  
- Cannot proceed without answering  

---

### ✅ **3. Segmented Progress Bar**
- 4 segments representing 4 questions  
- Each segment fills only when a question is answered  
- Smooth transitions  

---

### ✅ **4. Result Screen**
- Score out of total questions  
- Optional animated percentage  
- “Start Over” button resets everything  

---

### ✅ **5. Accessibility**
- Keyboard navigation  
- Focus rings for interactive elements  
- Proper ARIA labels  
- High contrast text  

---

## 📐 Assumptions Made

- The UI is optimized for **desktop screens only**, matching the Figma design.
- The quiz contains **exactly 4 questions**, aligning with the segmented progress bar.
- The speech bubble design was **reconstructed manually using SVG** (not a plain HTML element).
- No backend or database is required; all data and logic are **client-side** only.
- Colors, gradients, shadows, fonts, and spacing were taken directly from the provided Figma design (approximated where necessary for web rendering).

---

## ⏱ Time Spent

| Task                                                 | Estimated Time |
| ---------------------------------------------------- | -------------- |
| Project setup (Vite, Tailwind, repo)                 | 15 min         |
| Layout & main card structure                         | 1.5 hrs        |
| Pixel-perfect styling (gradients/shadows/typography) | 2 hrs          |
| Quiz logic (state, navigation, validation)           | 1.5 hrs        |
| Progress & animations                                | 15 min         |
| Result screen & polish                               | 30 min         |
| Debugging & refinements                              | 1 hr           |
| **Total (estimate)**                                 | **~7–8 hours** |


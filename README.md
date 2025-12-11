📘 Frontend Intern Assignment – Quiz Interface (Figma → React Implementation)

This project is a pixel-perfect implementation of the given Figma design for a multi-step quiz interface. It includes interactive navigation, animated progress tracking, and a final score screen with a polished UI using React, TypeScript, and TailwindCSS.

🚀 Live Demo

(Add your deployed Vercel/Netlify link here)

📦 Tech Stack Used
Core Technologies

React (TypeScript) – Component-based architecture and type-safety

Vite – Super fast development bundler

Tailwind CSS – Utility-first styling and responsive design

Framer Motion (if used) – Smooth animations and transitions

Additional Tools / Libraries

clsx – Conditional class merging

Custom SVG assets – For speech bubble and icons

GIF assets – For the paw animation used in the UI

🧩 Features Implemented
✔ 1. Pixel-Perfect UI

Fully matches the provided Figma layout:

Outer gradient background

Large rounded frame

Inner main rectangle (1542×856px)

Speech bubble SVG

Paw GIF placement

Typography, gradient headings, spacing

✔ 2. Multi-Step Quiz Flow

Each question appears on a separate screen

Navigation:

First question: only Back (disabled look) + Next

Middle questions: Back + Next

Last question: Submit only

Keyboard navigation support (optional)

✔ 3. Segmented Progress Bar

4-segment bar updates dynamically based on answered questions

Smooth visual transition

Matches Figma segment spacing

✔ 4. Styled Option Cards

Options use exact Figma sizes (896×78px)

Gradient, hover state, and selected states implemented

Border colors extracted from design

✔ 5. Final Result Screen

Shows dynamic score calculation

Restart button resets all state

Percentage animation (if implemented)

✔ 6. Fully Responsive (Desktop Only Required)

Although desktop was required, layout gracefully downscales for smaller screens.

🛠 Setup Instructions

Follow these steps to run the project locally.

1. Clone the repository
git clone https://github.com/your-username/frontend-intern-assignment.git
cd frontend-intern-assignment

2. Install dependencies
npm install

3. Start development server
npm run dev


Vite will provide a local URL, usually:

http://localhost:5173

4. Build for production
npm run build

5. Preview production build
npm run preview

📐 Assumptions Made

The quiz will always have 4 questions, matching the Figma design

The UI is primarily for desktop screens (Figma design dimensions 1920px canvas)

Speech bubble and paw graphic were interpreted and rebuilt using SVG + GIF

No backend or API integration was required; all data is local

User accessibility improvements (focus rings, keyboard nav) were added where appropriate

Time spent was optimized for design accuracy over mobile responsiveness

⏱ Time Spent on the Assignment
Task	Duration
Project setup (Vite, Tailwind, structure)	30 min
Building layout & card structure	1.5 hrs
Pixel-perfect styling, gradients, shadows	2 hrs
Quiz logic (state, navigation, validation)	1.5 hrs
Progress bar + animations	45 min
Result screen implementation	30 min
Debugging, refinement, cleanup	1 hr
Total Time Spent	7–8 hours

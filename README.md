# 🖼️ MyEra Sticker Canvas App

A simple, interactive React + Konva web app that lets users drag-and-drop stickers onto a canvas, reposition them, and download the final design as an image. Built as part of the MyEra Frontend Internship mini-task.



## 🚀 Features

- 🎨 600×400 canvas using react-konva
- 📎 Drag-and-drop stickers
- ➕ Add stickers with emoji/PNG buttons
- ♻️ Delete stickers via double-click (bonus)
- 📐 Snap to 40px grid (bonus)
- 💾 Download canvas as PNG



## 📸 Demo

> 🎥 Demo: [Loom Demo Video](https://drive.google.com/file/d/1Qh2xcvqdksyaCvzwZUyUd5AS_ssH5e_G/view)  
> 🧪 Try it locally using the steps below!



## 🧰 Tech Stack

- React (Functional Components + Hooks)
- Konva + react-konva
- use-image hook for loading assets
- HTML5 Canvas API (`toDataURL`)
- CSS Flexbox for layout



## 📂 Folder Structure

```
myera-sticker-app/
├── public/
│   └── stickers/
│       ├── sticker1.png
│       ├── sticker2.png
│       └── sticker3.png
├── src/
│   ├── components/
│   │   ├── Canvas.css
│   │   ├── Canvas.js
│   │   ├── StickerButton.css
│   │   └── StickerButton.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── README.md
└── package.json
```

## 🧑‍💻 Setup Instructions

### 1. Clone & Install

```bash
git clone https://github.com/your-username/myera-sticker-app.git
cd myera-sticker-app
npm install
```

### 2. Start the App

```bash
npm start
```

App runs locally at [http://localhost:3000](http://localhost:3000)
## ⚙️ How It Works

- Click a sticker button → sticker appears on canvas.  
- Drag stickers around freely.  
- Double-click a sticker → it gets removed (bonus).  
- Click “Download” → image saved as PNG.  
- Stickers snap to grid when placed or dragged (bonus).  



## 🧠 Key Concepts

- `useState` to manage stickers: `{ id, image, x, y }`
- `useRef` for canvas reference (used in download)
- `useImage` to load sticker PNGs
- `react-konva` for `<Stage>`, `<Layer>`, and `<Image>`
- Event handlers: `onClick`, `onDragEnd`, `onDblClick`



## ✅ To-Do Checklist

- [x] Set up React project with `create-react-app`
- [x] Create Canvas with `react-konva`
- [x] Add Sticker buttons
- [x] Implement drag-and-drop
- [x] Add download functionality
- [x] Bonus: Double-click to delete
- [x] Bonus: Snap stickers to 40px grid
- [x] Write `README` & push to GitHub

## 🙌 Author

Made with 💡 by **Ramesh** for **MyEra Frontend Internship**.

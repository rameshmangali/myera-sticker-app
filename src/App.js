import React, { useState, useRef } from 'react';
import Canvas from './components/Canvas';
import StickerButton from './components/StickerButton';
import './App.css';

function App() {
  const [placedStickers, setPlacedStickers] = useState([]);
  const canvasRef = useRef();
  const availableStickers = [
    '/stickers/sticker1.png',
    '/stickers/sticker2.png',
    '/stickers/sticker3.png'
  ];

  const handleAddSticker = (src) => {
    const stickerId = Date.now();
    const initialPosition = getSnappedPosition(50, 50);
    setPlacedStickers([...placedStickers, { id: stickerId, src, ...initialPosition }]);
  };

  const getSnappedPosition = (x, y) => ({
    x: Math.round(x / 40) * 40,
    y: Math.round(y / 40) * 40
  });

  const handleStickerDragEnd = (id, x, y) => {
    setPlacedStickers(
      placedStickers.map(sticker =>
        sticker.id === id ? { ...sticker, ...getSnappedPosition(x, y) } : sticker
      )
    );
  };

  const handleStickerRemove = (id) =>
    setPlacedStickers(placedStickers.filter(sticker => sticker.id !== id));

  const handleDownloadCanvas = () => {
    const uri = canvasRef.current.toDataURL();
    const downloadLink = document.createElement('a');
    downloadLink.href = uri;
    downloadLink.download = 'canvas.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div> 
      <div className='text-container'>
        <h1 style={{
  fontSize: '32px',
  color: '#1976d2',
  marginBottom: '10px',
  fontWeight: 'bold'
}}>
  🎨 Sticker Playground
</h1>

<p style={{
  fontSize: '18px',
  color: '#555',
}}>
  Tap on a sticker to add it, drag it around, double-click to remove, and download your creation as a PNG masterpiece!
</p></div>
      <div className="app-container">
        <Canvas
          stickers={placedStickers}
          onDragEnd={handleStickerDragEnd}
          onDblClick={handleStickerRemove}
          stageRef={canvasRef}
          width={600}
          height={400}
        />
        <div className="sidebar">
          <div className="stickers-container">
            {availableStickers.map(src => (
            <StickerButton
              key={src}
              imgSrc={src}
              onClick={() => handleAddSticker(src)}
            />
          ))}</div>
          <button className="download-btn" onClick={handleDownloadCanvas}>Download PNG</button>
        </div>
      </div>
    </div>
  );
}

export default App;
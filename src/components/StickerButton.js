import './StickerButton.css';

function StickerButton({ imgSrc, onClick }) {
  return (
    <button className="sticker-btn" onClick={onClick} style={{ margin: '0 8px' }}>
      <img src={imgSrc} alt="sticker" width={60} height={60} />
    </button>
  );
}

export default StickerButton;
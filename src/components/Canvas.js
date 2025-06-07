import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import './Canvas.css'

function DraggableSticker({ sticker, onDragEnd, onDblClick }) {
  const [img] = useImage(sticker.src);
  return (
    <Image
      image={img}
      x={sticker.x}
      y={sticker.y}
      draggable
      onDragEnd={e => onDragEnd(sticker.id, e.target.x(), e.target.y())}
      onDblClick={() => onDblClick(sticker.id)}
      width={100}
      height={100}
    />
  );
}

function Canvas({ stickers, onDragEnd, onDblClick, stageRef, width, height }) {
  return (
    <Stage ref={stageRef} width={width} height={height} className='canva-card'>
      <Layer>
        {stickers.map(sticker => (
          <DraggableSticker
            key={sticker.id}
            sticker={sticker}
            onDragEnd={onDragEnd}
            onDblClick={onDblClick}
          />
        ))}
      </Layer>
    </Stage>
  );
}

export default Canvas;
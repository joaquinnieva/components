import { useState } from 'react';

function Image() {
  const [src, setSrc] = useState<any>(null);

  const [output, setOutput] = useState<any>(null);

  const selectImage = (file: any) => {
    setSrc(URL.createObjectURL(file));
    setSrc(URL.createObjectURL(file));
  };

  const cropImageNow = () => {
    const canvas: any = document.createElement('canvas');
    const image: any = document.createElement('image');
    const crop: any = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);

    // Converting to base64
    const base64Image = canvas.toDataURL('image/jpeg');
    setOutput(base64Image);
  };

  return (
    <div className="App">
      <center>
        <input
          type="file"
          accept="image/*"
          onChange={(e: any) => {
            selectImage(e.target.files[0]);
          }}
        />
        <br />
        <br />
        <div>
          {src && (
            <div>
              <div id="canvas" className="w-[200px] h-[200px] border flex justify-center items-center overflow-hidden">
                <img id="image" src={src} className="w-full h-full object-cover" />
              </div>
              <br />
              <button onClick={cropImageNow}>Crop</button>
              <br />
              <br />
            </div>
          )}
        </div>
        <div>{output && <img src={output} />}</div>
      </center>
    </div>
  );
}

export default Image;

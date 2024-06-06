import React, { useState, useRef, useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { ChromePicker } from 'react-color';

const EsignPad = () => {
  const [textColor, setTextColor] = useState('#000000');
  const sigCanvas = useRef(null);

  const clearCanvas = () => {
    sigCanvas.current.clear();
  };

  const downloadSignature = () => {
    const canvas = sigCanvas.current.getCanvas();
    if (!canvas) {
      console.error('Canvas not found.');
      return;
    }
    const imageURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'signature.png';
    link.click();
  };

  const handleTextColorChange = (color) => {
    setTextColor(color.hex);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">E-Signature Board</h1>

      <div className="max-w-xl w-full bg-white rounded-lg shadow-md p-8 mb-8" style={{ backgroundColor: '#282A35' }}>
        <div className="flex justify-center">
          <div className="w-full">
            <div className="shadow-xl shadow-gray rounded-lg">
              <SignatureCanvas
                ref={sigCanvas}
                penColor={textColor}
                canvasProps={{ width: 500, height: 200 }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <div
            className="w-10 h-10 rounded cursor-pointer shadow-md"
            style={{ backgroundColor: textColor }}
            onClick={() => setShowColorPicker(!showColorPicker)}
          ></div>
          <div className="absolute top-full left-0 mt-2 z-10">
            <ChromePicker color={textColor} onChange={handleTextColorChange} />
          </div>
        </div>

        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={downloadSignature}
        >
          Download Signature
        </button>

        <button
          onClick={clearCanvas}
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default EsignPad;

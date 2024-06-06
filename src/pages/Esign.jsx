import { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { ChromePicker } from 'react-color';

const EsignPad = () => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [textColor, setTextColor] = useState('#000000');
  const [fontSize, setFontSize] = useState('16px');
  const [showBackgroundColorPicker, setShowBackgroundColorPicker] = useState(false);
  const [showTextColorPicker, setShowTextColorPicker] = useState(false);

  const sigCanvas = useRef(null);

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color.hex);
  };

  const handleTextColorChange = (color) => {
    setTextColor(color.hex);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
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

  const clearCanvas = () => {
    sigCanvas.current.clear();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">E-Signature Board</h1>

      <div className="max-w-xl w-full bg-gray-700 rounded-lg shadow-md p-8 mb-8">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="shadow-xl rounded-xl">
              <SignatureCanvas
                ref={sigCanvas}
                penColor={textColor}
                canvasProps={{ width: 500, height: 200, style: { backgroundColor: backgroundColor,borderRadius:"13px" } }}
              />
            </div>
            <div className="flex justify-center items-center mt-4">
              <button
                onClick={clearCanvas}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <div
            className="w-10 h-10 rounded cursor-pointer shadow-md bg-gray-300"
            style={{ backgroundColor: backgroundColor }}
            onClick={() => setShowBackgroundColorPicker(!showBackgroundColorPicker)}
          ></div>
          {showBackgroundColorPicker && (
            <div className="absolute top-full left-0 mt-2 z-10">
              <ChromePicker color={backgroundColor} onChange={handleBackgroundColorChange} />
            </div>
          )}
        </div>
        <div className="relative ">
          <div
            className="w-10 h-10 rounded cursor-pointer shadow-md bg-gray-300"
            style={{ backgroundColor: textColor }}
            onClick={() => setShowTextColorPicker(!showTextColorPicker)}
          ></div>
          {showTextColorPicker && (
            <div className="absolute top-full left-0 mt-2 z-10">
              <ChromePicker color={textColor} onChange={handleTextColorChange} />
            </div>
          )}
        </div>
        <select
          className="px-4 py-2 bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={fontSize}
          onChange={handleFontSizeChange}
        >
          <option value="10px">10px</option>
          <option value="20px">20px</option>
          <option value="30px">30px</option>
          <option value="40px">40px</option>
          <option value="50px">50px</option>
        </select>
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={downloadSignature}
        >
          Download Signature
        </button>
      </div>
    </div>
  );
};

export default EsignPad;

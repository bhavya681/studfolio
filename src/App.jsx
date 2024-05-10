import React, { useState, useRef } from "react";
import ESignPad from "./components/ESignPad";
import ColorPicker from "./components/ColorPicker";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("#000000");
  const [fontSize, setFontSize] = useState("16px");

  const sigCanvas = useRef(null);

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
  };

  const handleTextColorChange = (color) => {
    setTextColor(color);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };


  const downloadSignature = () => {
    const canvas = sigCanvas.current.getCanvas();
    if (!canvas) {
      console.error("Canvas not found.");
      return;
    }
    const imageURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "signature.png";
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">E-Signature Board</h1>

      <div className="max-w-xl w-full bg-white rounded-lg shadow-md p-8 mb-8"  style={{backgroundColor:"#282A35"}}>
        <div className="flex justify-center">
          <div className="w-full">
            <ESignPad
              backgroundColor={backgroundColor}
              textColor={textColor}
              fontSize={fontSize}
              forwardedRef={sigCanvas}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <ColorPicker color={backgroundColor} onChange={handleBackgroundColorChange} />
        <ColorPicker color={textColor} onChange={handleTextColorChange} />
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

export default App;
import { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { ChromePicker } from 'react-color';

const EsignPad = () => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [penColor, setPenColor] = useState('#000000');
  const [penWidth, setPenWidth] = useState(2);
  const [showBackgroundColorPicker, setShowBackgroundColorPicker] = useState(false);
  const [showPenColorPicker, setShowPenColorPicker] = useState(false);
  const sigCanvas = useRef(null);
  const [drawHistory, setDrawHistory] = useState([]);

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color.hex);
  };

  const handlePenColorChange = (color) => {
    setPenColor(color.hex);
  };

  const handlePenWidthChange = (e) => {
    setPenWidth(parseInt(e.target.value));
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
    setDrawHistory([]);
  };

  const undoLast = () => {
    if (drawHistory.length === 0) return;
    const newHistory = [...drawHistory];
    newHistory.pop();
    setDrawHistory(newHistory);
    sigCanvas.current.clear();
    newHistory.forEach((draw) => sigCanvas.current.fromDataURL(draw));
  };

  const handleEndStroke = () => {
    const currentCanvas = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    setDrawHistory((prevHistory) => [...prevHistory, currentCanvas]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">E-Signature Board</h1>

      <div className="max-w-xl w-full bg-gray-800 rounded-lg shadow-md p-4 md:p-6 mb-8">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="shadow-xl rounded-xl overflow-hidden">
              <SignatureCanvas
                ref={sigCanvas}
                penColor={penColor}
                canvasProps={{
                  width: 300, // Changed to responsive width
                  height: 200,
                  style: { backgroundColor: backgroundColor, borderRadius: '13px', width: '100%' } // Ensure full width
                }}
                minWidth={penWidth}
                maxWidth={penWidth}
                onEnd={handleEndStroke}
              />
            </div>
            <div className="flex justify-center items-center mt-4 space-x-2 md:space-x-4">
              <button
                onClick={clearCanvas}
                className="px-3 py-2 md:px-4 md:py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
              >
                Clear
              </button>
              <button
                onClick={undoLast}
                className="px-3 py-2 md:px-4 md:py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:border-yellow-300"
              >
                Undo
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative">
          <div
            className="w-8 h-8 md:w-10 md:h-10 rounded cursor-pointer shadow-md"
            style={{ backgroundColor: backgroundColor }}
            onClick={() => setShowBackgroundColorPicker(!showBackgroundColorPicker)}
          ></div>
          {showBackgroundColorPicker && (
            <div className="absolute top-full left-0 mt-2 z-10">
              <ChromePicker color={backgroundColor} onChange={handleBackgroundColorChange} />
            </div>
          )}
        </div>
        <div className="relative">
          <div
            className="w-8 h-8 md:w-10 md:h-10 rounded cursor-pointer shadow-md"
            style={{ backgroundColor: penColor }}
            onClick={() => setShowPenColorPicker(!showPenColorPicker)}
          ></div>
          {showPenColorPicker && (
            <div className="absolute top-full left-0 mt-2 z-10">
              <ChromePicker color={penColor} onChange={handlePenColorChange} />
            </div>
          )}
        </div>
        <select
          className="px-3 py-2 md:px-4 md:py-2 bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={penWidth}
          onChange={handlePenWidthChange}
        >
          <option value={2}>Thin</option>
          <option value={5}>Medium</option>
          <option value={10}>Thick</option>
        </select>
        <button
          className="px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={downloadSignature}
        >
          Download Signature
        </button>
      </div>
    </div>
  );
};

export default EsignPad;

import { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { ChromePicker } from 'react-color';

const Esign = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600 text-white p-8">
      <h1 className="text-4xl font-semibold mb-8">E-Signature Board</h1>

      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="border-2 border-gray-700 rounded-xl overflow-hidden">
              <SignatureCanvas
                ref={sigCanvas}
                penColor={penColor}
                canvasProps={{
                  width: 800,
                  height: 400,
                  style: { backgroundColor: backgroundColor, borderRadius: '10px', width: '100%' }
                }}
                minWidth={penWidth}
                maxWidth={penWidth}
                onEnd={handleEndStroke}
                aria-label="Signature pad"
                role="signature"
              />
            </div>
            <div className="flex justify-center items-center mt-6 space-x-6">
              <button
                onClick={clearCanvas}
                className="px-5 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Clear the signature pad"
              >
                Clear
              </button>
              <button
                onClick={undoLast}
                className="px-5 py-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                aria-label="Undo last stroke"
              >
                Undo
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="relative">
          <div
            className="w-12 h-12 rounded-full cursor-pointer shadow-lg transform hover:scale-110 transition duration-300"
            style={{ backgroundColor: backgroundColor }}
            onClick={() => setShowBackgroundColorPicker(!showBackgroundColorPicker)}
            aria-label="Select background color"
          ></div>
          {showBackgroundColorPicker && (
            <div className="absolute top-full left-0 mt-3 z-10">
              <ChromePicker color={backgroundColor} onChange={handleBackgroundColorChange} />
            </div>
          )}
        </div>
        <div className="relative">
          <div
            className="w-12 h-12 rounded-full cursor-pointer shadow-lg transform hover:scale-110 transition duration-300"
            style={{ backgroundColor: penColor }}
            onClick={() => setShowPenColorPicker(!showPenColorPicker)}
            aria-label="Select pen color"
          ></div>
          {showPenColorPicker && (
            <div className="absolute top-full left-0 mt-3 z-10">
              <ChromePicker color={penColor} onChange={handlePenColorChange} />
            </div>
          )}
        </div>
        <select
          className="px-5 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={penWidth}
          onChange={handlePenWidthChange}
          aria-label="Select pen width"
        >
          <option value={2}>Thin</option>
          <option value={5}>Medium</option>
          <option value={10}>Thick</option>
        </select>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={downloadSignature}
          aria-label="Download signature"
        >
          Download Signature
        </button>
      </div>
    </div>
  );
};

export default Esign;

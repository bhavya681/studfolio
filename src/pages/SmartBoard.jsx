import { useState, useRef, useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const SmartBoard = () => {
  const [background, setBackground] = useState("white");
  const [lineColor, setLineColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(3);
  const [tool, setTool] = useState("pencil");
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      console.log("Canvas ref initialized.");
    }
  }, []);

  const toggleBackground = () => {
    const newBackground = background === "white" ? "black" : "white";
    const newLineColor = background === "white" ? "#FFFFFF" : "#000000";
    setBackground(newBackground);
    setLineColor(newLineColor);
  };

  const downloadNotes = async () => {
    if (canvasRef.current) {
      try {
        const canvasData = await canvasRef.current.exportImage("png");
        const response = await fetch(canvasData);
        const blob = await response.blob();
        saveAs(blob, "whiteboard_blackboard_notes.png");
      } catch (error) {
        console.error("Error capturing canvas for download:", error);
      }
    } else {
      console.error("Invalid canvas reference.");
    }
  };

  const clearCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.clearCanvas();
    }
  };

  const undo = () => {
    if (canvasRef.current) {
      canvasRef.current.undo();
    }
  };

  const selectTool = (selectedTool) => {
    setTool(selectedTool);
    if (canvasRef.current) {
      const canvasContext = canvasRef.current.canvas.drawingContext;
      if (selectedTool === "pencil") {
        setLineColor("#000000");
        canvasContext.globalCompositeOperation = "source-over";
        canvasRef.current.canvas.style.cursor = "crosshair";
      } else if (selectedTool === "eraser") {
        setLineColor(background);
        canvasContext.globalCompositeOperation = "destination-out";
        canvasRef.current.canvas.style.cursor = "cell";
      } else {
        setLineColor("#000000");
        canvasContext.globalCompositeOperation = "source-over";
        canvasRef.current.canvas.style.cursor = "default";
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-4">
      <div className="mb-6 flex flex-wrap justify-center space-x-4 items-center">
        <div className="flex flex-wrap items-center justify-center space-x-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={toggleBackground}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-800 transition-colors duration-300"
            >
              Toggle Background
            </button>
            <button
              onClick={() => selectTool("pencil")}
              className={`px-6 py-3 rounded-lg shadow-lg transition-colors duration-300 ${
                tool === "pencil"
                  ? "bg-green-600 text-white"
                  : "bg-green-300 text-gray-700"
              }`}
            >
              Pencil
            </button>
            <button
              onClick={() => selectTool("eraser")}
              className={`px-6 py-3 rounded-lg shadow-lg transition-colors duration-300 ${
                tool === "eraser"
                  ? "bg-red-600 text-white"
                  : "bg-red-300 text-gray-700"
              }`}
            >
              Eraser
            </button>
            <button
              onClick={undo}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-800 transition-colors duration-300"
            >
              Undo
            </button>
            <button
              onClick={downloadNotes}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-800 transition-colors duration-300"
            >
              Download Notes
            </button>
            <button
              onClick={clearCanvas}
              className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-400 transition-colors duration-300"
            >
              Clear
            </button>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center">
              <select
                onChange={(e) => setLineColor(e.target.value)}
                value={lineColor}
                className="px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 sm:mb-0"
              >
                <option value="#000000">Black</option>
                <option value="#FFFFFF">White</option>
                <option value="#FF0000">Red</option>
                <option value="#00FF00">Green</option>
                <option value="#0000FF">Blue</option>
              </select>
              <input
                type="number"
                onChange={(e) => setLineWidth(parseInt(e.target.value))}
                value={lineWidth}
                className="px-4 py-3 w-24 bg-white border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Line Width"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl border-2 border-gray-500 rounded-lg shadow-lg overflow-hidden">
        <ReactSketchCanvas
          ref={canvasRef}
          style={{
            height: "80vh",
            width: "100%",
            cursor: tool === "pencil" ? "crosshair" : "cell",
          }}
          strokeColor={lineColor}
          strokeWidth={lineWidth}
          canvasColor={background}
          tool={tool}
        />
      </div>
    </div>
  );
};

export default SmartBoard;

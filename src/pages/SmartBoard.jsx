import  { useState, useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";

const SmartBoard = () => {
  const [background, setBackground] = useState("white");
  const [lineColor, setLineColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(3);
  const [tool, setTool] = useState("pencil"); // Default tool is Pencil
  const canvasRef = useRef(null);

  const toggleBackground = () => {
    const newBackground = background === "white" ? "black" : "white";
    const newLineColor = background === "white" ? "#FFFFFF" : "#000000";
    setBackground(newBackground);
    setLineColor(newLineColor);
  };

  const downloadNotes = () => {
    html2canvas(canvasRef.current.canvasContainer.children[0]).then(
      (canvas) => {
        canvas.toBlob((blob) => {
          saveAs(blob, "whiteboard_blackboard_notes.png");
        });
      }
    );
  };

  const takeScreenshot = () => {
    html2canvas(canvasRef.current.canvasContainer.children[0]).then(
      (canvas) => {
        const dataURL = canvas.toDataURL("image/png");
        window.open(dataURL);
      }
    );
  };

  const clearCanvas = () => {
    canvasRef.current.clearCanvas();
  };

  const undo = () => {
    canvasRef.current.undo();
  };

  const selectTool = (selectedTool) => {
    setTool(selectedTool);
  
    // Handle setting drawing color based on selected tool
    if (selectedTool === "pencil") {
      setLineColor("#000000"); // Set default drawing color for pencil tool
      canvasRef.current.canvas.drawingContext.globalCompositeOperation = "source-over";
      canvasRef.current.canvas.style.cursor = "crosshair";
    } else if (selectedTool === "eraser") {
      setLineColor(background); // Set drawing color same as canvas background for eraser tool
      canvasRef.current.canvas.drawingContext.globalCompositeOperation = "destination-out";
      canvasRef.current.canvas.style.cursor = "cell"; // Custom cursor for eraser
    } else {
      // Reset to default settings for other tools
      setLineColor("#000000"); // Set default drawing color for other tools if needed
      canvasRef.current.canvas.drawingContext.globalCompositeOperation = "source-over";
      canvasRef.current.canvas.style.cursor = "default";
    }
  };
  

  const setEraserCursor = () => {
    setLineColor(background); // Set eraser color same as canvas background
    canvasRef.current.canvas.drawingContext.globalCompositeOperation = "destination-out";
    canvasRef.current.canvas.style.cursor = "cell"; // Custom cursor for eraser
  };
  

  const createPDF = () => {
    const doc = new jsPDF();
    html2canvas(canvasRef.current.canvasContainer.children[0]).then(
      (canvas) => {
        const imgData = canvas.toDataURL("image/png");
        doc.addImage(imgData, "PNG", 10, 10);
        doc.save("board_notes.pdf");
      }
    );
  };

  const handleDrawShape = (shapeType) => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.canvas.drawingContext;

      context.strokeStyle = lineColor;
      context.lineWidth = lineWidth;
      context.fillStyle = background;

      switch (shapeType) {
        case "rectangle":
          context.fillRect(50, 50, 200, 100);
          context.strokeRect(50, 50, 200, 100);
          break;
        case "circle":
          context.beginPath();
          context.arc(150, 150, 50, 0, 2 * Math.PI);
          context.fill();
          context.stroke();
          break;
        case "line":
          context.beginPath();
          context.moveTo(50, 50);
          context.lineTo(200, 200);
          context.stroke();
          break;
        default:
          break;
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
              onClick={setEraserCursor}
              className={`px-6 py-3 rounded-lg shadow-lg transition-colors duration-300 ${
                tool === "eraser"
                  ? "bg-red-600 text-white"
                  : "bg-red-300 text-gray-700"
              }`}
            >
              Eraser
            </button>
            {/* <button
              onClick={() => handleDrawShape('rectangle')}
              className={`px-6 py-3 rounded-lg shadow-lg transition-colors duration-300 ${
                tool === 'rectangle' ? 'bg-yellow-600 text-white' : 'bg-yellow-300 text-gray-700'
              }`}
            >
              Rectangle
            </button>
            <button
              onClick={() => handleDrawShape('circle')}
              className={`px-6 py-3 rounded-lg shadow-lg transition-colors duration-300 ${
                tool === 'circle' ? 'bg-purple-600 text-white' : 'bg-purple-300 text-gray-700'
              }`}
            >
              Circle
            </button>
            <button
              onClick={() => handleDrawShape('line')}
              className={`px-6 py-3 rounded-lg shadow-lg transition-colors duration-300 ${
                tool === 'line' ? 'bg-indigo-600 text-white' : 'bg-indigo-300 text-gray-700'
              }`}
            >
              Line
            </button> */}
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
              onClick={takeScreenshot}
              className="px-6 py-3 bg-yellow-600 text-white rounded-lg shadow-lg hover:bg-yellow-800 transition-colors duration-300"
            >
              Screenshot
            </button>
            <button
              onClick={createPDF}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300"
            >
              Create PDF
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

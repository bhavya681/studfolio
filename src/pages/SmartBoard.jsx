import { useState, useRef, useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";

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
        saveAs(blob, "smartboard_notes.png");
      } catch (error) {
        console.error("Error capturing canvas for download:", error);
      }
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
      if (selectedTool === "pencil") {
        setLineColor("#000000");
      } else if (selectedTool === "eraser") {
        setLineColor(background);
      }
    }
  };

  const handleMouseDown = () => {
    if (tool === "eraser" && canvasRef.current) {
      canvasRef.current.eraseMode(true);
    }
  };

  const handleMouseUp = () => {
    if (tool === "eraser" && canvasRef.current) {
      canvasRef.current.eraseMode(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6"
    >
      <motion.div 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8 space-y-6"
      >
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={toggleBackground}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Switch Theme
            </button>
            <button
              onClick={() => selectTool("pencil")}
              className={`px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                tool === "pencil"
                  ? "bg-gradient-to-r from-green-500 to-green-700 text-white"
                  : "bg-white text-green-700 border-2 border-green-500"
              }`}
            >
              ✏️ Draw
            </button>
            <button
              onClick={() => selectTool("eraser")}
              className={`px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                tool === "eraser"
                  ? "bg-gradient-to-r from-red-500 to-red-700 text-white"
                  : "bg-white text-red-700 border-2 border-red-500"
              }`}
            >
              🧹 Erase
            </button>
            <button
              onClick={undo}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              ↩️ Undo
            </button>
            <button
              onClick={downloadNotes}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              💾 Save
            </button>
            <button
              onClick={clearCanvas}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              🗑️ Clear
            </button>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4"
          >
            <select
              onChange={(e) => setLineColor(e.target.value)}
              value={lineColor}
              className="px-4 py-3 bg-white border-2 border-gray-300 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              <option value="#000000">⚫ Black</option>
              <option value="#FFFFFF">⚪ White</option>
              <option value="#FF0000">🔴 Red</option>
              <option value="#00FF00">🟢 Green</option>
              <option value="#0000FF">🔵 Blue</option>
            </select>
            <input
              type="range"
              min="1"
              max="20"
              onChange={(e) => setLineWidth(parseInt(e.target.value))}
              value={lineWidth}
              className="w-32 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </motion.div>
        </div>

        <motion.div 
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <ReactSketchCanvas
            ref={canvasRef}
            style={{
              width: "100%",
              height: "100%",
              cursor: tool === "pencil" ? "crosshair" : "cell",
            }}
            strokeColor={lineColor}
            strokeWidth={lineWidth}
            canvasColor={background}
            eraserWidth={lineWidth * 2}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SmartBoard;

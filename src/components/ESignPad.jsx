import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { ChromePicker } from 'react-color';
import { motion } from 'framer-motion';

const EsignPad = () => {
  const [textColor, setTextColor] = useState('#000000');
  const [showColorPicker, setShowColorPicker] = useState(false);
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-8 md:py-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent mb-8 md:mb-12 text-center"
        >
          Professional Digital Signature Studio
        </motion.h1>

        <motion.div 
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-10 md:mb-14 backdrop-blur-lg bg-opacity-95 border border-gray-100"
        >
          <div className="relative w-full aspect-[2.5/1] md:aspect-[3.5/1] bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <SignatureCanvas
              ref={sigCanvas}
              penColor={textColor}
              canvasProps={{
                className: 'w-full h-full cursor-crosshair',
                style: { 
                  backgroundColor: '#ffffff',
                  border: '3px solid #e5e7eb',
                  borderRadius: '1rem',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
                }
              }}
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <button
              className="flex items-center gap-4 px-8 py-4 bg-white border-2 border-gray-200 rounded-xl shadow-md hover:bg-gray-50 transition-all duration-300"
              onClick={() => setShowColorPicker(!showColorPicker)}
            >
              <div 
                className="w-8 h-8 rounded-full border-2 border-gray-200 shadow-inner"
                style={{ backgroundColor: textColor }}
              />
              <span className="text-base font-medium text-gray-700">Select Color</span>
            </button>
            {showColorPicker && (
              <div className="absolute top-full left-0 mt-3 z-50">
                <div 
                  className="fixed inset-0" 
                  onClick={() => setShowColorPicker(false)}
                />
                <ChromePicker 
                  color={textColor} 
                  onChange={handleTextColorChange}
                  className="relative z-50 shadow-2xl"
                />
              </div>
            )}
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-900 focus:ring-4 focus:ring-blue-300 transition-all duration-300 shadow-lg text-lg"
            onClick={downloadSignature}
          >
            Download Signature
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearCanvas}
            className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-900 focus:ring-4 focus:ring-red-300 transition-all duration-300 shadow-lg text-lg"
          >
            Clear Canvas
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EsignPad;

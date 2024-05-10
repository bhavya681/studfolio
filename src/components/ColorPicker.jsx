import React, { useState } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = ({ color, onChange }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorChange = (color) => {
    onChange(color.hex);
  };

  return (
    <div className="relative">
      <div
        className="w-10 h-10 rounded cursor-pointer shadow-md"
        style={{ backgroundColor: color }}
        onClick={() => setShowColorPicker(!showColorPicker)}
      ></div>
      {showColorPicker && (
        <div className="absolute top-full left-0 mt-2 z-10">
          <ChromePicker color={color} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;

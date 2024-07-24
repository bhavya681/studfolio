import React, { useState, useRef, useCallback } from "react";
import Cropper from "react-easy-crop";
import { HexColorPicker } from "react-colorful";
import { Slider } from "@mui/material";
import Box from "@mui/material/Box";
import { saveAs } from "file-saver";
import clsx from "clsx";

const PassportPhotoGenerator = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [transparentBackground, setTransparentBackground] = useState(false);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const getCroppedImage = async () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = imageSrc;
    await new Promise((resolve) => (image.onload = resolve));

    const { width, height } = croppedAreaPixels;
    canvas.width = width;
    canvas.height = height;

    if (transparentBackground) {
      ctx.clearRect(0, 0, width, height);
    } else {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);
    }

    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      width,
      height
    );

    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%)`;

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, "image/png");
    });
  };

  const downloadImage = async () => {
    const blob = await getCroppedImage();
    saveAs(blob, "passport_photo.png");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 md:p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Passport Photo Generator</h1>
      <div className="mb-6">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {imageSrc && (
        <>
          <div className="relative w-full max-w-lg h-80 mb-6 border border-gray-300 rounded-lg overflow-hidden">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
              cropShape="rect"
              showGrid={false}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-4">
              <HexColorPicker
                color={backgroundColor}
                onChange={setBackgroundColor}
                className="w-20 h-20"
              />
              <div className="flex flex-col">
                <span className="text-xl font-semibold">Background Color</span>
                <label className="inline-flex items-center mt-2">
                  <input
                    type="checkbox"
                    checked={transparentBackground}
                    onChange={(e) => setTransparentBackground(e.target.checked)}
                    className="form-checkbox"
                  />
                  <span className="ml-2 text-lg">Transparent Background</span>
                </label>
              </div>
            </div>
            <Box className="flex flex-col items-center space-y-4">
              <span className="text-xl font-semibold">Brightness</span>
              <Slider
                value={brightness}
                onChange={(e, newValue) => setBrightness(newValue)}
                aria-labelledby="brightness-slider"
                min={50}
                max={150}
                sx={{ width: 150 }}
              />
            </Box>
            <Box className="flex flex-col items-center space-y-4">
              <span className="text-xl font-semibold">Contrast</span>
              <Slider
                value={contrast}
                onChange={(e, newValue) => setContrast(newValue)}
                aria-labelledby="contrast-slider"
                min={50}
                max={150}
                sx={{ width: 150 }}
              />
            </Box>
          </div>
          <button
            onClick={downloadImage}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-800 transition-colors duration-300"
          >
            Download Passport Photo
          </button>
        </>
      )}
    </div>
  );
};

export default PassportPhotoGenerator;

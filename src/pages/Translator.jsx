/*
import React, { useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

const Translator = () => {
  const [text, setText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('hi');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const languages = {
    en: 'English',
    hi: 'Hindi',
    bn: 'Bengali',
    ta: 'Tamil',
    te: 'Telugu',
    mr: 'Marathi',
    gu: 'Gujarati',
    kn: 'Kannada',
    ml: 'Malayalam',
    pa: 'Punjabi',
    ur: 'Urdu',
    es: 'Spanish',
    fr: 'French',
    de: 'German',
    it: 'Italian',
    pt: 'Portuguese',
    zh: 'Chinese',
    ja: 'Japanese',
    ko: 'Korean',
    ar: 'Arabic',
    ru: 'Russian'
  };

  const translateText = async () => {
    if (!text) return;
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('https://libretranslate.com/translate', {
        q: text,
        source: sourceLanguage,
        target: targetLanguage,
        format: 'text'
      }, {
        headers: { 'Content-Type': 'application/json' }
      });
      setTranslatedText(response.data.translatedText);
    } catch (err) {
      setError('Translation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleTranslate = (e) => {
    e.preventDefault();
    translateText();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Translator</h1>
      <form onSubmit={handleTranslate} className="w-full max-w-md flex flex-col items-center">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to translate"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md mb-4"
          rows="4"
        />
        <div className="flex space-x-4 mb-4">
          <select
            onChange={(e) => setSourceLanguage(e.target.value)}
            value={sourceLanguage}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md"
          >
            {Object.entries(languages).map(([code, name]) => (
              <option key={code} value={code}>{name}</option>
            ))}
          </select>
          <select
            onChange={(e) => setTargetLanguage(e.target.value)}
            value={targetLanguage}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md"
          >
            {Object.entries(languages).map(([code, name]) => (
              <option key={code} value={code}>{name}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Translate
        </button>
      </form>
      {loading && <p className="mt-4 text-blue-600">Translating...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {translatedText && !loading && !error && (
        <div className="mt-6 p-4 border border-gray-300 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Translated Text:</h2>
          <p className="text-gray-800">{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;


*/

import React, { useState } from "react";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import browserImageCompression from "browser-image-compression";
import { Button, Input, Slider, CircularProgress, Typography, Box } from "@mui/material";

const Translator = () => {
  const [files, setFiles] = useState([]);
  const [compressedFile, setCompressedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [compressionLevel, setCompressionLevel] = useState(100); // Compression level or quality

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleCompressionLevelChange = (event, newValue) => {
    setCompressionLevel(newValue);
  };

  const compressFiles = async () => {
    if (files.length === 0) return;

    setLoading(true);
    setError("");
    
    try {
      const zip = new JSZip();
      const filePromises = Array.from(files).map(async (file) => {
        if (file.type.startsWith("image/")) {
          // Compress image files
          const options = {
            maxSizeMB: compressionLevel / 100, // Convert percentage to MB for simplicity
            maxWidthOrHeight: 1024, // Resize to a maximum dimension
            useWebWorker: true,
          };
          const compressedImage = await browserImageCompression(file, options);
          zip.file(compressedImage.name, compressedImage);
        } else {
          // For non-image files, add them directly
          zip.file(file.name, file);
        }
      });

      await Promise.all(filePromises);
      const content = await zip.generateAsync({ type: "blob" });
      setCompressedFile(content);
    } catch (err) {
      setError("Failed to compress files. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (compressedFile) {
      saveAs(compressedFile, "compressed_files.zip");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 md:p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">File Compressor</h1>
      <div className="mb-6">
        <Input
          type="file"
          multiple
          onChange={handleFileChange}
          className="mb-4"
          fullWidth
        />
      </div>
      <div className="mb-6">
        <Typography gutterBottom>Compression Level</Typography>
        <Slider
          value={compressionLevel}
          onChange={handleCompressionLevelChange}
          aria-labelledby="compression-level-slider"
          min={10}
          max={100}
          step={10}
          valueLabelDisplay="auto"
          sx={{ width: 300 }}
        />
      </div>
      <Button
        onClick={compressFiles}
        variant="contained"
        color="primary"
        disabled={loading}
        className="mb-6"
      >
        Compress Files
      </Button>
      {loading && <CircularProgress />}
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {compressedFile && !loading && !error && (
        <Box className="flex flex-col items-center">
          <p className="text-lg mb-4">Files compressed successfully!</p>
          <Button
            onClick={handleDownload}
            variant="contained"
            color="success"
          >
            Download Compressed File
          </Button>
        </Box>
      )}
    </div>
  );
};

export default Translator;




/*
import React, { useState } from "react";
import { saveAs } from "file-saver";
import Archiver from "archiver";
import browserImageCompression from "browser-image-compression";
import { Button, Input, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";

const Translator = () => {
  const [file, setFile] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const compressFile = async () => {
    if (!file) return;

    setLoading(true);
    setError("");
    
    try {
      const compressedFile = await compressImage(file); // For image files
      setCompressedFile(compressedFile);
    } catch (err) {
      setError("Failed to compress file. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const compressImage = async (imageFile) => {
    const options = {
      maxSizeMB: 1, // Max size in MB
      maxWidthOrHeight: 1024, // Max dimension
      useWebWorker: true,
    };

    const compressedFile = await browserImageCompression(imageFile, options);
    return compressedFile;
  };

  const handleDownload = () => {
    if (compressedFile) {
      saveAs(compressedFile, compressedFile.name);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 md:p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">File Compressor</h1>
      <div className="mb-6">
        <Input
          type="file"
          onChange={handleFileChange}
          className="mb-4"
          fullWidth
        />
      </div>
      <Button
        onClick={compressFile}
        variant="contained"
        color="primary"
        disabled={loading}
        className="mb-6"
      >
        Compress File
      </Button>
      {loading && <CircularProgress />}
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {compressedFile && !loading && !error && (
        <Box className="flex flex-col items-center">
          <p className="text-lg mb-4">File compressed successfully!</p>
          <Button
            onClick={handleDownload}
            variant="contained"
            color="success"
          >
            Download Compressed File
          </Button>
        </Box>
      )}
    </div>
  );
};

export default Translator;
*/
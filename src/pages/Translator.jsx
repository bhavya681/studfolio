// src/components/FileCompressor.jsx
import { useState } from "react";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import browserImageCompression from "browser-image-compression";
import {
  Button,
  Input,
  Slider,
  CircularProgress,
  Typography,
  Box,
  Container,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

const Translator = () => {
  const [files, setFiles] = useState([]);
  const [compressedFile, setCompressedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [compressionLevel, setCompressionLevel] = useState(50); // Default compression level

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleCompressionLevelChange = (event, newValue) => {
    setCompressionLevel(newValue);
  };

  const compressFiles = async () => {
    if (files.length === 0) {
      setError("Please select files to compress.");
      return;
    }

    setLoading(true);
    setError("");
    setCompressedFile(null);

    try {
      const zip = new JSZip();
      const filePromises = Array.from(files).map(async (file) => {
        if (file.type.startsWith("image/")) {
          const options = {
            maxSizeMB: compressionLevel / 100,
            maxWidthOrHeight: 1024,
            useWebWorker: true,
          };
          const compressedImage = await browserImageCompression(file, options);
          zip.file(file.name, compressedImage, { binary: true });
        } else {
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
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        className="flex flex-col items-center justify-center min-h-screen bg-white p-6 md:p-8 rounded-lg shadow-md"
      >
        <Typography variant="h4" component="h1" className="mb-8">
          File Compressor
        </Typography>
        <Box className="w-full mb-6">
          <Input
            type="file"
            multiple
            onChange={handleFileChange}
            fullWidth
          />
        </Box>
        <Box className="w-full mb-6">
          <Typography gutterBottom>Compression Level</Typography>
          <Slider
            value={compressionLevel}
            onChange={handleCompressionLevelChange}
            aria-labelledby="compression-level-slider"
            min={10}
            max={100}
            step={10}
            valueLabelDisplay="auto"
            sx={{ width: "100%" }}
          />
        </Box>
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
        {error && (
          <Typography color="error" className="mt-4">
            {error}
          </Typography>
        )}
        {compressedFile && !loading && !error && (
          <Box className="flex flex-col items-center">
            <Typography variant="body1" className="mb-4">
              Files compressed successfully!
            </Typography>
            <Button onClick={handleDownload} variant="contained" color="secondary">
              Download Compressed File
            </Button>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Translator;



/*

import { useState } from "react";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import browserImageCompression from "browser-image-compression";
import {
  Button,
  Input,
  Slider,
  CircularProgress,
  Typography,
  Box,
  Container,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

const Translator = () => {
  const [files, setFiles] = useState([]);
  const [compressedFile, setCompressedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [compressionLevel, setCompressionLevel] = useState(50); // Default compression level

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
          const options = {
            maxSizeMB: compressionLevel / 100, // Adjust compression based on user input
            maxWidthOrHeight: 1024,
            useWebWorker: true,
          };
          const compressedImage = await browserImageCompression(file, options);
          zip.file(compressedImage.name, compressedImage);
        } else {
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
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        className="flex flex-col items-center justify-center min-h-screen bg-white p-6 md:p-8 rounded-lg shadow-md"
      >
        <Typography variant="h4" component="h1" className="mb-8">
          File Compressor
        </Typography>
        <Box className="w-full mb-6">
          <Input
            type="file"
            multiple
            onChange={handleFileChange}
            className="mb-4"
            fullWidth
            disableUnderline
          />
        </Box>
        <Box className="w-full mb-6">
          <Typography gutterBottom>Compression Level</Typography>
          <Slider
            value={compressionLevel}
            onChange={handleCompressionLevelChange}
            aria-labelledby="compression-level-slider"
            min={10}
            max={100}
            step={10}
            valueLabelDisplay="auto"
            sx={{ width: "100%" }}
          />
        </Box>
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
        {error && <Typography color="error" className="mt-4">{error}</Typography>}
        {compressedFile && !loading && !error && (
          <Box className="flex flex-col items-center">
            <Typography variant="body1" className="mb-4">
              Files compressed successfully!
            </Typography>
            <Button
              onClick={handleDownload}
              variant="contained"
              color="success"
            >
              Download Compressed File
            </Button>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Translator;


*/
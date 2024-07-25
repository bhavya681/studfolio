/*

import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Input,
  Slider,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { generatePassword } from "../utils/passwordUtils";

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

const PassportPhotoGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const handleLengthChange = (event, newValue) => {
    setLength(newValue);
  };

  const handleGeneratePassword = () => {
    const newPassword = generatePassword({
      length,
      includeNumbers,
      includeUppercase,
      includeLowercase,
      includeSpecialChars,
    });
    setPassword(newPassword);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        className="flex flex-col items-center justify-center min-h-screen bg-white p-6 md:p-8 rounded-lg shadow-md"
      >
        <Typography variant="h4" component="h1" className="mb-8">
          Password Generator
        </Typography>
        <Box className="w-full mb-6">
          <Typography gutterBottom>Password Length</Typography>
          <Slider
            value={length}
            onChange={handleLengthChange}
            aria-labelledby="password-length-slider"
            min={6}
            max={24}
            step={1}
            valueLabelDisplay="auto"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box className="w-full mb-6">
          <FormControlLabel
            control={
              <Checkbox
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
              />
            }
            label="Include Numbers"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
              />
            }
            label="Include Uppercase Letters"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
              />
            }
            label="Include Lowercase Letters"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={includeSpecialChars}
                onChange={(e) => setIncludeSpecialChars(e.target.checked)}
              />
            }
            label="Include Special Characters"
          />
        </Box>
        <Button
          onClick={handleGeneratePassword}
          variant="contained"
          color="primary"
          className="mb-6"
        >
          Generate Password
        </Button>
        {password && (
          <Box className="flex flex-col items-center">
            <Typography variant="body1" className="mb-4">
              Generated Password:
            </Typography>
            <Input
              value={password}
              readOnly
              fullWidth
              sx={{ width: 300, textAlign: "center" }}
            />
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default PassportPhotoGenerator;

*/

import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Input,
  Slider,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { generatePassword } from "../utils/passwordUtils";

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

const PassportPhotoGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleLengthChange = (event, newValue) => {
    setLength(newValue);
  };

  const handleGeneratePassword = () => {
    const newPassword = generatePassword({
      length,
      includeNumbers,
      includeUppercase,
      includeLowercase,
      includeSpecialChars,
    });
    setPassword(newPassword);
    setCopied(false);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        className="flex flex-col items-center justify-center min-h-screen bg-white p-6 md:p-8 rounded-lg shadow-md"
      >
        <Typography variant="h4" component="h1" className="mb-8">
          Password Generator
        </Typography>
        <Box className="w-full mb-6">
          <Typography gutterBottom>Password Length</Typography>
          <Slider
            value={length}
            onChange={handleLengthChange}
            aria-labelledby="password-length-slider"
            min={6}
            max={24}
            step={1}
            valueLabelDisplay="auto"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box className="w-full mb-6">
          <FormControlLabel
            control={
              <Checkbox
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
              />
            }
            label="Include Numbers"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
              />
            }
            label="Include Uppercase Letters"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
              />
            }
            label="Include Lowercase Letters"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={includeSpecialChars}
                onChange={(e) => setIncludeSpecialChars(e.target.checked)}
              />
            }
            label="Include Special Characters"
          />
        </Box>
        <Button
          onClick={handleGeneratePassword}
          variant="contained"
          color="primary"
          className="mb-6"
        >
          Generate Password
        </Button>
        {password && (
          <Box className="flex flex-col items-center">
            <Typography variant="body1" className="mb-4">
              Generated Password:
            </Typography>
            <Input
              value={password}
              readOnly
              fullWidth
              sx={{ width: 300, textAlign: "center" }}
            />
            <Button
              onClick={handleCopyPassword}
              variant="contained"
              color="secondary"
              className="mt-4"
            >
              {copied ? "Copied!" : "Copy Password"}
            </Button>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default PassportPhotoGenerator;

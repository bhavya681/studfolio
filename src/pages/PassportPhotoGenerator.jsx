import { useState, useEffect } from "react";
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
  Paper,
  IconButton,
  Tooltip,
  Zoom,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { generatePassword } from "../utils/passwordUtils";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
    },
    secondary: {
      main: '#f43f5e',
      light: '#fb7185',
      dark: '#e11d48',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontSize: '1.1rem',
          fontWeight: 600,
          padding: '12px 28px',
          transition: 'all 0.2s ease-in-out',
        },
      },
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
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    calculateStrength();
  }, [password]);

  const calculateStrength = () => {
    let score = 0;
    if (password.length >= 12) score += 25;
    if (/[0-9]/.test(password)) score += 25;
    if (/[A-Z]/.test(password)) score += 25;
    if (/[^A-Za-z0-9]/.test(password)) score += 25;
    setStrength(score);
  };

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
    setTimeout(() => setCopied(false), 2000);
  };

  const getStrengthColor = () => {
    if (strength <= 25) return '#ef4444';
    if (strength <= 50) return '#f59e0b';
    if (strength <= 75) return '#10b981';
    return '#059669';
  };

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50"
      >
        <Container maxWidth="md" className="py-16">
          <Paper 
            elevation={0} 
            className="p-8 sm:p-12 rounded-3xl border border-gray-100 backdrop-blur-xl bg-white/90"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="space-y-8"
            >
              <div className="flex items-center justify-center gap-3 mb-12">
                <LockIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                <Typography variant="h4" className="text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Secure Password Generator
                </Typography>
              </div>

              <Box className="bg-gray-50 p-6 rounded-2xl">
                <Typography variant="body1" className="font-medium mb-4 flex items-center gap-2">
                  <SecurityIcon sx={{ color: theme.palette.primary.main }} />
                  Password Length: {length}
                </Typography>
                <Slider
                  value={length}
                  onChange={handleLengthChange}
                  min={6}
                  max={32}
                  marks
                  valueLabelDisplay="auto"
                  sx={{
                    '& .MuiSlider-thumb': {
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                />
              </Box>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { state: includeNumbers, setter: setIncludeNumbers, label: "Include Numbers" },
                  { state: includeUppercase, setter: setIncludeUppercase, label: "Include Uppercase" },
                  { state: includeLowercase, setter: setIncludeLowercase, label: "Include Lowercase" },
                  { state: includeSpecialChars, setter: setIncludeSpecialChars, label: "Include Symbols" },
                ].map((option, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={option.state}
                          onChange={(e) => option.setter(e.target.checked)}
                          sx={{
                            '&.Mui-checked': {
                              color: theme.palette.primary.main,
                            },
                          }}
                        />
                      }
                      label={option.label}
                      className="w-full p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Button
                  onClick={handleGeneratePassword}
                  variant="contained"
                  fullWidth
                  startIcon={<AutorenewIcon />}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  size="large"
                >
                  Generate Secure Password
                </Button>
              </motion.div>

              <AnimatePresence>
                {password && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-gray-50 p-6 rounded-2xl space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <Typography variant="body1" className="text-gray-700 font-medium">
                        Your Generated Password
                      </Typography>
                      <div 
                        className="h-2 w-24 rounded-full bg-gray-200"
                        style={{
                          background: `linear-gradient(to right, ${getStrengthColor()} ${strength}%, #e5e7eb ${strength}%)`,
                        }}
                      />
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Input
                        value={password}
                        readOnly
                        fullWidth
                        sx={{
                          fontSize: '1.2rem',
                          padding: '12px 16px',
                          backgroundColor: 'white',
                          borderRadius: '12px',
                          '&.MuiInput-root': {
                            border: '1px solid #e5e7eb',
                            '&:hover': {
                              border: '1px solid #d1d5db',
                            },
                          },
                        }}
                      />
                      <Tooltip 
                        title={copied ? "Copied!" : "Copy to clipboard"} 
                        TransitionComponent={Zoom}
                      >
                        <IconButton
                          onClick={handleCopyPassword}
                          color={copied ? "secondary" : "primary"}
                          className="hover:scale-110 transition-transform"
                          sx={{ p: 2 }}
                        >
                          <ContentCopyIcon />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </Paper>
        </Container>
      </motion.div>
    </ThemeProvider>
  );
};

export default PassportPhotoGenerator;

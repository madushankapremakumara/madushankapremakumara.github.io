'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8b5cf6', // Vibrant violet
      light: '#a78bfa',
      dark: '#6d28d9',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#06b6d4', // Modern cyan
      light: '#22d3ee',
      dark: '#0891b2',
      contrastText: '#0f172a',
    },
    background: {
      default: '#03001e', // Cosmic deep indigo-black
      paper: '#0b0726',   // Rich container background
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
    divider: 'rgba(139, 92, 246, 0.15)',
    info: {
      main: '#06b6d4',    // Cyan for tech data
      light: '#22d3ee',
      dark: '#0891b2',
    },
    warning: {
      main: '#f97316',    // Orange for difficulty/alerts
      light: '#fb923c',
      dark: '#ea580c',
    },
    success: {
      main: '#10b981',    // Emerald for completed/XP
      light: '#34d399',
      dark: '#059669',
    },
  },
  typography: {
    fontFamily: 'var(--font-outfit), var(--font-inter), sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    caption: {
      fontFamily: 'Courier New, monospace',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: 12,
          padding: "8px 24px",
          fontSize: "0.95rem",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.45)",
          },
          ...(ownerState.variant === "contained" && ownerState.color === "primary" && {
            background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
            color: "#ffffff",
            "&:hover": {
              background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)",
            },
          }),
          ...(ownerState.variant === "contained" && ownerState.color === "secondary" && {
            background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
            color: "#0f172a",
            "&:hover": {
              background: "linear-gradient(135deg, #22d3ee 0%, #60a5fa 100%)",
            },
          }),
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          background: 'rgba(11, 7, 38, 0.45)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(139, 92, 246, 0.15)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-6px)',
            borderColor: 'rgba(6, 182, 212, 0.45)', // glowing teal border on hover
            boxShadow: '0 12px 40px 0 rgba(6, 182, 212, 0.2)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          fontWeight: 600,
          fontSize: '0.75rem',
          transition: 'all 0.25s ease',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          backgroundColor: 'rgba(6, 182, 212, 0.08)',
          color: '#22d3ee',
          '&:hover': {
            backgroundColor: 'rgba(6, 182, 212, 0.15)',
            borderColor: '#06b6d4',
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 8,
          borderRadius: 2,
          backgroundColor: 'rgba(255,255,255,0.08)',
          overflow: 'visible',
        },
        bar: {
          borderRadius: 2,
          background: 'linear-gradient(90deg, #8b5cf6 0%, #06b6d4 100%)',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: '4px',
            height: '100%',
            background: 'rgba(255,255,255,0.6)',
            boxShadow: '0 0 10px rgba(255,255,255,0.8)',
          },
        },
      },
    },
  },
});

export default theme;

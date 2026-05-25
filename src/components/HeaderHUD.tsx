'use client';

import React from 'react';
import { Box, Container, Typography, Button, IconButton, AppBar, Toolbar, Drawer, List, ListItem, ListItemButton, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

interface HeaderHUDProps {
  mobileOpen: boolean;
  onDrawerToggle: () => void;
}

const HeaderHUD: React.FC<HeaderHUDProps> = ({ mobileOpen, onDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navItems = ['About', 'Projects', 'Skills', 'Contact'];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: 'rgba(5, 2, 24, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(6, 182, 212, 0.2)',
          top: 0,
          zIndex: 1100,
          py: 0.5,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: 48 }}>
            {/* Left Side: Name & Status */}
            <Box sx={{ textAlign: 'left' }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  fontFamily: 'var(--font-outfit)',
                  fontSize: { xs: '1rem', md: '1.4rem' },
                  background: 'linear-gradient(135deg, #f8fafc 30%, #8b5cf6 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                MADUSHANKA PREMAKUMARA
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#06b6d4',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.9rem',
                  display: 'block',
                  mt: -0.3,
                }}
              >
                [ LEVEL 03 | UNDERGRADUATE ]
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#10b981',
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  mt: 0.3,
                }}
              >
                <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: '#10b981', animation: 'pulse 2s infinite' }} />
                SYSTEM ONLINE
              </Typography>
            </Box>

            {/* Right Side: Navigation */}
            {!isMobile ? (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    component="a"
                    href={`#${item.toLowerCase()}`}
                    size="small"
                    sx={{
                      color: '#94a3b8',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      px: 2,
                      py: 0.6,
                      borderRadius: 2,
                      border: '1px solid transparent',
                      transition: 'all 0.25s ease',
                      '&:hover': { color: '#06b6d4', borderColor: 'rgba(6, 182, 212, 0.3)', background: 'rgba(6, 182, 212, 0.05)' },
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            ) : (
              <IconButton onClick={onDrawerToggle} sx={{ color: '#06b6d4' }}>
                <MenuIcon sx={{ fontSize: '1.2rem' }} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={onDrawerToggle} slotProps={{ paper: { sx: { width: 260, background: '#070324', borderLeft: '1px solid rgba(6, 182, 212, 0.2)' } } }}>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end', borderBottom: '1px solid rgba(139, 92, 246, 0.1)' }}>
          <IconButton onClick={onDrawerToggle} sx={{ color: '#06b6d4' }}><CloseIcon /></IconButton>
        </Box>
        <List sx={{ p: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton component="a" href={`#${item.toLowerCase()}`} onClick={onDrawerToggle} sx={{ borderRadius: 2, color: '#94a3b8', borderLeft: '3px solid transparent', '&:hover': { color: '#06b6d4', background: 'rgba(6, 182, 212, 0.08)', borderLeftColor: '#06b6d4' } }}>
                <ListItemText primary={item} primaryTypographyProps={{ sx: { fontWeight: 600, fontSize: '0.95rem' } }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default HeaderHUD;
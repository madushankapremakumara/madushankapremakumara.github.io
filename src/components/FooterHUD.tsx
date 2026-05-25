'use client';

import React from 'react';
import { Box, Container, Typography, IconButton, Tooltip } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

const FooterHUD: React.FC = () => (
  <Box sx={{ borderTop: '1px solid rgba(6, 182, 212, 0.15)', background: 'rgba(5, 2, 24, 0.95)', py: 2, zIndex: 1 }}>
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 1.5 }}>
        <Typography variant="caption" sx={{ color: '#475569', fontFamily: 'Courier New, monospace', fontSize: '0.65rem' }}>
          © {new Date().getFullYear()} MADUSHANKA PREMAKUMARA // ALL SYSTEMS NOMINAL
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Tooltip title="Direct Comms"><IconButton href="mailto:madushankapremakumara@gmail.com" sx={{ color: '#67e8f9', '&:hover': { color: '#06b6d4' }, p: 1 }}><Email sx={{ fontSize: '1rem' }} /></IconButton></Tooltip>
          <Tooltip title="Source Repository"><IconButton href="https://github.com/madushankapremakumara" target="_blank" sx={{ color: '#a78bfa', '&:hover': { color: '#8b5cf6' }, p: 1 }}><GitHub sx={{ fontSize: '1rem' }} /></IconButton></Tooltip>
          <Tooltip title="Professional Network"><IconButton href="https://linkedin.com" target="_blank" sx={{ color: '#67e8f9', '&:hover': { color: '#06b6d4' }, p: 1 }}><LinkedIn sx={{ fontSize: '1rem' }} /></IconButton></Tooltip>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default FooterHUD;
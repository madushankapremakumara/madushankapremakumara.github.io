'use client';

import React from 'react';
import { Box } from '@mui/material';

interface HUDPanelProps {
  children: React.ReactNode;
  title?: string;
  fullWidth?: boolean;
  accentColor?: 'cyan' | 'violet' | 'emerald' | 'orange';
  sx?: object;
}

const HUDPanel: React.FC<HUDPanelProps> = ({
  children,
  title,
  fullWidth = false,
  accentColor = 'cyan',
  sx = {},
}) => {
  const colorMap: Record<string, { primary: string; glow: string; border: string }> = {
    cyan: { primary: '#06b6d4', glow: 'rgba(6, 182, 212, 0.25)', border: 'rgba(6, 182, 212, 0.2)' },
    violet: { primary: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.25)', border: 'rgba(139, 92, 246, 0.2)' },
    emerald: { primary: '#10b981', glow: 'rgba(16, 185, 129, 0.25)', border: 'rgba(16, 185, 129, 0.2)' },
    orange: { primary: '#f97316', glow: 'rgba(249, 115, 22, 0.25)', border: 'rgba(249, 115, 22, 0.2)' },
  };
  const c = colorMap[accentColor];

  return (
    <Box
      sx={{
        position: 'relative',
        background: 'rgba(8, 4, 40, 0.75)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: `1px solid ${c.border}`,
        borderRadius: 3,
        p: { xs: 2.5, md: 3 },
        overflow: 'visible',
        width: fullWidth ? '100%' : 'auto',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: c.primary,
          boxShadow: `0 0 30px ${c.glow}, inset 0 0 30px rgba(0,0,0,0.2)`,
        },
        ...sx,
      }}
    >
      {/* Corner accents */}
      <Box sx={{ position: 'absolute', top: 6, left: 6, width: 14, height: 14, borderLeft: `2px solid ${c.primary}`, borderTop: `2px solid ${c.primary}`, borderRadius: '2px 0 0 0', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', top: 6, right: 6, width: 14, height: 14, borderRight: `2px solid ${c.primary}`, borderTop: `2px solid ${c.primary}`, borderRadius: '0 2px 0 0', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: 6, left: 6, width: 14, height: 14, borderLeft: `2px solid ${c.primary}`, borderBottom: `2px solid ${c.primary}`, borderRadius: '0 0 0 2px', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: 6, right: 6, width: 14, height: 14, borderRight: `2px solid ${c.primary}`, borderBottom: `2px solid ${c.primary}`, borderRadius: '0 0 2px 0', pointerEvents: 'none' }} />

      {/* Title tab */}
      {title && (
        <Box
          sx={{
            position: 'absolute',
            top: -1,
            left: 20,
            background: 'rgba(8, 4, 40, 0.95)',
            px: 2,
            py: 0.3,
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: c.primary,
            textTransform: 'uppercase',
            borderBottom: `1px solid ${c.border}`,
            borderRadius: '0 0 6px 6px',
            zIndex: 2,
          }}
        >
          {title}
        </Box>
      )}

      {/* Subtle grid overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(${c.glow} 1px, transparent 1px),
            linear-gradient(90deg, ${c.glow} 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          opacity: 0.12,
          pointerEvents: 'none',
          borderRadius: 3,
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>{children}</Box>
    </Box>
  );
};

export default HUDPanel;
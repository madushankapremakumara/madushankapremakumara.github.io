'use client';

import React from 'react';
import { Box, Typography, Avatar, Chip } from '@mui/material';
import HUDPanel from './HUDPanel';

const CharacterInfo: React.FC = () => (
  <HUDPanel title="CHARACTER INFO" accentColor="cyan" sx={{ minHeight: { md: 380 }, display: 'flex', flexDirection: 'column' }}>
    {/* Top Row: Avatar + Header Info */}
    <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start', mb: 3 }}>
      <Box sx={{ 
        position: 'relative', 
        width: 100, 
        height: 100, 
        minWidth: 100, 
        borderRadius: '12px', 
        border: '2px solid rgba(6, 182, 212, 0.4)', 
        overflow: 'hidden', 
        boxShadow: '0 0 25px rgba(6, 182, 212, 0.25)' 
      }}>
        <Avatar src="/images/profile-image.jpg" alt="Madushanka Premakumara" sx={{ width: '100%', height: '100%', borderRadius: '10px' }} />
        <Box sx={{ position: 'absolute', bottom: 4, right: 4, width: 12, height: 12, borderRadius: '50%', bgcolor: '#10b981', border: '2px solid #08042a' }} />
      </Box>

      <Box sx={{ flex: 1, pt: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 800, fontFamily: 'var(--font-outfit)', fontSize: { xs: '1.1rem', md: '1.4rem' }, mb: 0.5, letterSpacing: '0.02em' }}>
          Madushanka Premakumara
        </Typography>
        <Typography variant="body1" sx={{ color: '#06b6d4', fontWeight: 700, fontSize: '0.95rem', mb: 1, letterSpacing: '0.05em' }}>
          Software Developer
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <Typography variant="caption" sx={{ color: '#94a3b8', fontFamily: 'Courier New, monospace', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Box component="span" sx={{ color: '#06b6d4' }}>▶</Box> Saegis Campus
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Chip label="UNDERGRADUATE" size="small" sx={{ bgcolor: 'rgba(139, 92, 246, 0.15)', color: '#a78bfa', border: '1px solid rgba(139, 92, 246, 0.3)', fontWeight: 700, fontSize: '0.65rem', height: 24 }} />
            <Chip label="FULL-STACK" size="small" sx={{ bgcolor: 'rgba(6, 182, 212, 0.15)', color: '#67e8f9', border: '1px solid rgba(6, 182, 212, 0.3)', fontWeight: 700, fontSize: '0.65rem', height: 24 }} />
          </Box>
        </Box>
      </Box>
    </Box>

    {/* Expanded Bio Section to fill space */}
    <Box sx={{ 
      flex: 1, 
      background: 'rgba(0,0,0,0.2)', 
      borderRadius: 2, 
      p: 2.5, 
      border: '1px solid rgba(6, 182, 212, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Typography variant="caption" sx={{ color: '#06b6d4', fontWeight: 700, display: 'block', mb: 1.5, fontSize: '0.7rem', letterSpacing: '0.1em' }}>
        ▶ PERSONAL LOG ENTRY
      </Typography>
      <Typography variant="body1" sx={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '0.9rem' }}>
        "Spirited Software Engineering undergraduate blending creativity with code. A natural collaborator with a relentless drive to learn. I don't just write code; I architect experiences."
      </Typography>
    </Box>
  </HUDPanel>
);

export default CharacterInfo;
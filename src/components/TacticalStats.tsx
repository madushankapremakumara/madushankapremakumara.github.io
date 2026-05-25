'use client';

import React from 'react';
import { Box, Typography, Grid, LinearProgress } from '@mui/material';
import { Psychology, Speed, Shield } from '@mui/icons-material';
import HUDPanel from './HUDPanel';

const StatBar: React.FC<{ label: string; value: number; color: string; glowColor: string }> = ({ label, value, color, glowColor }) => (
  <Box sx={{ mb: 1.5, position: 'relative', zIndex: 1 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
      <Typography variant="body2" sx={{ color: '#cbd5e1', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em' }}>{label}</Typography>
      <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '0.9rem', fontFamily: 'Courier New, monospace', color: color }}>{value}%</Typography>
    </Box>
    
    {/* Custom Progress Bar Track */}
    <Box sx={{ 
      width: '100%', 
      height: 6, 
      backgroundColor: 'rgba(255,255,255,0.1)', 
      borderRadius: 3, 
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Progress Fill */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: `${value}%`,
        background: `linear-gradient(90deg, ${color} 0%, ${color}cc 100%)`,
        borderRadius: 3,
        transition: 'width 0.6s ease-in-out',
        boxShadow: `0 0 10px ${color}66`,
      }} />
      
      {/* Animated glow dot at the end */}
      <Box sx={{
        position: 'absolute',
        top: -1,
        left: `${value}%`,
        transform: 'translateX(-50%)',
        width: 8,
        height: 8,
        background: '#fff',
        borderRadius: '50%',
        boxShadow: `0 0 12px ${glowColor}, 0 0 24px ${glowColor}`,
        animation: 'pulse 2s ease-in-out infinite',
      }} />
    </Box>
  </Box>
);

const AttributeCard: React.FC<{ 
  icon: React.ReactElement; 
  label: string; 
  value: number; 
  subLabel: string; 
  color: string; 
  bgColor: string; 
  borderColor: string 
}> = ({ icon, label, value, subLabel, color, bgColor, borderColor }) => {
  const styledIcon = React.isValidElement(icon) 
    ? React.cloneElement(icon, { 
        sx: { color, fontSize: '1.4rem' } 
      } as React.PropsWithChildren<{ sx?: object }>)
    : icon;

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2, 
      p: 2, 
      background: bgColor, 
      borderRadius: 2.5, 
      border: `1px solid ${borderColor}`,
      minHeight: 72,
      boxSizing: 'border-box',
      transition: 'all 0.3s ease',
      '&:hover': {
        borderColor: color,
        boxShadow: `0 0 20px ${color}33`,
      }
    }}>
      <Box sx={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2.5, background: `${color}20` }}>
        {styledIcon}
      </Box>
      <Box>
        <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', fontSize: '0.85rem', fontWeight: 600, mb: 0.5 }}>{label}</Typography>
        <Typography variant="h5" sx={{ fontWeight: 800, fontSize: '1.8rem', color, lineHeight: 1 }}>{value}</Typography>
      </Box>
      <Box sx={{ ml: 'auto', textAlign: 'right' }}>
        <Typography variant="caption" sx={{ color, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em' }}>{subLabel}</Typography>
      </Box>
    </Box>
  );
};

const TacticalStats: React.FC = () => (
  <HUDPanel title="TACTICAL STATS" accentColor="violet" sx={{ minHeight: { md: 380 } }}>
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <StatBar label="HP [INTEGRITY]" value={100} color="#10b981" glowColor="#10b981" />
        <StatBar label="MP [CAPACITY]" value={85} color="#06b6d4" glowColor="#06b6d4" />
        <StatBar label="XP [PROGRESS]" value={65} color="#8b5cf6" glowColor="#8b5cf6" />
        
        <Box sx={{ borderTop: '1px dashed rgba(139, 92, 246, 0.3)', my: 2.5 }} />
        
        <Typography variant="caption" sx={{ color: '#a78bfa', fontWeight: 700, display: 'block', mb: 1.5, fontSize: '0.85rem', letterSpacing: '0.15em' }}>
          ▶ SECONDARY ATTRIBUTES
        </Typography>
        <StatBar label="CSS / STYLING" value={60} color="#10b981" glowColor="#10b981" />
        <StatBar label="DATABASE" value={50} color="#06b6d4" glowColor="#06b6d4" />
        <StatBar label="JAVASCRIPT" value={80} color="#8b5cf6" glowColor="#8b5cf6" />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="caption" sx={{ color: '#c4b5fd', fontWeight: 700, display: 'block', mb: 2, fontSize: '0.85rem', letterSpacing: '0.15em' }}>
          ▶ CORE ATTRIBUTES
        </Typography>
        <Box sx={{ display: 'flex', gap: 1.5, flexDirection: 'column' }}>
          <AttributeCard icon={<Psychology />} label="INT" value={75} subLabel="Frontend/Backend" color="#a78bfa" bgColor="rgba(139, 92, 246, 0.08)" borderColor="rgba(139, 92, 246, 0.2)" />
          <AttributeCard icon={<Speed />} label="DEX" value={70} subLabel="Performance" color="#22d3ee" bgColor="rgba(6, 182, 212, 0.08)" borderColor="rgba(6, 182, 212, 0.2)" />
          <AttributeCard icon={<Shield />} label="DEF" value={60} subLabel="Security" color="#34d399" bgColor="rgba(16, 185, 129, 0.08)" borderColor="rgba(16, 185, 129, 0.2)" />
        </Box>
      </Grid>
    </Grid>
  </HUDPanel>
);

export default TacticalStats;
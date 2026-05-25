'use client';

import React from 'react';
import { Box, Typography, Grid, LinearProgress } from '@mui/material';
import { Psychology, Speed, Shield } from '@mui/icons-material';
import HUDPanel from './HUDPanel';

const StatBar: React.FC<{ label: string; value: number; color: string; glowColor: string }> = ({ label, value, color, glowColor }) => (
  <Box sx={{ mb: 1.5 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
      <Typography variant="body2" sx={{ color: '#94a3b8', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em' }}>{label}</Typography>
      <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '0.9rem', fontFamily: 'Courier New, monospace', color }}>{value}%</Typography>
    </Box>
    <Box sx={{ position: 'relative' }}>
      <LinearProgress variant="determinate" value={value} sx={{ '& .MuiLinearProgress-bar': { background: color }, height: 6, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.08)' }} />
      <Box sx={{ position: 'absolute', right: 0, top: -1, width: 6, height: 8, background: '#fff', borderRadius: 2, boxShadow: `0 0 10px ${glowColor}` }} />
    </Box>
  </Box>
);

const AttributeCard: React.FC<{ icon: React.ReactNode; label: string; value: number; subLabel: string; color: string; bgColor: string; borderColor: string }> = ({ icon, label, value, subLabel, color, bgColor, borderColor }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, background: bgColor, borderRadius: 2.5, border: `1px solid ${borderColor}` }}>
    <Box sx={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2.5, background: `${color}15` }}>
      {React.cloneElement(icon as React.ReactElement, { sx: { color, fontSize: '1.4rem' } })}
    </Box>
    <Box>
      <Typography variant="caption" sx={{ color: '#64748b', display: 'block', fontSize: '0.85rem', fontWeight: 600 }}>{label}</Typography>
      <Typography variant="h5" sx={{ fontWeight: 800, fontSize: '1.8rem', color, lineHeight: 1 }}>{value}</Typography>
    </Box>
    <Box sx={{ ml: 'auto', textAlign: 'right' }}>
      <Typography variant="caption" sx={{ color, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em' }}>{subLabel}</Typography>
    </Box>
  </Box>
);

const TacticalStats: React.FC = () => (
  <HUDPanel title="TACTICAL STATS" accentColor="violet" sx={{ minHeight: { md: 380 } }}>
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <StatBar label="HP [INTEGRITY]" value={100} color="#10b981" glowColor="#10b981" />
        <StatBar label="MP [CAPACITY]" value={85} color="#06b6d4" glowColor="#06b6d4" />
        <StatBar label="XP [PROGRESS]" value={65} color="#8b5cf6" glowColor="#8b5cf6" />
        
        <Box sx={{ borderTop: '1px dashed rgba(139, 92, 246, 0.2)', my: 2 }} />
        
        <Typography variant="caption" sx={{ color: '#475569', fontWeight: 700, display: 'block', mb: 1.5, fontSize: '0.85rem', letterSpacing: '0.1em' }}>SECONDARY ATTRIBUTES</Typography>
        <StatBar label="CSS / STYLING" value={95} color="#10b981" glowColor="#10b981" />
        <StatBar label="DATABASE" value={80} color="#06b6d4" glowColor="#06b6d4" />
        <StatBar label="JAVASCRIPT" value={75} color="#8b5cf6" glowColor="#8b5cf6" />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="caption" sx={{ color: '#475569', fontWeight: 700, display: 'block', mb: 2, fontSize: '0.85rem', letterSpacing: '0.1em' }}>CORE ATTRIBUTES</Typography>
        <Box sx={{ display: 'flex', gap: 1.5, flexDirection: 'column' }}>
          <AttributeCard icon={<Psychology />} label="INT" value={85} subLabel="Frontend" color="#a78bfa" bgColor="rgba(139, 92, 246, 0.06)" borderColor="rgba(139, 92, 246, 0.12)" />
          <AttributeCard icon={<Speed />} label="DEX" value={90} subLabel="Performance" color="#22d3ee" bgColor="rgba(6, 182, 212, 0.06)" borderColor="rgba(6, 182, 212, 0.12)" />
          <AttributeCard icon={<Shield />} label="DEF" value={80} subLabel="Security" color="#34d399" bgColor="rgba(16, 185, 129, 0.06)" borderColor="rgba(16, 185, 129, 0.12)" />
        </Box>
      </Grid>
    </Grid>
  </HUDPanel>
);

export default TacticalStats;
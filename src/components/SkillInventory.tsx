'use client';

import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import HUDPanel from './HUDPanel';

interface Skill {
  name: string;
  tooltip: string;
}

const SkillChip: React.FC<{ skill: Skill }> = ({ skill }) => (
  <Tooltip
    title={
      <Box sx={{ py: 0.5 }}>
        <Typography sx={{ fontWeight: 700, color: '#06b6d4', fontSize: '1.1rem', mb: 0.5 }}>{skill.name}</Typography>
        <Typography sx={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.4 }}>{skill.tooltip}</Typography>
      </Box>
    }
    arrow
    placement="top"
    slotProps={{
      tooltip: {
        sx: {
          backgroundColor: 'rgba(8, 4, 40, 0.95)',
          border: '1px solid rgba(6, 182, 212, 0.5)',
          borderLeft: '3px solid #06b6d4',
          borderRadius: '4px',
          px: 2.5,
          py: 1.5,
          maxWidth: 250,
          backdropFilter: 'blur(8px)',
        },
      },
      arrow: {
        sx: { color: 'rgba(8, 4, 40, 0.95)' },
      },
    }}
  >
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: { xs: 56, sm: 68 },
        height: { xs: 56, sm: 68 },
        borderRadius: '12px',
        background: 'rgba(10, 5, 45, 0.8)',
        border: '1px solid rgba(139, 92, 246, 0.25)',
        cursor: 'help',
        transition: 'all 0.25s ease',
        '&:hover': {
          borderColor: '#06b6d4',
          background: 'rgba(6, 182, 212, 0.1)',
          boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#e2e8f0', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
        {skill.name}
      </Typography>
    </Box>
  </Tooltip>
);

const SkillInventory: React.FC = () => {
  const skills: Skill[] = [
    { name: 'JS', tooltip: 'JavaScript: Core language for interactive web experiences' },
    { name: 'TS', tooltip: 'TypeScript: Type-safe JavaScript for scalable applications' },
    { name: 'JAVA', tooltip: 'Java: Enterprise-grade backend development & OOP' },
    { name: 'PY', tooltip: 'Python: Scripting, automation, and data processing' },
    { name: 'HTML', tooltip: 'HTML5: Semantic structure & accessibility foundations' },
    { name: 'SQL', tooltip: 'SQL/MySQL: Database design, queries & optimization' },
    { name: 'REACT', tooltip: 'React: Component-based UI architecture & state management' },
    { name: 'NEXT', tooltip: 'Next.js: SSR, SSG, and full-stack React frameworks' },
  ];

  return (
    <HUDPanel title="EQUIPPED INVENTORY — SKILLS" fullWidth accentColor="violet" sx={{ mb: 4, minHeight: { xs: 180, sm: 200 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', gap: { xs: 1.5, sm: 2 }, flexWrap: 'wrap', justifyContent: 'center' }}>
        {skills.map((skill) => (
          <SkillChip key={skill.name} skill={skill} />
        ))}
      </Box>
      <Typography variant="caption" sx={{ color: '#475569', textAlign: 'center', display: 'block', mt: 2.5, fontFamily: 'Courier New, monospace', fontSize: '0.9rem' }}>
        ▶ HOVER ITEM FOR TACTICAL TOOLTIP
      </Typography>
    </HUDPanel>
  );
};

export default SkillInventory;
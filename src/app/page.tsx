'use client';

import React, { useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import HeaderHUD from '../components/HeaderHUD';
import CharacterInfo from '../components/CharacterInfo';
import TacticalStats from '../components/TacticalStats';
import QuestLog from '../components/QuestLog';
import SkillInventory from '../components/SkillInventory';
import CommsTerminal from '../components/CommsTerminal';
import FooterHUD from '../components/FooterHUD';

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', background: 'radial-gradient(ellipse at 20% 0%, #0d0830 0%, #050218 50%, #030012 100%)' }}>
      
      {/* Background Grid */}
      <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.04) 1px, transparent 1px)', backgroundSize: '50px 50px', pointerEvents: 'none', zIndex: 0 }} />
      
      {/* Scanlines */}
      <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)', pointerEvents: 'none', zIndex: 0 }} />

      <HeaderHUD mobileOpen={mobileOpen} onDrawerToggle={() => setMobileOpen(!mobileOpen)} />

      {/* === MAIN CONTENT === */}
      <Box sx={{ zIndex: 1, position: 'relative', flex: 1, display: 'flex', justifyContent: 'center', pt: { xs: 3, md: 4 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
          
          {/* Section A: Character + Stats */}
          <Box id="about" sx={{ mb: 5 }}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <CharacterInfo />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TacticalStats />
              </Grid>
            </Grid>
          </Box>

          {/* Section: Quest Log */}
          <Box id="projects" sx={{ mb: 5 }}>
            <QuestLog />
          </Box>

          {/* Section B: Skills */}
          <Box id="skills" sx={{ mb: 5 }}>
            <SkillInventory />
          </Box>

          {/* Section: Contact */}
          <Box id="contact">
            <CommsTerminal />
          </Box>

        </Container>
      </Box>

      <FooterHUD />
    </Box>
  );
}
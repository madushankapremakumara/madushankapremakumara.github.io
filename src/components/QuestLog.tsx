'use client';

import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import HUDPanel from './HUDPanel';

interface Quest {
  title: string;
  difficulty: 'Hard' | 'Legendary';
  loot: string[];
  desc: string;
  github: string;
}

const QuestCard: React.FC<{ quest: Quest }> = ({ quest }) => {
  const isLegendary = quest.difficulty === 'Legendary';
  const badgeColor = isLegendary ? '#a855f7' : '#f97316';
  const titleColor = isLegendary ? '#c4b5fd' : '#fdba74';
  const borderColor = isLegendary ? 'rgba(168, 85, 247, 0.3)' : 'rgba(249, 115, 22, 0.2)';

  return (
    <Card sx={{ height: '100%', background: 'rgba(10, 5, 45, 0.6)', border: `1px solid ${borderColor}`, borderRadius: 3, display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease', position: 'relative', overflow: 'visible', '&:hover': { borderColor: badgeColor, transform: 'translateY(-4px)', boxShadow: `0 8px 30px ${isLegendary ? 'rgba(168,85,247,0.2)' : 'rgba(249,115,22,0.15)'}` } }}>
      <Box sx={{ position: 'absolute', top: -8, right: 20, background: badgeColor, color: '#fff', px: 2.5, py: 0.5, borderRadius: '2px 2px 8px 8px', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 0.5, boxShadow: `0 2px 12px ${badgeColor}88`, zIndex: 2 }}>
        {isLegendary ? '👑' : '⚔️'} {quest.difficulty.toUpperCase()}
      </Box>
      <CardContent sx={{ p: 3.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, fontFamily: 'var(--font-outfit)', color: titleColor, fontSize: '1.2rem' }}>{quest.title}</Typography>
        <Typography variant="body1" sx={{ color: '#94a3b8', mb: 2.5, lineHeight: 1.6, fontSize: '0.9rem', flexGrow: 1 }}>{quest.desc}</Typography>
        <Box sx={{ mb: 2.5 }}>
          <Typography variant="caption" sx={{ color: '#06b6d4', fontWeight: 700, display: 'block', mb: 1.5, fontSize: '0.75rem', letterSpacing: '0.1em' }}>▶ LOOT DROP</Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {quest.loot.map((tech) => (
              <Chip key={tech} label={tech} size="medium" sx={{ fontSize: '0.75rem', fontWeight: 600, backgroundColor: 'rgba(6, 182, 212, 0.08)', color: '#67e8f9', border: '1px solid rgba(6, 182, 212, 0.25)', borderRadius: '4px', height: 28 }} />
            ))}
          </Box>
        </Box>
        <Button variant="outlined" size="medium" component="a" href={quest.github} target="_blank" endIcon={<ChevronRight />} sx={{ alignSelf: 'flex-start', borderColor: 'rgba(139, 92, 246, 0.3)', color: '#a78bfa', fontSize: '0.8rem', px: 3, py: 0.8, borderRadius: 2.5, height: 36, '&:hover': { borderColor: '#8b5cf6', backgroundColor: 'rgba(139, 92, 246, 0.1)' } }}>
          ACCESS REPO
        </Button>
      </CardContent>
    </Card>
  );
};

const QuestLog: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const quests: Quest[] = [
    { title: 'Project Ru-Lib', desc: 'A secure, offline-first media library center that scans and transforms local video directories into an immersive, cinematic local streaming library.', loot: ['TypeScript', 'React', 'Next.js', 'Node.js'], github: 'https://github.com/madushankapremakumara/Project-Ru-Lib', difficulty: 'Legendary' },
    { title: 'Blog Website', desc: 'A premium, glassmorphic blogging platform built with Django and React, featuring a responsive rich admin panel, live mailbox messaging inbox, and instant search tags.', loot: ['React', 'Django', 'REST API', 'JavaScript'], github: 'https://github.com/madushankapremakumara/Blog-Website', difficulty: 'Hard' },
    { title: 'Project AnimeHub', desc: 'A small prototype social media ecosystem dedicated to anime enthusiasts, enabling watchlist progress synchronization and reviews.', loot: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'], github: 'https://github.com/Team-Delta-Code/project-animehub', difficulty: 'Hard' },
    { title: 'Garage Management System', desc: 'An offline inventory dashboard and point-of-sale utility built to digitize catalog metrics and transaction tracking for small garages.', loot: ['Java', 'MySQL', 'JDBC', 'Swing'], github: 'https://github.com/Team-Delta-Code/garage_management_system', difficulty: 'Hard' },
    { title: 'Library Management System', desc: 'A comprehensive catalog system designed to streamline record entry, organize library collections, and track active member loans.', loot: ['JavaScript', 'HTML5', 'CSS3', 'MySQL'], github: 'https://github.com/madushankapremakumara/Library-Management-System', difficulty: 'Hard' },
  ];

  const displayedQuests = showAll ? quests : quests.slice(0, 2);

  return (
    <HUDPanel title="QUEST LOG — PROJECTS" fullWidth accentColor="cyan" sx={{ mb: 4 }}>
      <Grid container spacing={2.5}>
        {displayedQuests.map((quest, idx) => (
          <Grid size={{ xs: 12, md: showAll ? 4 : 6 }} key={idx}>
            <QuestCard quest={quest} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Button
          variant="outlined"
          size="medium"
          endIcon={<ChevronRight />}
          onClick={() => setShowAll(!showAll)}
          sx={{ borderColor: 'rgba(139, 92, 246, 0.3)', color: '#a78bfa', fontSize: '0.8rem', px: 4, py: 0.8, borderRadius: 2.5, '&:hover': { borderColor: '#8b5cf6', background: 'rgba(139, 92, 246, 0.1)' } }}
        >
          {showAll ? 'COLLAPSE QUESTS' : 'VIEW ALL QUESTS'}
        </Button>
      </Box>
    </HUDPanel>
  );
};

export default QuestLog;
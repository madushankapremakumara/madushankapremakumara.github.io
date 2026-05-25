'use client';

import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import HUDPanel from './HUDPanel';

interface Quest {
  title: string;
  difficulty: 'Easy' | 'Normal' | 'Hard' | 'Legendary';
  loot: string[];
  desc: string;
  github: string;
}

const QuestCard: React.FC<{ quest: Quest }> = ({ quest }) => {
  // Difficulty configuration with colors and icons
  const diffConfig: Record<string, { 
    badgeColor: string; 
    titleColor: string; 
    borderColor: string; 
    glowColor: string;
    icon: string;
    label: string;
  }> = {
    Easy: { 
      badgeColor: '#10b981', 
      titleColor: '#6ee7b7', 
      borderColor: 'rgba(16, 185, 129, 0.25)', 
      glowColor: 'rgba(16, 185, 129, 0.2)',
      icon: '🟢',
      label: 'EASY'
    },
    Normal: { 
      badgeColor: '#3b82f6', 
      titleColor: '#93c5fd', 
      borderColor: 'rgba(59, 130, 246, 0.25)', 
      glowColor: 'rgba(59, 130, 246, 0.2)',
      icon: '🔵',
      label: 'NORMAL'
    },
    Hard: { 
      badgeColor: '#f97316', 
      titleColor: '#fdba74', 
      borderColor: 'rgba(249, 115, 22, 0.25)', 
      glowColor: 'rgba(249, 115, 22, 0.15)',
      icon: '⚔️',
      label: 'HARD'
    },
    Legendary: { 
      badgeColor: '#a855f7', 
      titleColor: '#c4b5fd', 
      borderColor: 'rgba(168, 85, 247, 0.3)', 
      glowColor: 'rgba(168, 85, 247, 0.2)',
      icon: '👑',
      label: 'LEGENDARY'
    },
  };

  const cfg = diffConfig[quest.difficulty];

  return (
    <Card sx={{ 
      height: '100%', 
      background: 'rgba(10, 5, 45, 0.6)', 
      border: `1px solid ${cfg.borderColor}`, 
      borderRadius: 3, 
      display: 'flex', 
      flexDirection: 'column', 
      transition: 'all 0.3s ease', 
      position: 'relative', 
      overflow: 'visible', 
      '&:hover': { 
        borderColor: cfg.badgeColor, 
        transform: 'translateY(-4px)', 
        boxShadow: `0 8px 30px ${cfg.glowColor}` 
      } 
    }}>
      {/* Difficulty Badge */}
      <Box sx={{ 
        position: 'absolute', 
        top: -8, 
        right: 20, 
        background: cfg.badgeColor, 
        color: '#fff', 
        px: 2.5, 
        py: 0.5, 
        borderRadius: '2px 2px 8px 8px', 
        fontSize: '0.85rem', 
        fontWeight: 800, 
        letterSpacing: '0.1em', 
        display: 'flex', 
        alignItems: 'center', 
        gap: 0.5, 
        boxShadow: `0 2px 12px ${cfg.badgeColor}88`, 
        zIndex: 2 
      }}>
        {cfg.icon} {cfg.label}
      </Box>

      <CardContent sx={{ p: 3.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" sx={{ 
          fontWeight: 700, 
          mb: 1.5, 
          fontFamily: 'var(--font-outfit)', 
          color: cfg.titleColor, 
          fontSize: '1.45rem' 
        }}>
          {quest.title}
        </Typography>
        
        <Typography variant="body1" sx={{ 
          color: '#94a3b8', 
          mb: 2.5, 
          lineHeight: 1.6, 
          fontSize: '1.1rem', 
          flexGrow: 1 
        }}>
          {quest.desc}
        </Typography>
        
        <Box sx={{ mb: 2.5 }}>
          <Typography variant="caption" sx={{ 
            color: '#06b6d4', 
            fontWeight: 700, 
            display: 'block', 
            mb: 1.5, 
            fontSize: '0.9rem', 
            letterSpacing: '0.1em' 
          }}>
            ▶ LOOT DROP
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {quest.loot.map((tech) => (
              <Chip 
                key={tech} 
                label={tech} 
                size="medium" 
                sx={{ 
                  fontSize: '0.9rem', 
                  fontWeight: 600, 
                  backgroundColor: 'rgba(6, 182, 212, 0.08)', 
                  color: '#67e8f9', 
                  border: '1px solid rgba(6, 182, 212, 0.25)', 
                  borderRadius: '4px', 
                  height: 28 
                }} 
              />
            ))}
          </Box>
        </Box>
        
        <Button 
          variant="outlined" 
          size="medium" 
          component="a" 
          href={quest.github} 
          target="_blank" 
          endIcon={<ChevronRight />} 
          sx={{ 
            alignSelf: 'flex-start', 
            borderColor: 'rgba(139, 92, 246, 0.3)', 
            color: '#a78bfa', 
            fontSize: '0.95rem', 
            px: 3, 
            py: 0.8, 
            borderRadius: 2.5, 
            height: 36, 
            '&:hover': { 
              borderColor: '#8b5cf6', 
              backgroundColor: 'rgba(139, 92, 246, 0.1)' 
            } 
          }}
        >
          ACCESS REPO
        </Button>
      </CardContent>
    </Card>
  );
};

const QuestLog: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const quests: Quest[] = [
    { 
      title: 'Library Management System', 
      desc: 'A comprehensive catalog system designed to streamline record entry, organize library collections, and track active member loans.', 
      loot: ['JavaScript', 'HTML5', 'CSS3', 'MySQL'], 
      github: 'https://github.com/madushankapremakumara/Library-Management-System', 
      difficulty: 'Easy' 
    },
    { 
      title: 'Blog Website', 
      desc: 'A premium, glassmorphic blogging platform built with Django and React, featuring a responsive rich admin panel, live mailbox messaging inbox, and instant search tags.', 
      loot: ['React', 'Django', 'REST API', 'JavaScript'], 
      github: 'https://github.com/madushankapremakumara/Blog-Website', 
      difficulty: 'Normal' 
    },
    { 
      title: 'Project AnimeHub', 
      desc: 'A small prototype social media ecosystem dedicated to anime enthusiasts, enabling watchlist progress synchronization and reviews.', 
      loot: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'], 
      github: 'https://github.com/Team-Delta-Code/project-animehub', 
      difficulty: 'Hard' 
    },
    { 
      title: 'Garage Management System', 
      desc: 'An offline inventory dashboard and point-of-sale utility built to digitize catalog metrics and transaction tracking for small garages.', 
      loot: ['Java', 'MySQL', 'JDBC', 'Swing'], 
      github: 'https://github.com/Team-Delta-Code/garage_management_system', 
      difficulty: 'Hard' 
    },
    { 
      title: 'Project Ru-Lib', 
      desc: 'A secure, offline-first media library center that scans and transforms local video directories into an immersive, cinematic local streaming library.', 
      loot: ['TypeScript', 'React', 'Next.js', 'Node.js'], 
      github: 'https://github.com/madushankapremakumara/Project-Ru-Lib', 
      difficulty: 'Legendary' 
    },
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
          sx={{ 
            borderColor: 'rgba(139, 92, 246, 0.3)', 
            color: '#a78bfa', 
            fontSize: '0.95rem', 
            px: 4, 
            py: 0.8, 
            borderRadius: 2.5, 
            '&:hover': { 
              borderColor: '#8b5cf6', 
              background: 'rgba(139, 92, 246, 0.1)' 
            } 
          }}
        >
          {showAll ? 'COLLAPSE QUESTS' : 'VIEW ALL QUESTS'}
        </Button>
      </Box>
    </HUDPanel>
  );
};

export default QuestLog;
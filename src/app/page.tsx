'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Avatar,
  Chip,
  Alert,
  CircularProgress,
  useTheme,
  useMediaQuery,
  LinearProgress,
  Tooltip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Terminal as TerminalIcon,
  Speed as SpeedIcon,
  ChevronRight as ChevronRightIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
  Shield as ShieldIcon,
  Psychology as PsychologyIcon,
} from '@mui/icons-material';

// === HUD PANEL COMPONENT ===
const HUDPanel: React.FC<{
  children: React.ReactNode;
  title?: string;
  fullWidth?: boolean;
  accentColor?: 'cyan' | 'violet' | 'emerald' | 'orange';
}> = ({ children, title, fullWidth = false, accentColor = 'cyan' }) => {
  const colorMap = {
    cyan: { primary: '#06b6d4', glow: 'rgba(6, 182, 212, 0.3)', border: 'rgba(6, 182, 212, 0.25)' },
    violet: { primary: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.3)', border: 'rgba(139, 92, 246, 0.25)' },
    emerald: { primary: '#10b981', glow: 'rgba(16, 185, 129, 0.3)', border: 'rgba(16, 185, 129, 0.25)' },
    orange: { primary: '#f97316', glow: 'rgba(249, 115, 22, 0.3)', border: 'rgba(249, 115, 22, 0.25)' },
  };
  const c = colorMap[accentColor];

  return (
    <Box
      sx={{
        position: 'relative',
        background: 'rgba(8, 4, 40, 0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: `1px solid ${c.border}`,
        borderRadius: 3,
        p: { xs: 2.5, md: 3 },
        overflow: 'hidden',
        width: fullWidth ? '100%' : 'auto',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: c.primary,
          boxShadow: `0 0 30px ${c.glow}, inset 0 0 30px rgba(0,0,0,0.2)`,
        },
      }}
    >
      {/* Corner accents */}
      <Box sx={{ position: 'absolute', top: 6, left: 6, width: 16, height: 16, borderLeft: `2px solid ${c.primary}`, borderTop: `2px solid ${c.primary}`, borderRadius: '2px 0 0 0' }} />
      <Box sx={{ position: 'absolute', top: 6, right: 6, width: 16, height: 16, borderRight: `2px solid ${c.primary}`, borderTop: `2px solid ${c.primary}`, borderRadius: '0 2px 0 0' }} />
      <Box sx={{ position: 'absolute', bottom: 6, left: 6, width: 16, height: 16, borderLeft: `2px solid ${c.primary}`, borderBottom: `2px solid ${c.primary}`, borderRadius: '0 0 0 2px' }} />
      <Box sx={{ position: 'absolute', bottom: 6, right: 6, width: 16, height: 16, borderRight: `2px solid ${c.primary}`, borderBottom: `2px solid ${c.primary}`, borderRadius: '0 0 2px 0' }} />

      {/* Title tab */}
      {title && (
        <Box
          sx={{
            position: 'absolute',
            top: -1,
            left: 20,
            background: 'rgba(8, 4, 40, 0.95)',
            px: 2,
            py: 0.4,
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: c.primary,
            textTransform: 'uppercase',
            borderBottom: `1px solid ${c.border}`,
            borderRadius: '0 0 6px 6px',
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
          opacity: 0.15,
          pointerEvents: 'none',
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>{children}</Box>
    </Box>
  );
};

// === STAT BAR ===
const StatBar: React.FC<{ label: string; value: number; color?: 'emerald' | 'cyan' | 'violet' }> = ({
  label,
  value,
  color = 'cyan',
}) => {
  const colorMap = {
    emerald: 'linear-gradient(90deg, #10b981 0%, #34d399 100%)',
    cyan: 'linear-gradient(90deg, #06b6d4 0%, #22d3ee 100%)',
    violet: 'linear-gradient(90deg, #8b5cf6 0%, #a78bfa 100%)',
  };
  const colorLight = {
    emerald: '#10b981',
    cyan: '#06b6d4',
    violet: '#8b5cf6',
  };

  return (
    <Box sx={{ mb: 1.5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.05em' }}>
          {label}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            fontSize: '0.7rem',
            fontFamily: 'Courier New, monospace',
            color: colorLight[color],
          }}
        >
          {value}%
        </Typography>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            '& .MuiLinearProgress-bar': {
              background: colorMap[color],
            },
            height: 4,
            borderRadius: 2,
            backgroundColor: 'rgba(255,255,255,0.06)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            top: -1,
            width: 4,
            height: 6,
            background: '#fff',
            borderRadius: 1,
            boxShadow: `0 0 8px ${colorLight[color]}`,
            animation: value < 100 ? 'pulse 1.5s ease-in-out infinite' : 'none',
          }}
        />
      </Box>
    </Box>
  );
};

// === QUEST CARD ===
const QuestCard: React.FC<{
  title: string;
  difficulty: 'Hard' | 'Legendary';
  loot: string[];
  desc: string;
  github: string;
}> = ({ title, difficulty, loot = [], desc, github }) => {
  const isLegendary = difficulty === 'Legendary';
  const badgeColor = isLegendary ? '#a855f7' : '#f97316';
  const titleColor = isLegendary ? '#c4b5fd' : '#fdba74';
  const borderColor = isLegendary ? 'rgba(168, 85, 247, 0.3)' : 'rgba(249, 115, 22, 0.2)';

  return (
    <Card
      sx={{
        height: '100%',
        background: 'rgba(10, 5, 45, 0.6)',
        border: `1px solid ${borderColor}`,
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'visible',
        '&:hover': {
          borderColor: badgeColor,
          transform: 'translateY(-4px)',
          boxShadow: `0 8px 30px ${isLegendary ? 'rgba(168,85,247,0.2)' : 'rgba(249,115,22,0.15)'}`,
        },
      }}
    >
      {/* Difficulty Badge */}
      <Box
        sx={{
          position: 'absolute',
          top: -6,
          right: 16,
          background: badgeColor,
          color: '#fff',
          px: 2,
          py: 0.4,
          borderRadius: '2px 2px 6px 6px',
          fontSize: '0.6rem',
          fontWeight: 800,
          letterSpacing: '0.1em',
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          boxShadow: `0 2px 12px ${badgeColor}88`,
          zIndex: 2,
        }}
      >
        {isLegendary ? '👑' : '⚔️'} {difficulty.toUpperCase()}
      </Box>

      <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, fontFamily: 'var(--font-outfit)', color: titleColor, fontSize: '1.05rem' }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ color: '#94a3b8', mb: 2, lineHeight: 1.5, fontSize: '0.85rem', flexGrow: 1 }}>
          {desc}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="caption" sx={{ color: '#06b6d4', fontWeight: 700, display: 'block', mb: 1, fontSize: '0.7rem', letterSpacing: '0.1em' }}>
            ▶ LOOT DROP
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.8, flexWrap: 'wrap' }}>
            {(loot || []).map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  backgroundColor: 'rgba(6, 182, 212, 0.08)',
                  color: '#67e8f9',
                  border: '1px solid rgba(6, 182, 212, 0.25)',
                  borderRadius: '4px',
                  height: 24,
                  '&:hover': {
                    backgroundColor: 'rgba(6, 182, 212, 0.15)',
                    borderColor: '#06b6d4',
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        <Button
          variant="outlined"
          size="small"
          component="a"
          href={github}
          target="_blank"
          endIcon={<ChevronRightIcon />}
          sx={{
            alignSelf: 'flex-start',
            borderColor: 'rgba(139, 92, 246, 0.3)',
            color: '#a78bfa',
            fontSize: '0.72rem',
            px: 2,
            py: 0.5,
            borderRadius: 2,
            height: 30,
            '&:hover': {
              borderColor: '#8b5cf6',
              backgroundColor: 'rgba(139, 92, 246, 0.1)',
            },
          }}
        >
          ACCESS REPO
        </Button>
      </CardContent>
    </Card>
  );
};

// === SKILL CHIP ===
const SkillChip: React.FC<{ skill: string; tooltip: string }> = ({ skill, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Box
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: { xs: 48, sm: 56 },
        height: { xs: 48, sm: 56 },
        borderRadius: '10px',
        background: 'rgba(10, 5, 45, 0.8)',
        border: '1px solid rgba(139, 92, 246, 0.25)',
        cursor: 'help',
        transition: 'all 0.25s ease',
        '&:hover': {
          borderColor: '#06b6d4',
          background: 'rgba(6, 182, 212, 0.1)',
          boxShadow: '0 0 16px rgba(6, 182, 212, 0.3)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      <Typography variant="caption" sx={{ fontWeight: 700, color: '#e2e8f0', fontSize: { xs: '0.65rem', sm: '0.72rem' } }}>
        {skill}
      </Typography>

      {showTooltip && (
        <Box
          sx={{
            position: 'absolute',
            bottom: '110%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(8, 4, 40, 0.95)',
            border: '1px solid rgba(6, 182, 212, 0.5)',
            borderLeft: `3px solid #06b6d4`,
            px: 2,
            py: 1.2,
            borderRadius: '4px',
            width: 'max-content',
            maxWidth: 220,
            zIndex: 100,
            backdropFilter: 'blur(8px)',
          }}
        >
          <Typography variant="caption" sx={{ fontWeight: 700, color: '#06b6d4', display: 'block', mb: 0.3, fontSize: '0.75rem' }}>
            {skill}
          </Typography>
          <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.72rem', lineHeight: 1.4 }}>
            {tooltip}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

// === MAIN PAGE ===
export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    try {
      const response = await fetch('https://formspree.io/f/movnpggd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formState),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    }
  };

  const navItems = ['About', 'Projects', 'Skills', 'Contact'];

  const projects = [
    {
      title: 'Project Ru-Lib',
      desc: 'A secure, offline-first media library center that scans and transforms local video directories into an immersive, cinematic local streaming library.',
      loot: ['TypeScript', 'React', 'Next.js', 'Node.js'],
      github: 'https://github.com/madushankapremakumara/Project-Ru-Lib',
      difficulty: 'Legendary' as const,
    },
    {
      title: 'Blog Website',
      desc: 'A premium, glassmorphic blogging platform built with Django and React, featuring a responsive rich admin panel, live mailbox messaging inbox, and instant search tags.',
      loot: ['React', 'Django', 'REST API', 'JavaScript'],
      github: 'https://github.com/madushankapremakumara/Blog-Website',
      difficulty: 'Hard' as const,
    },
    {
      title: 'Project AnimeHub',
      desc: 'A small prototype social media ecosystem dedicated to anime enthusiasts, enabling watchlist progress synchronization and reviews.',
      loot: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/Team-Delta-Code/project-animehub',
      difficulty: 'Hard' as const,
    },
    {
      title: 'Garage Management System',
      desc: 'An offline inventory dashboard and point-of-sale utility built to digitize catalog metrics and transaction tracking for small garages.',
      loot: ['Java', 'MySQL', 'JDBC', 'Swing'],
      github: 'https://github.com/Team-Delta-Code/garage_management_system',
      difficulty: 'Hard' as const,
    },
    {
      title: 'Library Management System',
      desc: 'A comprehensive catalog system designed to streamline record entry, organize library collections, and track active member loans.',
      loot: ['JavaScript', 'HTML5', 'CSS3', 'MySQL'],
      github: 'https://github.com/madushankapremakumara/Library-Management-System',
      difficulty: 'Hard' as const,
    },
  ];

  const skills = [
    { name: 'JS', tooltip: 'JavaScript: Core language for interactive web experiences' },
    { name: 'TS', tooltip: 'TypeScript: Type-safe JavaScript for scalable applications' },
    { name: 'JAVA', tooltip: 'Java: Enterprise-grade backend development & OOP' },
    { name: 'PY', tooltip: 'Python: Scripting, automation, and data processing' },
    { name: 'HTML', tooltip: 'HTML5: Semantic structure & accessibility foundations' },
    { name: 'SQL', tooltip: 'SQL/MySQL: Database design, queries & optimization' },
    { name: 'REACT', tooltip: 'React: Component-based UI architecture & state management' },
    { name: 'NEXT', tooltip: 'Next.js: SSR, SSG, and full-stack React frameworks' },
  ];

  const characterStats = { hp: 100, mp: 85, xp: 65, int: 85, dex: 90, def: 80 };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        background: 'radial-gradient(ellipse at 20% 0%, #0d0830 0%, #050218 50%, #030012 100%)',
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Scanlines */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* === HEADER === */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: 'rgba(5, 2, 24, 0.9)',
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
            {/* System Status */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#10b981', className: 'pulse' }} />
                <Typography variant="caption" sx={{ color: '#10b981', fontWeight: 700, fontFamily: 'Courier New, monospace', fontSize: '0.65rem' }}>
                  SYSTEM ONLINE
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: 'Courier New, monospace', fontSize: '0.65rem' }}>
                v2.5.0
              </Typography>
            </Box>

            {/* Center ID */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  letterSpacing: '0.2em',
                  fontFamily: 'var(--font-outfit)',
                  fontSize: { xs: '0.8rem', md: '1rem' },
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
                  letterSpacing: '0.25em',
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.6rem',
                }}
              >
                [ LEVEL 04 UNDERGRADUATE ]
              </Typography>
            </Box>

            {/* Nav */}
            {!isMobile ? (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    component="a"
                    href={`#${item.toLowerCase()}`}
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 600,
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      px: 2,
                      py: 0.6,
                      borderRadius: 2,
                      border: '1px solid transparent',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        color: '#06b6d4',
                        borderColor: 'rgba(6, 182, 212, 0.3)',
                        background: 'rgba(6, 182, 212, 0.05)',
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            ) : (
              <IconButton onClick={handleDrawerToggle} sx={{ color: '#06b6d4' }}>
                <MenuIcon sx={{ fontSize: '1.2rem' }} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        slotProps={{
          paper: {
            sx: {
              width: 260,
              background: '#070324',
              borderLeft: '1px solid rgba(6, 182, 212, 0.2)',
            },
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end', borderBottom: '1px solid rgba(139, 92, 246, 0.1)' }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#06b6d4' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ p: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component="a"
                href={`#${item.toLowerCase()}`}
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: 2,
                  color: 'text.secondary',
                  borderLeft: '3px solid transparent',
                  '&:hover': {
                    color: '#06b6d4',
                    background: 'rgba(6, 182, 212, 0.08)',
                    borderLeftColor: '#06b6d4',
                  },
                }}
              >
                <ListItemText primary={item} primaryTypographyProps={{ sx: { fontWeight: 600, fontSize: '0.95rem' } }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* === MAIN CONTENT — Centered & Proportional === */}
      <Box sx={{ zIndex: 1, position: 'relative', flex: 1, display: 'flex', justifyContent: 'center', pt: { xs: 2, md: 3 }, pb: { xs: 3, md: 4 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
          
          {/* === TOP ROW: Character + Stats === */}
          <Grid container spacing={2.5} sx={{ mb: 2.5 }}>
            
            {/* Character Info */}
            <Grid size={{ xs: 12, md: 5 }}>
              <HUDPanel title="CHARACTER INFO" accentColor="cyan">
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  {/* Avatar */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: 80,
                      height: 80,
                      minWidth: 80,
                      borderRadius: '12px',
                      border: '2px solid rgba(6, 182, 212, 0.35)',
                      overflow: 'hidden',
                      boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)',
                    }}
                  >
                    <Avatar
                      src="/images/profile-image.jpg"
                      alt="Madushanka Premakumara"
                      sx={{ width: '100%', height: '100%', borderRadius: '10px' }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 3,
                        right: 3,
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        bgcolor: '#10b981',
                        border: '2px solid #08042a',
                      }}
                    />
                  </Box>

                  {/* Info */}
                  <Box sx={{ flex: 1, pt: 0.5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: 'var(--font-outfit)', fontSize: '1rem', mb: 0.3 }}>
                      Madushanka Premakumara
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#06b6d4', fontWeight: 600, fontSize: '0.82rem', mb: 0.5 }}>
                      Software Developer
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#64748b', fontFamily: 'Courier New, monospace', fontSize: '0.68rem', display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5 }}>
                      <Box component="span" sx={{ color: '#06b6d4' }}>▶</Box> Saegis Campus
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1, mb: 1.5 }}>
                      <Chip
                        label="UNDERGRADUATE"
                        size="small"
                        sx={{ bgcolor: 'rgba(139, 92, 246, 0.12)', color: '#a78bfa', border: '1px solid rgba(139, 92, 246, 0.25)', fontWeight: 700, fontSize: '0.62rem', height: 22 }}
                      />
                      <Chip
                        label="FULL-STACK"
                        size="small"
                        sx={{ bgcolor: 'rgba(6, 182, 212, 0.12)', color: '#67e8f9', border: '1px solid rgba(6, 182, 212, 0.25)', fontWeight: 700, fontSize: '0.62rem', height: 22 }}
                      />
                    </Box>

                    <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.5, fontSize: '0.78rem' }}>
                      Spirited Software Engineering undergraduate blending creativity with code. Natural collaborator with relentless drive to learn.
                    </Typography>
                  </Box>
                </Box>
              </HUDPanel>
            </Grid>

            {/* Tactical Stats */}
            <Grid size={{ xs: 12, md: 7 }}>
              <HUDPanel title="TACTICAL STATS" accentColor="violet">
                <Grid container spacing={2.5}>
                  {/* Resource Bars */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <StatBar label="HP [INTEGRITY]" value={characterStats.hp} color="emerald" />
                    <StatBar label="MP [CAPACITY]" value={characterStats.mp} color="cyan" />
                    <StatBar label="XP [PROGRESS]" value={characterStats.xp} color="violet" />

                    <Box sx={{ borderTop: '1px dashed rgba(139, 92, 246, 0.15)', my: 1.5 }} />

                    {/* Mini skill bars */}
                    <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 700, display: 'block', mb: 1, fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                      SECONDARY ATTRIBUTES
                    </Typography>
                    <StatBar label="CSS / STYLING" value={95} color="emerald" />
                    <StatBar label="DATABASE" value={80} color="cyan" />
                    <StatBar label="JAVASCRIPT" value={75} color="violet" />
                  </Grid>

                  {/* Attribute Cards */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 700, display: 'block', mb: 1.5, fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                      CORE ATTRIBUTES
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1.5, flexDirection: 'column' }}>
                      {/* INT */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          p: 1.5,
                          background: 'rgba(139, 92, 246, 0.06)',
                          borderRadius: 2,
                          border: '1px solid rgba(139, 92, 246, 0.12)',
                        }}
                      >
                        <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, background: 'rgba(139, 92, 246, 0.1)' }}>
                          <PsychologyIcon sx={{ color: '#a78bfa', fontSize: '1.1rem' }} />
                        </Box>
                        <Box>
                          <Typography variant="caption" sx={{ color: '#64748b', display: 'block', fontSize: '0.65rem', fontWeight: 600 }}>INT</Typography>
                          <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.2rem', color: '#a78bfa', lineHeight: 1 }}>
                            {characterStats.int}
                          </Typography>
                        </Box>
                        <Box sx={{ ml: 'auto', textAlign: 'right' }}>
                          <Typography variant="caption" sx={{ color: '#a78bfa', fontSize: '0.6rem', fontWeight: 600 }}>Frontend</Typography>
                        </Box>
                      </Box>

                      {/* DEX */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          p: 1.5,
                          background: 'rgba(6, 182, 212, 0.06)',
                          borderRadius: 2,
                          border: '1px solid rgba(6, 182, 212, 0.12)',
                        }}
                      >
                        <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, background: 'rgba(6, 182, 212, 0.1)' }}>
                          <SpeedIcon sx={{ color: '#22d3ee', fontSize: '1.1rem' }} />
                        </Box>
                        <Box>
                          <Typography variant="caption" sx={{ color: '#64748b', display: 'block', fontSize: '0.65rem', fontWeight: 600 }}>DEX</Typography>
                          <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.2rem', color: '#22d3ee', lineHeight: 1 }}>
                            {characterStats.dex}
                          </Typography>
                        </Box>
                        <Box sx={{ ml: 'auto', textAlign: 'right' }}>
                          <Typography variant="caption" sx={{ color: '#22d3ee', fontSize: '0.6rem', fontWeight: 600 }}>Performance</Typography>
                        </Box>
                      </Box>

                      {/* DEF */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          p: 1.5,
                          background: 'rgba(16, 185, 129, 0.06)',
                          borderRadius: 2,
                          border: '1px solid rgba(16, 185, 129, 0.12)',
                        }}
                      >
                        <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, background: 'rgba(16, 185, 129, 0.1)' }}>
                          <ShieldIcon sx={{ color: '#34d399', fontSize: '1.1rem' }} />
                        </Box>
                        <Box>
                          <Typography variant="caption" sx={{ color: '#64748b', display: 'block', fontSize: '0.65rem', fontWeight: 600 }}>DEF</Typography>
                          <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.2rem', color: '#34d399', lineHeight: 1 }}>
                            {characterStats.def}
                          </Typography>
                        </Box>
                        <Box sx={{ ml: 'auto', textAlign: 'right' }}>
                          <Typography variant="caption" sx={{ color: '#34d399', fontSize: '0.6rem', fontWeight: 600 }}>Security</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </HUDPanel>
            </Grid>
          </Grid>

          {/* === QUEST LOG === */}
          <HUDPanel title="QUEST LOG — PROJECTS" fullWidth accentColor="cyan" sx={{ mb: 2.5 }}>
            <Grid container spacing={2}>
              {projects.slice(0, 2).map((project, idx) => (
                <Grid size={{ xs: 12, md: 6 }} key={idx}>
                  <QuestCard {...project} />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Button
                component="a"
                href="#projects"
                variant="outlined"
                size="small"
                endIcon={<ChevronRightIcon />}
                sx={{
                  borderColor: 'rgba(139, 92, 246, 0.3)',
                  color: '#a78bfa',
                  fontSize: '0.72rem',
                  px: 3,
                  py: 0.6,
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: '#8b5cf6',
                    background: 'rgba(139, 92, 246, 0.1)',
                  },
                }}
              >
                VIEW ALL QUESTS
              </Button>
            </Box>
          </HUDPanel>

          {/* === SKILLS INVENTORY === */}
          <HUDPanel title="EQUIPPED INVENTORY — SKILLS" fullWidth accentColor="violet" sx={{ mb: 2.5 }}>
            <Box sx={{ display: 'flex', gap: { xs: 1.2, sm: 1.5 }, flexWrap: 'wrap', justifyContent: 'center' }}>
              {skills.map((skill) => (
                <SkillChip key={skill.name} skill={skill.name} tooltip={skill.tooltip} />
              ))}
            </Box>
            <Typography
              variant="caption"
              sx={{
                color: '#64748b',
                textAlign: 'center',
                display: 'block',
                mt: 2,
                fontFamily: 'Courier New, monospace',
                fontSize: '0.68rem',
              }}
            >
              ▶ HOVER ITEM FOR TACTICAL TOOLTIP
            </Typography>
          </HUDPanel>

          {/* === CONTACT TERMINAL === */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: { xs: '100%', md: '650px' } }}>
              <HUDPanel title="COMMS TERMINAL" fullWidth accentColor="cyan">
                <Box sx={{ textAlign: 'center', mb: 2.5 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5, fontFamily: 'var(--font-outfit)', color: '#06b6d4', fontSize: '1.3rem' }}>
                    INITIATE CONTACT
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.82rem' }}>
                    Transmit a message to begin collaboration protocol
                  </Typography>
                </Box>

                {submitStatus === 'success' && (
                  <Alert icon={<CheckCircleIcon fontSize="inherit" />} severity="success" sx={{ mb: 2, borderRadius: 2, bgcolor: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', fontSize: '0.82rem' }}>
                    ✓ Message transmitted successfully. Awaiting response.
                  </Alert>
                )}
                {submitStatus === 'error' && (
                  <Alert icon={<ErrorIcon fontSize="inherit" />} severity="error" sx={{ mb: 2, borderRadius: 2, bgcolor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', fontSize: '0.82rem' }}>
                    ⚠ Transmission failed. Retry or use direct channel.
                  </Alert>
                )}

                <Box component="form" onSubmit={handleFormSubmit}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="OPERATOR NAME"
                        name="name"
                        value={formState.name}
                        onChange={handleFormChange}
                        required
                        slotProps={{
                          input: {
                            sx: {
                              borderRadius: 2,
                              bgcolor: 'rgba(5, 2, 24, 0.5)',
                              border: '1px solid rgba(139, 92, 246, 0.2)',
                              '&:hover': { border: '1px solid rgba(139, 92, 246, 0.35)' },
                              '&.Mui-focused': { border: '1px solid #06b6d4', boxShadow: '0 0 0 2px rgba(6,182,212,0.15)' },
                              color: '#e2e8f0',
                              height: 38,
                            },
                          },
                          inputLabel: { sx: { color: '#64748b', fontSize: '0.72rem' } },
                        }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="FREQUENCY (EMAIL)"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleFormChange}
                        required
                        slotProps={{
                          input: {
                            sx: {
                              borderRadius: 2,
                              bgcolor: 'rgba(5, 2, 24, 0.5)',
                              border: '1px solid rgba(139, 92, 246, 0.2)',
                              '&:hover': { border: '1px solid rgba(139, 92, 246, 0.35)' },
                              '&.Mui-focused': { border: '1px solid #06b6d4', boxShadow: '0 0 0 2px rgba(6,182,212,0.15)' },
                              color: '#e2e8f0',
                              height: 38,
                            },
                          },
                          inputLabel: { sx: { color: '#64748b', fontSize: '0.72rem' } },
                        }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="MESSAGE PAYLOAD"
                        name="message"
                        multiline
                        rows={4}
                        value={formState.message}
                        onChange={handleFormChange}
                        required
                        slotProps={{
                          input: {
                            sx: {
                              borderRadius: 2,
                              bgcolor: 'rgba(5, 2, 24, 0.5)',
                              border: '1px solid rgba(139, 92, 246, 0.2)',
                              '&:hover': { border: '1px solid rgba(139, 92, 246, 0.35)' },
                              '&.Mui-focused': { border: '1px solid #06b6d4', boxShadow: '0 0 0 2px rgba(6,182,212,0.15)' },
                              color: '#e2e8f0',
                            },
                          },
                          inputLabel: { sx: { color: '#64748b', fontSize: '0.72rem' } },
                        }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={submitStatus === 'loading'}
                        sx={{
                          px: 5,
                          py: 1.2,
                          borderRadius: 2,
                          minWidth: 180,
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          fontSize: '0.85rem',
                          background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)',
                            boxShadow: '0 0 25px rgba(139, 92, 246, 0.4)',
                          },
                        }}
                      >
                        {submitStatus === 'loading' ? (
                          <CircularProgress size={18} sx={{ color: '#fff' }} />
                        ) : (
                          <>
                            <TerminalIcon sx={{ mr: 1, fontSize: '0.95rem' }} />
                            TRANSMIT
                          </>
                        )}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </HUDPanel>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* === FOOTER === */}
      <Box
        sx={{
          borderTop: '1px solid rgba(6, 182, 212, 0.15)',
          background: 'rgba(5, 2, 24, 0.95)',
          py: 2,
          zIndex: 1,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 1.5 }}>
            <Typography variant="caption" sx={{ color: '#64748b', fontFamily: 'Courier New, monospace', fontSize: '0.65rem' }}>
              © {new Date().getFullYear()} MADUSHANKA PREMAKUMARA // ALL SYSTEMS NOMINAL
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Tooltip title="Direct Comms">
                <IconButton href="mailto:madushankapremakumara@gmail.com" sx={{ color: '#67e8f9', '&:hover': { color: '#06b6d4' }, p: 1 }}>
                  <EmailIcon sx={{ fontSize: '1rem' }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Source Repository">
                <IconButton href="https://github.com/madushankapremakumara" target="_blank" sx={{ color: '#a78bfa', '&:hover': { color: '#8b5cf6' }, p: 1 }}>
                  <GitHubIcon sx={{ fontSize: '1rem' }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Professional Network">
                <IconButton href="https://linkedin.com" target="_blank" sx={{ color: '#67e8f9', '&:hover': { color: '#06b6d4' }, p: 1 }}>
                  <LinkedInIcon sx={{ fontSize: '1rem' }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
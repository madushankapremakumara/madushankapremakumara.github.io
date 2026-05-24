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
  CardMedia,
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
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Terminal as TerminalIcon,
  Storage as StorageIcon,
  Speed as SpeedIcon,
  ChevronRight as ChevronRightIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Star as StarIcon,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
} from '@mui/icons-material';

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Form State
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    try {
      const response = await fetch('https://formspree.io/f/movnpggd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
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
      tech: ['TypeScript', 'React', 'Next.js', 'Node.js'],
      github: 'https://github.com/madushankapremakumara/Project-Ru-Lib',
      image: '/images/hero-bg.jpg', // Cosmic backdrop fallback
      isFeatured: true,
    },
    {
      title: 'Blog Website',
      desc: 'A premium, glassmorphic blogging platform built with Django and React, featuring a responsive rich admin panel, live mailbox messaging inbox, and instant search tags.',
      tech: ['React', 'Django', 'REST API', 'JavaScript'],
      github: 'https://github.com/madushankapremakumara/Blog-Website',
      image: '/images/hero-bg-1.jpg',
      isFeatured: true,
    },
    {
      title: 'Project AnimeHub',
      desc: 'A small prototype social media ecosystem dedicated to anime enthusiasts, enabling watchlist progress synchronization and reviews.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/madushankapremakumara',
      image: '/images/projects/animehub.jpg',
      isFeatured: false,
    },
    {
      title: 'Garage Management System',
      desc: 'An offline inventory dashboard and point-of-sale utility built to digitize catalog metrics and transaction tracking for small garages.',
      tech: ['Java', 'MySQL', 'JDBC', 'Swing'],
      github: 'https://github.com/madushankapremakumara',
      image: '/images/projects/garage-management-system.jpg',
      isFeatured: false,
    },
    {
      title: 'Library Management System',
      desc: 'A comprehensive catalog system designed to streamline record entry, organize library collections, and track active member loans.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'MySQL'],
      github: 'https://github.com/madushankapremakumara/Library-Management-System',
      image: '/images/hero-bg.jpg',
      isFeatured: false,
    },
  ];

  const skillCategories = [
    { name: 'HTML / CSS', rating: '95%', value: 95, icon: <TerminalIcon sx={{ color: '#e34c26' }} /> },
    { name: 'MySQL / DBs', rating: '80%', value: 80, icon: <StorageIcon sx={{ color: '#00758f' }} /> },
    { name: 'JavaScript', rating: '75%', value: 75, icon: <TerminalIcon sx={{ color: '#f7df1e' }} /> },
    { name: 'Java Programming', rating: '60%', value: 60, icon: <TerminalIcon sx={{ color: '#007396' }} /> },
    { name: 'Python Programming', rating: '50%', value: 50, icon: <TerminalIcon sx={{ color: '#3776ab' }} /> },
    { name: 'TypeScript', rating: '65%', value: 65, icon: <TerminalIcon sx={{ color: '#3178c6' }} /> },
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
      
      {/* Dynamic Cosmic Background Glows */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Header / Floating Glassmorphic Navbar */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: 'rgba(3, 0, 30, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
          top: 0,
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 80 }}>
            {/* Logo */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#"
              sx={{
                fontWeight: 800,
                letterSpacing: '.15rem',
                color: 'text.primary',
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #f8fafc 30%, #8b5cf6 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                fontFamily: 'var(--font-outfit)',
              }}
            >
              M.PREMA
            </Typography>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <Typography
                    key={item}
                    component="a"
                    href={`#${item.toLowerCase()}`}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      transition: 'color 0.3s ease',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  endIcon={<ChevronRightIcon />}
                  component="a"
                  href="#contact"
                >
                  Get In Touch
                </Button>
              </Box>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 2, color: 'text.primary' }}
              >
                <MenuIcon />
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
        ModalProps={{
          keepMounted: true,
        }}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              background: '#070324',
              borderLeft: '1px solid rgba(139, 92, 246, 0.15)',
            },
          },
        }}
      >
        <Box sx={{ p: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component="a"
                href={`#${item.toLowerCase()}`}
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: 2,
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                    background: 'rgba(139, 92, 246, 0.08)',
                  },
                }}
              >
                <ListItemText
                  primary={item}
                  slotProps={{
                    primary: {
                      sx: {
                        fontWeight: 600,
                        fontSize: "1.1rem",
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <Box sx={{ p: 2, mt: 3 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleDrawerToggle}
              component="a"
              href="#contact"
            >
              Get In Touch
            </Button>
          </Box>
        </List>
      </Drawer>

      {/* Hero / About Section */}
      <Container maxWidth="lg" sx={{ zIndex: 1, position: 'relative', pt: { xs: 6, md: 10 }, pb: { xs: 8, md: 12 } }} id="about">
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          
          {/* Left Column: Intro */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: 2,
                py: 1,
                borderRadius: '50px',
                background: 'rgba(139, 92, 246, 0.08)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                mb: 4,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: 'secondary.main',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(6, 182, 212, 0.7)' },
                    '70%': { transform: 'scale(1)', boxShadow: '0 0 0 8px rgba(6, 182, 212, 0)' },
                    '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(6, 182, 212, 0)' },
                  },
                }}
              />
              <Typography variant="body2" sx={{ color: 'primary.light', fontWeight: 600, letterSpacing: '0.05em' }}>
                AVAILABLE FOR NEW OPPORTUNITIES
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.3rem', md: '3.8rem' },
                lineHeight: 1.15,
                mb: 3,
                fontFamily: 'var(--font-outfit)',
              }}
            >
              Hi, I am <br />
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                }}
              >
                Madushanka Premakumara
              </Box>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: 'secondary.light',
                fontWeight: 600,
                mb: 3,
                letterSpacing: '0.05em',
                fontSize: '1.25rem',
              }}
            >
              WEB DEVELOPER & SOFTWARE ENGINEER
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 4,
                maxWidth: 620,
                fontSize: '1.05rem',
                lineHeight: 1.7,
              }}
            >
              I’m a spirited **Software Engineering undergraduate at Saegis Campus**, where I blend curiosity with code to craft innovative solutions. My personality is a vibrant mix of creativity and determination, always chasing the next big idea with a relentless drive to learn. 
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 4,
                maxWidth: 620,
                fontSize: '1.05rem',
                lineHeight: 1.7,
              }}
            >
              I thrive as a natural collaborator in dynamic settings where I can spark inspiration and connect with others through shared goals. With a bold vision for technology’s potential and a heart for meaningful impact, I’m shaping the future one line of code at a time.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ px: 4, py: 1.8 }}
                endIcon={<ChevronRightIcon />}
                component="a"
                href="#projects"
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                sx={{
                  px: 4,
                  py: 1.8,
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'rgba(139, 92, 246, 0.05)',
                  },
                }}
                component="a"
                href="#contact"
              >
                Let&apos;s Talk
              </Button>
            </Box>
          </Grid>

          {/* Right Column: Profile Image Visual */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                position: 'relative',
                width: { xs: 290, sm: 350, md: 390 },
                height: { xs: 290, sm: 350, md: 390 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Rotating glowing orbit rings */}
              <Box
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '1px dashed rgba(139, 92, 246, 0.25)',
                  animation: 'spin 30s linear infinite',
                  '@keyframes spin': { '100%': { transform: 'rotate(360deg)' } },
                }}
              />

              {/* Glassmorphic Profile Card Frame */}
              <Box
                sx={{
                  width: '85%',
                  height: '85%',
                  borderRadius: '50%',
                  background: 'rgba(11, 7, 38, 0.45)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(139, 92, 246, 0.25)',
                  boxShadow: '0 20px 50px rgba(139, 92, 246, 0.25)',
                  animation: 'float 6s ease-in-out infinite',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '@keyframes float': {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                    '100%': { transform: 'translateY(0px)' },
                  },
                }}
              >
                {/* Fallback to actual copied profile photo */}
                <Avatar
                  src="/images/profile-image.jpg"
                  alt="Madushanka Premakumara"
                  sx={{
                    width: '94%',
                    height: '94%',
                    border: '2px solid rgba(6, 182, 212, 0.3)',
                    boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.8)',
                  }}
                />
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>

      {/* Projects Section */}
      <Container maxWidth="lg" sx={{ py: 12, zIndex: 1, position: 'relative' }} id="projects">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontFamily: 'var(--font-outfit)',
            }}
          >
            Featured Projects
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
            A curated showcase of applications built to solve problems, from offline media engines to full-stack dashboards.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: project.isFeatured ? 6 : 4 }} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    filter: 'brightness(0.65) contrast(1.1)',
                    transition: 'all 0.4s ease',
                    borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
                    '&:hover': {
                      filter: 'brightness(0.85)',
                    },
                  }}
                />
                <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, fontFamily: 'var(--font-outfit)' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1, lineHeight: 1.6, mb: 3 }}>
                    {project.desc}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 4 }}>
                    {project.tech.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(6, 182, 212, 0.08)',
                          border: '1px solid rgba(6, 182, 212, 0.18)',
                          color: 'secondary.light',
                          fontWeight: 500,
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </Box>

                  <Button
                    variant="outlined"
                    color="primary"
                    size="medium"
                    endIcon={<ChevronRightIcon />}
                    component="a"
                    href={project.github}
                    target="_blank"
                    sx={{ alignSelf: 'flex-start' }}
                  >
                    View Code
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Skills Section */}
      <Container maxWidth="lg" sx={{ py: 10, zIndex: 1, position: 'relative' }} id="skills">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontFamily: 'var(--font-outfit)',
            }}
          >
            Technical Skillset
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
            Proficiencies across backend programming, database administration, and modern web integrations.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          {skillCategories.map((skill, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  background: 'rgba(11, 7, 38, 0.35)',
                  border: '1px solid rgba(139, 92, 246, 0.1)',
                  borderRadius: 5,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(139, 92, 246, 0.06)',
                        border: '1px solid rgba(139, 92, 246, 0.1)',
                      }}
                    >
                      {skill.icon}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, fontFamily: 'var(--font-outfit)' }}>
                        {skill.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'primary.light', fontWeight: 600 }}>
                        {skill.rating} Proficiency
                      </Typography>
                    </Box>
                  </Box>

                  {/* Sleek Custom Progress Track */}
                  <Box sx={{ width: '100%', height: 6, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 3, overflow: 'hidden' }}>
                    <Box
                      sx={{
                        width: `${skill.value}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #8b5cf6 0%, #06b6d4 100%)',
                        borderRadius: 3,
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Section */}
      <Container maxWidth="md" sx={{ py: 12, zIndex: 1, position: 'relative' }} id="contact">
        <Card
          sx={{
            p: { xs: 4, md: 6 },
            background: 'rgba(11, 7, 38, 0.55)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: 6,
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, fontFamily: 'var(--font-outfit)' }}>
              Let&apos;s Work Together
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Have a project in mind, looking for a collaborator, or just want to connect? Send a message directly.
            </Typography>
          </Box>

          {/* Form Handling Alert Overlay */}
          {submitStatus === 'success' && (
            <Alert
              icon={<CheckCircleIcon fontSize="inherit" />}
              severity="success"
              sx={{
                mb: 4,
                borderRadius: 3,
                backgroundColor: 'rgba(16, 185, 129, 0.08)',
                color: '#10b981',
                border: '1px solid rgba(16, 185, 129, 0.25)',
              }}
            >
              Message delivered successfully! Thank you for getting in touch. I will respond to you shortly.
            </Alert>
          )}

          {submitStatus === 'error' && (
            <Alert
              icon={<ErrorIcon fontSize="inherit" />}
              severity="error"
              sx={{
                mb: 4,
                borderRadius: 3,
                backgroundColor: 'rgba(239, 68, 68, 0.08)',
                color: '#ef4444',
                border: '1px solid rgba(239, 68, 68, 0.25)',
              }}
            >
              Oops! Something went wrong while delivering your message. Please try again or email me directly.
            </Alert>
          )}

          <Box component="form" onSubmit={handleFormSubmit}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formState.name}
                  onChange={handleFormChange}
                  required
                  slotProps={{
                    input: {
                      sx: {
                        borderRadius: 3,
                        backgroundColor: 'rgba(3, 0, 30, 0.4)',
                        border: '1px solid rgba(139, 92, 246, 0.1)',
                        '&:hover': { border: '1px solid rgba(139, 92, 246, 0.3)' },
                        '&.Mui-focused': { border: '1px solid rgba(6, 182, 212, 0.5)' },
                      },
                    },
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleFormChange}
                  required
                  slotProps={{
                    input: {
                      sx: {
                        borderRadius: 3,
                        backgroundColor: 'rgba(3, 0, 30, 0.4)',
                        border: '1px solid rgba(139, 92, 246, 0.1)',
                        '&:hover': { border: '1px solid rgba(139, 92, 246, 0.3)' },
                        '&.Mui-focused': { border: '1px solid rgba(6, 182, 212, 0.5)' },
                      },
                    },
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={5}
                  value={formState.message}
                  onChange={handleFormChange}
                  required
                  slotProps={{
                    input: {
                      sx: {
                        borderRadius: 4,
                        backgroundColor: 'rgba(3, 0, 30, 0.4)',
                        border: '1px solid rgba(139, 92, 246, 0.1)',
                        '&:hover': { border: '1px solid rgba(139, 92, 246, 0.3)' },
                        '&.Mui-focused': { border: '1px solid rgba(6, 182, 212, 0.5)' },
                      },
                    },
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid size={{ xs: 12 }} sx={{ textAlign: 'center', mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={submitStatus === 'loading'}
                  sx={{
                    px: 6,
                    py: 1.8,
                    borderRadius: 4,
                    minWidth: 200,
                  }}
                >
                  {submitStatus === 'loading' ? (
                    <CircularProgress size={24} sx={{ color: 'text.primary' }} />
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          borderTop: '1px solid rgba(139, 92, 246, 0.1)',
          background: 'rgba(3, 0, 30, 0.8)',
          py: 6,
          mt: 'auto',
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              &copy; {new Date().getFullYear()} Madushanka Premakumara. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton href="mailto:madushankapremakumara@gmail.com" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                <EmailIcon />
              </IconButton>
              <IconButton href="https://github.com/madushankapremakumara" target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                <GitHubIcon />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

    </Box>
  );
}

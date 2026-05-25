'use client';

import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Button, Alert, CircularProgress } from '@mui/material';
import { Terminal, CheckCircle, Error } from '@mui/icons-material';
import HUDPanel from './HUDPanel';

const CommsTerminal: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
      <Box sx={{ width: { xs: '100%', md: '750px' } }}>
        <HUDPanel title="COMMS TERMINAL" fullWidth accentColor="cyan">
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, fontFamily: 'var(--font-outfit)', color: '#06b6d4', fontSize: { xs: '1.7rem', md: '2.2rem' } }}>INITIATE CONTACT</Typography>
            <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1.1rem' }}>Transmit a message to begin collaboration protocol</Typography>
          </Box>

          {submitStatus === 'success' && (
            <Alert icon={<CheckCircle fontSize="inherit" />} severity="success" sx={{ mb: 3, borderRadius: 2, bgcolor: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', fontSize: '1.1rem' }}>
              ✓ Message transmitted successfully. Awaiting response.
            </Alert>
          )}
          {submitStatus === 'error' && (
            <Alert icon={<Error fontSize="inherit" />} severity="error" sx={{ mb: 3, borderRadius: 2, bgcolor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', fontSize: '1.1rem' }}>
               Transmission failed. Retry or use direct channel.
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth label="OPERATOR NAME" name="name" value={formState.name} onChange={handleChange} required slotProps={{ input: { sx: { borderRadius: 2, bgcolor: 'rgba(5, 2, 24, 0.5)', border: '1px solid rgba(139, 92, 246, 0.2)', '&:hover': { border: '1px solid rgba(139, 92, 246, 0.35)' }, '&.Mui-focused': { border: '1px solid #06b6d4', boxShadow: '0 0 0 2px rgba(6,182,212,0.15)' }, color: '#e2e8f0', height: 44, fontSize: '1.1rem' } }, inputLabel: { sx: { color: '#64748b', fontSize: '0.95rem' } } }} variant="outlined" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth label="FREQUENCY (EMAIL)" name="email" type="email" value={formState.email} onChange={handleChange} required slotProps={{ input: { sx: { borderRadius: 2, bgcolor: 'rgba(5, 2, 24, 0.5)', border: '1px solid rgba(139, 92, 246, 0.2)', '&:hover': { border: '1px solid rgba(139, 92, 246, 0.35)' }, '&.Mui-focused': { border: '1px solid #06b6d4', boxShadow: '0 0 0 2px rgba(6,182,212,0.15)' }, color: '#e2e8f0', height: 44, fontSize: '1.1rem' } }, inputLabel: { sx: { color: '#64748b', fontSize: '0.95rem' } } }} variant="outlined" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField fullWidth label="MESSAGE PAYLOAD" name="message" multiline rows={4} value={formState.message} onChange={handleChange} required slotProps={{ input: { sx: { borderRadius: 2, bgcolor: 'rgba(5, 2, 24, 0.5)', border: '1px solid rgba(139, 92, 246, 0.2)', '&:hover': { border: '1px solid rgba(139, 92, 246, 0.35)' }, '&.Mui-focused': { border: '1px solid #06b6d4', boxShadow: '0 0 0 2px rgba(6,182,212,0.15)' }, color: '#e2e8f0', fontSize: '1.1rem' } }, inputLabel: { sx: { color: '#64748b', fontSize: '0.95rem' } } }} variant="outlined" />
              </Grid>
              <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
                <Button type="submit" variant="contained" color="primary" disabled={submitStatus === 'loading'} sx={{ px: 6, py: 1.5, borderRadius: 2.5, minWidth: 200, fontWeight: 700, letterSpacing: '0.1em', fontSize: '1.15rem', background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)', '&:hover': { background: 'linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)', boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)' } }}>
                  {submitStatus === 'loading' ? <CircularProgress size={20} sx={{ color: '#fff' }} /> : <><Terminal sx={{ mr: 1.5, fontSize: '0.8rem' }} />TRANSMIT</>}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </HUDPanel>
      </Box>
    </Box>
  );
};

export default CommsTerminal;
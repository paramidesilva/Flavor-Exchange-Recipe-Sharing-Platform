import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';

const CookingTimer = ({ cook }) => {
  const intervalRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleStartStop = () => {
    if (!hasStarted) {
      const initialTimeInSeconds = cook > 0 ? cook * 60 : 0;
      setTimeLeft(initialTimeInSeconds);
      setIsRunning(true);
      setHasStarted(true);
      startTimer();
    } else if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      setIsRunning(true);
      startTimer();
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Clean up on unmount
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Cooking Timer
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {formatTime(timeLeft)}
      </Typography>
      <Button
        variant={isRunning ? 'outlined' : 'contained'}
        color={isRunning ? 'error' : 'primary'}
        onClick={handleStartStop}
        sx={{
          borderRadius: '30px',
          px: 4,
          py: 1.5,
          fontWeight: 'bold',
          textTransform: 'none',
          transition: 'all 0.3s ease',
        }}
      >
        {!hasStarted ? 'Start Timer' : isRunning ? 'Pause Timer' : 'Resume Timer'}
      </Button>
    </Box>
  );
};

export default CookingTimer;

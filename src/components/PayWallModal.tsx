
import React, { useState } from 'react';
import {
  Modal,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  ListItemIcon,
} from '@mui/material';
import Stepper from './Stepper';


interface PopupModalProps {
  open: boolean;
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ open, onClose }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <Modal
      open={open}
      onClose={onClose} // Close the modal when clicking outside
      disableAutoFocus // Prevents auto-focus on the first element
      disableEnforceFocus // Optional: Allows focus to move outside the modal if needed
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
      closeAfterTransition // Smooth transition
      keepMounted // Improves performance by keeping the modal in the DOM
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          overflow: 'auto',
        }}
        onClick={onClose}>
        <Paper
          sx={{
            width: '80%',
            maxWidth: '900px',
            padding: 3,
            borderRadius: 2,
            display: 'flex',
            backgroundColor: 'rgba(102, 102, 102, 1)',
            color: '#fff',
            maxHeight: '90vh',
            flexDirection: 'column',
            overflowY: 'auto'
          }}
          onClick={(e) => e.stopPropagation()}>
          <Grid container spacing={2}>
            {/* Left Card (Description & Pricing) */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: 'auto',
                  height: 'auto',
                  backgroundColor: '#222',
                  border: '1px',
                  color: '#fff',
                  padding: '42px',
                  // gap:"16px",
                  borderRadius: '10px',
                }}>
                <img src='/icons/Union.svg' />

                <Typography>
                  <Typography fontSize={'1.5rem'}>Welcome to Memvy</Typography>
                  <Typography fontSize={'1.1rem'} color={'#CCCCCC'} lineHeight={'20px'}>
                    The Future of Enjoying the Past
                  </Typography>
                </Typography>

                <Typography fontSize={'1.125rem'} lineHeight={'21.6px'} marginTop={'10px'}>
                  We’ve partnered with the SEC to make the Championship Game truly unforgettable. Gain exclusive access
                  to a curated Memvy story for only $5.
                </Typography>

                <Typography gap={'16px'} marginTop={'10px'}>
                  <Typography variant='body2' display={'flex'} alignItems={'flex-start'}>
                    <img src='/icons/RedTick.svg' style={{ marginRight: '8px' }} />
                    Exclusive content from name, name, name and many more
                  </Typography>

                  <Typography variant='body2' display={'flex'} alignItems={'flex-start'}>
                    <img src='/icons/RedTick.svg' style={{ marginRight: '8px' }} />
                    Immerse yourself in stories, video, photo, and audio collections
                  </Typography>

                  <Typography variant='body2' display={'flex'} alignItems={'flex-start'}>
                    <img src='/icons/RedTick.svg' style={{ marginRight: '8px' }} />
                    Experience the excitement of gameday again and again
                  </Typography>
                </Typography>

                <Typography>
                  <hr style={{ border: '1px solid grey', marginTop: '35px' }} />
                  <Typography variant='h4' style={{ marginTop: '35px' }}>
                    $5.00
                  </Typography>
                </Typography>
              </Box>
            </Grid>

            {/* Right Card (Payment Form) */}
            <Grid item xs={12} md={6}>
              <Stepper />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Modal>
  );
};

export default PopupModal;
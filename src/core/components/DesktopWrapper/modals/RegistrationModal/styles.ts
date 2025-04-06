import { styled } from '@mui/material/styles';
import { Box, Typography, Button, TextField, Select } from '@mui/material';

// Dark theme colors
const colors = {
  backgroundPaper: '#1E1E1E',
  backgroundDefault: '#121212',
  primaryMain: '#90caf9',
  primaryDark: '#42a5f5',
  textPrimary: '#FFFFFF',
  textSecondary: '#b3b3b3',
  divider: '#424242',
};

export const DarkModal = styled(Box)({
  backgroundColor: colors.backgroundPaper,
  borderRadius: '16px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  display: 'flex',
  overflow: 'hidden',
  boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
});

export const ImageContainer = styled(Box)({
  flex: 1,
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover'
});

export const WelcomeOverlay = styled(Box)({
  position: 'absolute',
  width: '33.4vw',
  height: '80vh',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '32px',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
});

export const FormWrapper = styled(Box)({
  flex: 1,
  padding: '32px', // theme.spacing(4) = 32px
  backgroundColor: colors.backgroundDefault,
});

export const formStyles = {
  title: {
    mb: 4,
    color: '#FFFFFF',
  },
  textField: {
    mb: 3,
    color: '#FFFFFF',
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: colors.backgroundPaper,
      
    }
  },
  select: {
    mb: 3,
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: colors.backgroundPaper,
    }
  },
  buttonGroup: {
    display: 'flex',
    gap: 2,
    mt: 4
  },
  primaryButton: {
    py: 1.5,
    borderRadius: '8px',
    backgroundColor: colors.primaryMain,
    '&:hover': {
      backgroundColor: colors.primaryDark,
    }
  },
  secondaryButton: {
    py: 1.5,
    borderRadius: '8px',
    borderColor: colors.divider,
    color: colors.textPrimary,
    '&:hover': {
      borderColor: colors.textSecondary,
    }
  },
  signInButton: {
    color: colors.primaryMain,
    textTransform: 'none',
    '&:hover': {
      color: colors.primaryDark,
      background: 'none'
    }
  },
  existingAccountText: {
    mt: 3,
    textAlign: 'center',
    color: '#FFFFFF',
  }
};

export const welcomeStyles = {
  title: {
    color: 'white',
    gutterBottom: true
  },
  subtitle: {
    color: 'rgba(255,255,255,0.8)'
  }
};

export const closeButtonStyles = {
  position: 'absolute',
  right: 8,
  top: 8,
  color: colors.textSecondary,
  zIndex: 1,
};
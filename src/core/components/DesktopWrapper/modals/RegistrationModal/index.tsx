import { useTypedDispatch } from './../../../../store';
import { selectRegistrationModalState } from './../../../../store/modules/modals/selectors';
import { closeRegistrationModal } from './../../../../store/modules/modals/slice';
import { useSelector } from 'react-redux';
import { 
  Modal,
  Box, 
  IconButton,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import background from './../../../../assets/images/background.png';
import { 
  DarkModal,
  ImageContainer,
  StyledImage,
  WelcomeOverlay,
  FormWrapper,
  formStyles,
  welcomeStyles,
  closeButtonStyles
} from './styles';

export const RegistrationForm = () => {
  const dispatch = useTypedDispatch();
  const { isOpen } = useSelector(selectRegistrationModalState);

  const handleClose = () => {
    dispatch(closeRegistrationModal());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    handleClose();
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <DarkModal>
        <IconButton 
          onClick={handleClose}
          sx={closeButtonStyles}
        >
          <CloseIcon />
        </IconButton>

        <ImageContainer>
          <StyledImage src={background} alt="Profile preview" />
          <WelcomeOverlay>
            <Typography variant="h4" {...welcomeStyles.title}>
              Welcome to Our Platform
            </Typography>
            <Typography variant="body1" {...welcomeStyles.subtitle}>
              Join our community and start your journey with us today
            </Typography>
          </WelcomeOverlay>
        </ImageContainer>

        <FormWrapper>
          <Typography variant="h4" sx={formStyles.title}>
            Registration
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              required
              sx={formStyles.textField}
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              required
              sx={formStyles.textField}
            />

            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              required
              sx={formStyles.textField}
            />

            <Box sx={formStyles.buttonGroup}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={formStyles.primaryButton}
              >
                Complete Registration
              </Button>
              <Button
                fullWidth
                variant="outlined"
                onClick={handleClose}
                sx={formStyles.secondaryButton}
              >
                Cancel
              </Button>
            </Box>

            <Typography sx={formStyles.existingAccountText}>
              Already have an account?{' '}
              <Button 
                component="span"
                sx={formStyles.signInButton}
              >
                Sign in
              </Button>
            </Typography>
          </form>
        </FormWrapper>
      </DarkModal>
    </Modal>
  );
};
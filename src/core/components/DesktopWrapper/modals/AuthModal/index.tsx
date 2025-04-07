import { useTypedDispatch } from './../../../../store';
import { selectAuthModalState } from './../../../../store/modules/modals/selectors';
import { closeAuthModal, closeRegistrationModal, openRegistrationModal } from './../../../../store/modules/modals/slice';
import { useSelector } from 'react-redux';
import background from './../../../../assets/images/background.png'
import * as UI from './styles';
import { Box, Button, TextField, Typography } from '@mui/material';
import { formStyles } from './styles';


export const AuthModal = () => {
  const dispatch = useTypedDispatch();
  const { isOpen } = useSelector(selectAuthModalState);

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(closeRegistrationModal());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const handleOpenRegistrationModal = () => {
    dispatch(openRegistrationModal())
    dispatch(closeAuthModal());
  };

  return (
    <UI.ModalOverlay>
      <UI.ModalContent>
        <UI.CloseButton onClick={handleClose}>×</UI.CloseButton>
        <UI.InnerContentWrapper>
          <UI.ImageContainer>
            <UI.ImagePreview src={background} alt="Profile preview" />
            <UI.WelcomeOverlay>
              <UI.WelcomeContent>
                <UI.WelcomeTitle>Welcome Back!</UI.WelcomeTitle>
                <UI.WelcomeSubtitle>
                 
                </UI.WelcomeSubtitle>
              </UI.WelcomeContent>
            </UI.WelcomeOverlay>
          </UI.ImageContainer>
          <UI.FormWrapper>
            <UI.Title>Sign in</UI.Title>

            <UI.Form onSubmit={handleSubmit}>
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

              <Box sx={formStyles.buttonGroup}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={formStyles.primaryButton}
                >
                  Submit
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
            </UI.Form>

            <Typography sx={formStyles.existingAccountText}>
              Do not have an account?{' '}
              <Button
                component="span"
                onClick={handleOpenRegistrationModal}
                sx={formStyles.signInButton}
              >
                Sign up
              </Button>
            </Typography>

          </UI.FormWrapper>
        </UI.InnerContentWrapper>
      </UI.ModalContent>
    </UI.ModalOverlay>
  );
};
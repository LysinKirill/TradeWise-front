import { useSelector } from 'react-redux';
import background from '@/assets/images/background.png'
import * as UI from './styles';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useTypedDispatch } from '@/app/store';
import { selectAuthModalState } from '@/app/store/modules/modals/selectors';
import { useState } from 'react';
import { closeAuthModal, openRegistrationModal } from '@/app/store/modules/modals/slice';
import { authFormFields } from './constants';
import { authUser } from '@/shared/api/users';
import { ROUTES } from '@/shared/constants/routes';
import { useAuth } from '@/app/providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { IUserAuthData } from '@/features/auth/types';
import { toast } from 'react-toastify';

export const AuthModal = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const { login } = useAuth();
  const { isOpen } = useSelector(selectAuthModalState);
  const [formData, setFormData] = useState<IUserAuthData>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(closeAuthModal());
  };

  const handleOpenRegistrationModal = () => {
    dispatch(openRegistrationModal())
    dispatch(closeAuthModal());
  };

  const validateField = (name: string, value: string) => {
    const fieldConfig = authFormFields.find(f => f.name === name);
    if (!fieldConfig) return '';

    let error = '';

    if (fieldConfig.required && !value.trim()) {
      error = 'This field is required';
    }

    if (!error && fieldConfig.validation?.pattern && !fieldConfig.validation.pattern.value.test(value)) {
      error = fieldConfig.validation.pattern.message;
    }

    return error;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    authFormFields.forEach(({ name }) => {
      const error = validateField(name, formData[name]);
      if (error) newErrors[name] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: IUserAuthData) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      const error = validateField(name, value);
      setErrors((prev: Record<string, string>) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev: Record<string, string>) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await authUser(formData);

      if (response.status === 200) {
        dispatch(closeAuthModal());
        toast.success('Log in succesfully!')
        login(response.data.userData, response.data);
        navigate(ROUTES.DASHBOARD);
      }

    } catch (error) {
      console.error('Login error:', error);
      setErrors({
        general: 'Invalid email or password'
      });
    } finally {
      setIsSubmitting(false);
    }
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
              {authFormFields.map((field) => (
                <TextField
                  key={field.name}
                  fullWidth
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={!!errors[field.name]}
                  helperText={errors[field.name] || ' '}
                  sx={UI.formStyles.textField}
                  variant="outlined"
                />
              ))}

              <Box sx={UI.formStyles.buttonGroup}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={UI.formStyles.primaryButton}
                >
                  {isSubmitting ? 'Signing in...' : 'Sign in'}
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={handleClose}
                  sx={UI.formStyles.secondaryButton}
                >
                  Cancel
                </Button>
              </Box>
            </UI.Form>
            {errors.general && (
              <Typography color="error" sx={{ mb: 1 }}>
                {errors.general}
              </Typography>
            )}


            <Typography sx={UI.formStyles.existingAccountText}>
              Do not have an account?{' '}
              <Button
                component="span"
                onClick={handleOpenRegistrationModal}
                sx={UI.formStyles.signInButton}
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
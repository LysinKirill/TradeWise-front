
import { useTypedDispatch } from '@/app/store';
import { selectRegistrationModalState } from '@/app/store/modules/modals/selectors';
import { closeRegistrationModal, openAuthModal } from '@/app/store/modules/modals/slice';
import { registerUser } from '@/shared/api/users';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { formFields } from './constants';
import * as UI from './styles';
import { Box, Button, TextField, Typography } from '@mui/material';
import background from '@assets/images/background.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/app/providers/AuthProvider';
import { IUserRegistrationData } from '@/features/auth/types';

export const RegistrationForm = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const { isOpen } = useSelector(selectRegistrationModalState);
  const [formData, setFormData] = useState<IUserRegistrationData>({
    email: '',
    fullName: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(closeRegistrationModal());
    handleReset();
  };

  const handleOpenAuthModal = () => {
    dispatch(openAuthModal());
    dispatch(closeRegistrationModal());
  };

  const validateField = (name: string, value: string) => {
    const fieldConfig = formFields.find(f => f.name === name);
    if (!fieldConfig) return '';

    let error = '';

    if (fieldConfig.required && !value.trim()) {
      error = 'This field is required';
    }

    if (!error && fieldConfig.validation?.pattern && !fieldConfig.validation.pattern.value.test(value)) {
      error = fieldConfig.validation.pattern.message;
    }

    if (!error && fieldConfig.validation?.custom) {
      error = fieldConfig.validation.custom(value, formData) || '';
    }

    return error;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    formFields.forEach(({ name }) => {
      const error = validateField(name, formData[name]);
      if (error) newErrors[name] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: IUserRegistrationData) => ({ ...prev, [name]: value }));

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
    navigate('/dashboard');
    //if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const userData = await registerUser(formData);

      login({
        email: userData.email,
        fullName: userData.fullName
      });
      
      dispatch(closeRegistrationModal());
      handleReset();
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration error:', error);
      // Consider adding error state display here
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    })
    setErrors({});
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
                <UI.WelcomeTitle>Welcome to Our Platform</UI.WelcomeTitle>
                <UI.WelcomeSubtitle>
                  Join our community and start your journey with us today
                </UI.WelcomeSubtitle>
              </UI.WelcomeContent>
            </UI.WelcomeOverlay>
          </UI.ImageContainer>
          <UI.FormWrapper>
            <UI.Title>Registration</UI.Title>

            <UI.Form onSubmit={handleSubmit}>
              {formFields.map((field) => (
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
                  onClick={handleSubmit}
                  sx={UI.formStyles.primaryButton}
                >
                  {isSubmitting ? 'Processing...' : 'Complete Registration'}
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

            <Typography sx={UI.formStyles.existingAccountText}>
              Already have an account?{' '}
              <Button
                component="span"
                onClick={handleOpenAuthModal}
                sx={UI.formStyles.signInButton}
              >
                Sign in
              </Button>
            </Typography>

          </UI.FormWrapper>
        </UI.InnerContentWrapper>
      </UI.ModalContent>
    </UI.ModalOverlay>
  );
};
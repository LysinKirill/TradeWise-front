import { useTypedDispatch } from './../../../../store';
import { selectRegistrationModalState } from './../../../../store/modules/modals/selectors';
import { closeRegistrationModal, openAuthModal } from './../../../../store/modules/modals/slice';
import { useSelector } from 'react-redux';
import background from './../../../../assets/images/background.png'
import * as UI from './styles';
import { Box, Button, TextField, Typography } from '@mui/material';
import { formStyles } from './styles';
import { useState } from 'react';
import { formFields } from './constants';
import { IUserRegistrationData } from './types';
import { registerUser } from './../../../../api/users';


export const RegistrationForm = () => {
  const dispatch = useTypedDispatch();
  const { isOpen } = useSelector(selectRegistrationModalState);
  const [formData, setFormData] = useState<IUserRegistrationData>({
    email: '',
    fullName: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(closeRegistrationModal());
    setFormData({
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    })
    setErrors({});
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
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validate field on change
    if (errors[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      //await registerUser(formData);
      dispatch(closeRegistrationModal());
      // Optional: Add success notification or redirect
    } catch (error) {
      console.error('Registration error:', error);
      // Add error handling (e.g., show error message to user)
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
                  sx={formStyles.textField}
                  variant="outlined"
                />
              ))}

              <Box sx={formStyles.buttonGroup}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={formStyles.primaryButton}
                >
                  {isSubmitting ? 'Processing...' : 'Complete Registration'}
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
              Already have an account?{' '}
              <Button
                component="span"
                onClick={handleOpenAuthModal}
                sx={formStyles.signInButton}
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
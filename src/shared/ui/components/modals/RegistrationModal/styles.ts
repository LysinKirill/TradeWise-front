//import { colors } from './../../../../constants/colors';
import styled, { css } from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;

  ${({ theme }) => theme.isMobile && css`
    align-items: flex-end;
  `}
`;

export const ModalContent = styled.div`
  background: black;
  box-shadow: 0 0px 15px rgba(255, 255, 255, 0.31);
  border-radius: 16px;
  width: 90%;
  max-width: 1200px;
  height: 90%;
  max-height: 1000px;
  position: relative;

  ${({ theme }) => theme.isMobile && css`
    width: 100%;
    height: 95vh;
    max-height: none;
    border-radius: 16px 16px 0 0;
  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;

  ${({ theme }) => theme.isMobile && css`
    top: 0.5rem;
    right: 0.5rem;
    font-size: 2rem;
  `}
`;

export const ImagePreview = styled.img`
  height: 90vh;
  object-fit: cover;
  border-radius: 16px;

  ${({ theme }) => theme.isMobile && css`
    height: 40vh;
  `}
`;

export const ImageContainer = styled.div`
  position: relative;

  ${({ theme }) => theme.isMobile && css`
    display: none;
  `}
`;

export const WelcomeOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const WelcomeContent = styled.div`
  max-width: 600px;
  color: white;
`;

export const WelcomeTitle = styled.h2`
  font-size: 5rem;
  line-height: 1.2;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  ${({ theme }) => theme.isMobile && css`
    font-size: 2.5rem;
  `}
`;

export const WelcomeSubtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  opacity: 0.9;
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  ${({ theme }) => theme.isMobile && css`
    font-size: 1rem;
    padding: 0 1rem;
  `}
`;

export const InnerContentWrapper = styled.div`
  padding: 0rem;
  display: flex;
  gap: 5rem;

  ${({ theme }) => theme.isMobile && css`
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  `}
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 30vw;

  ${({ theme }) => theme.isMobile && css`
    max-width: 100%;
    padding: 1rem;
    justify-content: flex-start;
  `}
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4); 

  ${({ theme }) => theme.isMobile && css`
    font-size: 1.8rem;
    margin-bottom: 1rem;
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const PrimaryButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  flex: 1;

  &:hover {
    
  }
`;

export const SecondaryButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #f3f4f6;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  flex: 1;

  &:hover {
    background: #e5e7eb;
  }
`;

export const ExistingAccountText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: #666;
  font-size: 0.9rem;
`;

export const SignInLink = styled.a`
 
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const colors = {
  backgroundPaper: '#1E1E1E',
  backgroundDefault: '#121212',
  primaryMain: '#801AE5',
  primaryDark: '#801AE5',
  textPrimary: '#FFFFFF',
  textSecondary: '#b3b3b3',
  divider: '#424242',
};

export const formStyles = {
  title: {
    mb: 4,
    color: '#FFFFFF',
  },
  textField: {
    mb: 0.5,
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: colors.backgroundPaper,
      color: '#FFFFFF', // Input text color
      //'& fieldset': { borderColor: 'purple' },
      '&:hover fieldset': { borderColor: '#801AE5' },
      '&.Mui-focused fieldset': { borderColor: '#801AE5' },

      // Input text
      '& .MuiInputBase-input': {
        color: '#FFFFFF', // Explicit text color
      },

      // Label
      '& .MuiInputLabel-root': {
        color: '#FFFFFF', // Label color
        '&.Mui-focused': {
          color: 'violet', // Focused label color
        },
        '&.Mui-error': {
          color: '#d32f2f' // Error state color
        }
      },

      // Placeholder text
      '& input::placeholder': {
        color: 'rgba(255,255,255,0.5)',
        opacity: 1,
      },
    },
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
    gap: 4,
    mt: 0
  },
  primaryButton: {
    py: 1,
    borderRadius: '8px',
    borderColor: colors.divider,
    backgroundColor: colors.primaryMain,
    fontWeight: 700, // Bold text
    transition: 'all 0.3s ease',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: colors.primaryDark,
      transform: 'scale(1.05)',
      boxShadow: `0 0 15px #801AE5`,
      zIndex: 1
    }
  },
  secondaryButton: {
    py: 1,
    borderRadius: '8px',
    color: colors.textPrimary,
    backgroundColor: '#302938',
    fontWeight: 700, // Bold text
    transition: 'all 0.3s ease',
    boxShadow: 'none',
    '&:hover': {
      borderColor: colors.textSecondary,
      transform: 'scale(1.05)',
      boxShadow: `0 0 15px #302938`,
      zIndex: 1
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
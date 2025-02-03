import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0d0d0d;
  color: #fff;
  min-height: 100vh;
  padding: 40px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavIcons = styled.div`
  display: flex;
  gap: 15px;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
`;

// Hero Section
export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 40px;
`;

export const HeroContent = styled.div`
  max-width: 600px;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
  opacity: 0.8;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

export const PrimaryButton = styled.button`
  padding: 12px 24px;
  background: #7b2cf5;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: #333;
`;

// Auth Section
export const AuthSection = styled.div`
  text-align: center;
  margin-top: 40px;
`;

export const SignInPrompt = styled.p`
  font-size: 1rem;
  margin-bottom: 5px;
`;

export const SignInButton = styled.button`
  padding: 10px 20px;
  background: #222;
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;

export const NewUserPrompt = styled.p`
  margin-top: 20px;
  font-size: 1rem;
`;

export const CreateAccountButton = styled(PrimaryButton)`
  margin-top: 10px;
  width: 100%;
`;

// Feature Cards
export const FeatureCards = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

export const Card = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  width: 250px;
`;

export const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  opacity: 0.8;
`;

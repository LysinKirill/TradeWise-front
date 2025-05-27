import { colors } from "@/shared/constants/colors";
import styled, { css } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

export const ModalContainer = styled.div`
  background: ${colors.backgroundDark};
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  box-shadow: 0 0 30px rgba(138, 43, 226, 0.3);
  border: 1px solid ${colors.borderColor};
  overflow: hidden;

  ${({ theme }) => theme.isMobile && css`
    width: 95%;
    max-height: 90vh;
  `}
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: linear-gradient(
    135deg,
    ${colors.cardBg} 0%,
    ${colors.backgroundDark} 100%
  );
  border-bottom: 2px solid ${colors.neonPurple};
`;

export const ModalTitle = styled.h3`
  color: ${colors.white};
  font-size: 1.5rem;
  margin: 0;
  text-shadow: 0 0 15px ${colors.neonPurple}90;
  letter-spacing: 0.5px;

  ${({ theme }) => theme.isMobile && css`
    font-size: 1.3rem;
  `}
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${colors.textSecondary};
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  line-height: 1;

  &:hover {
    color: ${colors.neonPurple};
    transform: rotate(90deg);
  }
`;

export const ModalBody = styled.div`
  padding: 2rem;
  color: ${colors.textPrimary};
  max-height: 70vh;
  overflow-y: auto;

  ${({ theme }) => theme.isMobile && css`
    padding: 1.5rem;
  `}
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  color: ${colors.neonPurple};
  font-size: 1.2rem;
`;

export const ErrorMessage = styled.div`
  padding: 1rem;
  background: ${colors.red}20;
  border: 1px solid ${colors.red};
  border-radius: 8px;
  color: ${colors.red};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const ActionButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: flex-end;

  ${({ theme }) => theme.isMobile && css`
    flex-direction: column;
    gap: 0.8rem;
  `}
`;

export const EditButton = styled.button`
  background: ${colors.neonPurple};
  color: ${colors.white};
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    box-shadow: 0 0 15px ${colors.neonPurple}50;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const DeleteButton = styled.button`
  background: ${colors.red};
  color: ${colors.white};
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    box-shadow: 0 0 15px ${colors.red}50;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
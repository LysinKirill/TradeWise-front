import { colors } from "@/shared/constants/colors";
import styled, { css } from "styled-components";

export const OverviewContainer = styled.div`
  box-shadow: 0px 10px 100px rgba(84, 1, 140, 0.75);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.isMobile && css`
    padding: 1rem;
    border-radius: 12px;
  `}
`;

export const Title = styled.h3`
  color: ${colors.white};
  margin: 0 0 1.5rem 0;
  font-size: 1.25rem;

  ${({ theme }) => theme.isMobile && css`
    font-size: 1rem;
    margin-bottom: 1rem;
  `}
`;

export const InputGroup = styled.div`
  margin-bottom: 1rem;

  ${({ theme }) => theme.isMobile && css`
    margin-bottom: 0.75rem;
  `}
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: ${colors.accentBlack};
  border: 1px solid ${colors.greyText};
  border-radius: 6px;
  color: ${colors.white};
  font-size: 1rem;
  
  &:focus {
    outline: 2px solid ${colors.purpleButton};
  }

  ${({ theme }) => theme.isMobile && css`
    padding: 0.6rem;
    font-size: 0.9rem;
  `}
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  background: ${colors.accentBlack};
  border: 1px solid ${colors.greyText};
  border-radius: 6px;
  color: ${colors.white};
  min-height: 100px;
  resize: vertical;
  font-size: 1rem;

  ${({ theme }) => theme.isMobile && css`
    padding: 0.6rem;
    font-size: 0.9rem;
    min-height: 80px;
  `}
`;

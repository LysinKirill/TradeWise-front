import { colors } from "@/shared/constants/colors";
import styled from "styled-components";

export const OverviewContainer = styled.div`
  background: ${colors.darkPurpleButton};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h3`
  color: ${colors.purpleButton};
  margin: 0 0 1.5rem 0;
  font-size: 1.25rem;
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
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
`;

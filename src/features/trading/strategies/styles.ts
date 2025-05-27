import { colors } from "@/shared/constants/colors";
import styled, { css } from "styled-components";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  width: 100%;
  justify-content: center;
  border-top: 1px solid ${colors.greyText};

  ${({ theme }) => theme.isMobile && css`
    padding: 1rem;
    gap: 0.5rem;
  `}
`;
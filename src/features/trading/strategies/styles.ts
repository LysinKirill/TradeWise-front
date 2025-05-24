import { colors } from "@/shared/constants/colors";
import styled, { css } from "styled-components";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  border-top: 1px solid ${colors.greyText};

  ${({ theme }) => theme.isMobile && css`
    //flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
  `}
`;
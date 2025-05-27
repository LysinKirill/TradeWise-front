import styled from "styled-components";

export const Footer = styled.footer`
  margin-top: 2rem;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  border-top: 1px solid white;
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;
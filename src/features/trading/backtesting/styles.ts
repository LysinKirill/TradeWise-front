import styled from 'styled-components';
import { chartColors, colors } from '@/shared/constants/colors';

export const Container = styled.div`
  //background: ${colors.darkPurpleButton};
  border-radius: 16px;
  padding: 2rem;
  width: 100vw;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h2`
  color: ${colors.white};
  margin: 0 0 1rem 0;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${colors.white};
`;

export const StyledInput = styled.input`
  padding: 0.75rem;
  border-radius: 6px;
  background: ${colors.accentBlack};
  border: 1px solid ${colors.greyText};
  color: ${colors.white};
  font-size: 1rem;

  &:focus {
    outline: 2px solid ${colors.purpleButton};
  }
`;

export const Select = styled.select`
  padding: 0.75rem;
  border-radius: 6px;
  background: ${colors.accentBlack};
  border: 1px solid ${colors.greyText};
  color: ${colors.white};
  font-size: 1rem;

  &:focus {
    outline: 2px solid ${colors.purpleButton};
  }
`;

export const ButtonWrapper = styled.div``;

export const PrimaryButton = styled.button`
  background: ${colors.purpleButton};
  color: ${colors.white};
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 transparent;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px ${colors.purpleButton};
    z-index: 1;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ResultBlock = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: ${colors.cardBg};
  box-shadow: 0 0 15px ${colors.purpleButton};

  h3 {
    margin-bottom: 1rem;
    color: ${colors.primaryText};
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
`;

export const HistoryBlock = styled.div`
  margin-top: 3rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: ${colors.cardBg};
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);

  h3 {
    margin-bottom: 1rem;
    color: ${colors.primaryText};
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
    color: ${colors.secondaryText};
  }
`;

export const StatusIndicator = styled.span<{ status: string }>`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  background: ${({ status }) => 
    status === 'running' ? 'rgba(76, 175, 80, 0.2)' :
    status === 'pending' ? 'rgba(255, 193, 7, 0.2)' :
    status === 'failed' ? 'rgba(244, 67, 54, 0.2)' :
    'rgba(158, 158, 158, 0.2)'};
  color: ${({ status }) => 
    status === 'running' ? '#4CAF50' :
    status === 'pending' ? '#FFC107' :
    status === 'failed' ? '#F44336' :
    '#9E9E9E'};
`;

export const FormCard = styled.div`
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0px 10px 100px rgba(84, 1, 140, 0.75);
`;

export const HistoryCard = styled(FormCard)`
  margin-top: 2rem;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.2rem;
  color: ${colors.white};
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${colors.borderColor};

  svg {
    stroke-width: 1.5px;
  }
`;

export const InputRow = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-bottom: 1.5rem;
`;

export const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const ResponsiveTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 1rem;
    text-align: left;
    font-size: 0.9rem;
  }

  th {
    background: linear-gradient(
    135deg,
    ${chartColors.primary} 0%,
    ${chartColors.secondary} 50%,
    ${chartColors.tertiary} 90%
  );
    color: ${colors.textSecondary};
    font-weight: 500;
    border-radius: 8px 8px 0px 0px;
  }

  td {
    border-bottom: 1px solid ${colors.borderColor};
  }

  tr:last-child td {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    th, td {
      padding: 0.8rem;
    }
  }
`;

export const TimeGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  
  div:first-child {
    font-weight: 500;
  }
  
  div:last-child {
    font-size: 0.85rem;
    color: ${colors.textSecondary};
  }
`;

export const CancelButton = styled.button`
  background: ${colors.accentRed}20;
  color: ${colors.accentRed};
  border: 1px solid ${colors.accentRed};
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.accentRed}30;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 2rem;
  color: ${colors.textSecondary};
  font-size: 0.95rem;

  svg {
    stroke-width: 1.2px;
  }
`;
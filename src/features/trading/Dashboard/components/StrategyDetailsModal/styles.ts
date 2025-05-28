import { colors } from "@/shared/constants/colors";
import { styled } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(6px);
`;

export const ModalContainer = styled.div`
  background: ${colors.backgroundDark};
  border-radius: 16px;
  width: 90%;
  max-width: 800px;
  box-shadow: 0 0 40px rgba(138, 43, 226, 0.4);
  border: 1px solid ${colors.neonPurple}80;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: linear-gradient(
    135deg,
    ${colors.darkPurple} 0%,
    ${colors.neonPurple} 100%
  );
  border-bottom: 2px solid ${colors.neonPurple};
`;

export const ModalTitle = styled.h3`
  color: ${colors.white};
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.5px;
  text-shadow: 0 0 20px ${colors.neonPurple}80;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${colors.textSecondary};
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  line-height: 1;
  padding: 0 0.5rem;

  &:hover {
    color: ${colors.neonPurple};
    transform: scale(1.1);
  }
`;

export const ModalBody = styled.div`
  padding: 2rem;
  max-height: 70vh;
  overflow-y: auto;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  color: ${colors.neonPurple};
  font-size: 1.2rem;
  font-weight: 500;
`;

export const ConfigurationSection = styled.section`
  margin-bottom: 2.5rem;
  border-radius: 12px;
`;

export const ExecutionSection = styled.section`
  margin: 2rem 0;
`;

export const SectionTitle = styled.h4`
  color: ${colors.white};
  font-size: 1.2rem;
  margin: 0 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${colors.neonPurple};
  text-shadow: 0 0 20px ${colors.neonPurple}80;
`;

export const ConfigData = styled.div`
  display: grid;
  gap: 1rem;
`;

export const ConfigRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.5rem 0;
  border-bottom: 1px dashed ${colors.neonPurple}30;

  &:last-child {
    border-bottom: none;
  }
`;

export const ConfigLabel = styled.span`
  color: ${colors.textSecondary};
  font-size: 0.95rem;
`;

export const ConfigValue = styled.span`
  color: ${colors.textPrimary};
  font-weight: 500;
  max-width: 60%;
  text-align: right;
`;

export const ExecutionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${colors.backgroundDark};
  border-radius: 8px;
  overflow: hidden;
`;

export const TableHeader = styled.thead`
  background: linear-gradient(
    135deg,
    ${colors.darkPurple} 0%,
    ${colors.neonPurple} 100%
  );
`;

export const TableRow = styled.tr`
  transition: background 0.2s ease;

  &:nth-child(even) {
    background: ${colors.accentBlack};
  }

  &:hover {
    background: ${colors.rowHover} !important;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 1rem 1.5rem;
  text-align: left;
  color: ${colors.white} !important;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
`;

export const TableCell = styled.td`
  padding: 1rem 1.5rem;
  color: ${colors.textPrimary};
  font-size: 0.95rem;
  border-bottom: 1px solid ${colors.neonBlue}20;
`;

export const TableBody = styled.tbody`
  & > tr:last-child > td {
    border-bottom: none;
  }
`;

export const ActionButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: flex-end;
`;

export const BaseButton = styled.button`
  padding: 0.8rem 1.8rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(4px);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const EditButton = styled(BaseButton)`
  background: ${colors.neonPurple};
  color: ${colors.white};
  border: 1px solid ${colors.neonPurple}80;

  &:hover {
    background: ${colors.neonPurple}dd;
  }
`;

export const DeleteButton = styled(BaseButton)`
  background: ${colors.red}20;
  color: ${colors.red};
  border: 1px solid ${colors.red}80;

  &:hover {
    background: ${colors.red}30;
  }
`;

export const StatusIndicator = styled.span<{ status: string }>`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
  background: ${({ status }) =>
    status === 'pending' ? 'rgba(255, 193, 7, 0.15)' :
      status === 'running' ? 'rgba(33, 150, 243, 0.15)' :
        status === 'completed' ? 'rgba(76, 175, 80, 0.15)' :
          status === 'failed' ? 'rgba(244, 67, 54, 0.15)' :
            status === 'canceled' ? 'rgba(158, 158, 158, 0.15)' :
              'rgba(103, 58, 183, 0.15)'};
  color: ${({ status }) =>
    status === 'pending' ? '#FFC107' :
      status === 'running' ? '#2196F3' :
        status === 'completed' ? '#4CAF50' :
          status === 'failed' ? '#F44336' :
            status === 'canceled' ? '#9E9E9E' :
              '#673AB7'};
`;

export const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  color: ${colors.textSecondary};
  font-size: 1rem;
  border: 1px dashed ${colors.borderColor};
  border-radius: 8px;
`;
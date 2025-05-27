/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useAuth } from '@app/providers/AuthProvider';
import { getStrategy, editStrategy } from '@/shared/api/strategies';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';

interface EditStrategyModalProps {
  strategyId: string;
  onClose: () => void;
  onSave: () => void;
}

export interface StrategyData {
  strategyId: string;
  title: string;
  description: string;
  strategyStages: any[];
  strategyTransitions: any[];
}

const EditStrategyModal = ({ strategyId, onClose, onSave }: EditStrategyModalProps) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [strategyData, setStrategyData] = useState<StrategyData>({
    strategyId: '',
    title: '',
    description: '',
    strategyStages: [],
    strategyTransitions: []
  });

  useEffect(() => {
    const loadStrategy = async () => {
      try {
        const strategy:any = await getStrategy(strategyId);
        setStrategyData({
          strategyId: strategyId,
          title: strategy.title,
          description: strategy.description,
          strategyStages: strategy.strategyStages || [],
          strategyTransitions: strategy.strategyTransitions || []
        });
      } catch (error) {
        toast.error('Failed to load strategy data');
        onClose();
      } finally {
        setLoading(false);
      }
    };

    loadStrategy();
  }, [strategyId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await editStrategy({
        ...strategyData,
        Title: strategyData.title,
        Description: strategyData.description
      });
      toast.success('Strategy updated successfully');
      onSave();
      onClose();
    } catch (error) {
      toast.error('Failed to update strategy');
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Edit Strategy</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

        <ModalBody>
          {loading ? (
            <Loader>Loading Strategy Data...</Loader>
          ) : (
            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <label>Strategy Name</label>
                <StyledInput
                  type="text"
                  value={strategyData.title}
                  onChange={(e) => setStrategyData({...strategyData, title: e.target.value})}
                  required
                />
              </InputGroup>

              <InputGroup>
                <label>Description</label>
                <StyledTextarea
                  value={strategyData.description}
                  onChange={(e) => setStrategyData({...strategyData, description: e.target.value})}
                  rows={4}
                />
              </InputGroup>

              <ActionButtons>
                <CancelButton type="button" onClick={onClose}>
                  Cancel
                </CancelButton>
                <SaveButton type="submit">
                  Save Changes
                </SaveButton>
              </ActionButtons>
            </Form>
          )}
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
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

const ModalContainer = styled.div`
  background: ${colors.backgroundDark};
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 0 40px rgba(138, 43, 226, 0.4);
  border: 1px solid ${colors.neonPurple}80;
  overflow: hidden;
`;

const ModalHeader = styled.div`
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

const ModalTitle = styled.h3`
  color: ${colors.white};
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.5px;
  text-shadow: 0 0 20px ${colors.neonPurple}80;
`;

const CloseButton = styled.button`
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

const ModalBody = styled.div`
  padding: 2rem;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  color: ${colors.neonPurple};
  font-size: 1.2rem;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${colors.textSecondary};
    font-size: 0.95rem;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.9rem 1.2rem;
  border: 1px solid ${colors.borderColor};
  border-radius: 8px;
  background: ${colors.inputBackground};
  color: ${colors.textPrimary};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.neonPurple};
    box-shadow: 0 0 12px ${colors.neonPurple}40;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.9rem 1.2rem;
  border: 1px solid ${colors.borderColor};
  border-radius: 8px;
  background: ${colors.inputBackground};
  color: ${colors.textPrimary};
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${colors.neonPurple};
    box-shadow: 0 0 12px ${colors.neonPurple}40;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1.5rem;
`;

const BaseButton = styled.button`
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
`;

const SaveButton = styled(BaseButton)`
  background: ${colors.neonPurple};
  color: ${colors.white};

  &:hover {
    background: ${colors.neonPurple}dd;
    box-shadow: 0 0 15px ${colors.neonPurple}50;
  }
`;

const CancelButton = styled(BaseButton)`
  background: ${colors.accentBlack};
  color: ${colors.textSecondary};
  border: 1px solid ${colors.borderColor};

  &:hover {
    background: ${colors.accentBlack}dd;
  }
`;

export default EditStrategyModal;
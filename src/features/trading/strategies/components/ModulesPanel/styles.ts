import styled from 'styled-components';
import { colors } from '@shared/constants/colors';

export const Container = styled.div`
  position: relative;
  background: ${colors.darkPurpleButton};
  border-radius: 8px;
  padding: 1.5rem;
  width: 75vw;
  overflow-y: auto;
`;

export const Title = styled.h3`
  color: ${colors.purpleButton};
  margin: 0 0 1.5rem 0;
  font-size: 1.25rem;
`;

export const PresetsGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const EmptyState = styled.div`
  color: ${colors.greyText};
  text-align: center;
  padding: 2rem;
`;

// styles.ts
export const DeleteZone = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: #ff000033;
  border: 2px dashed red;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  font-weight: bold;
`;

export const NodeCloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: red;
  color: white;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;
import { colors } from "@/shared/constants/colors";
import styled from "styled-components";

export const IconContainer = styled.div<{ $color: string }>`
  background: ${props => `${props.$color}20`};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: ${props => props.$color};
  transition: transform 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  padding-top: 60px;
  width: 100%;
`;

export const CardContainer = styled.div`
  background: ${colors.accentBlack};
  border: 1px solid ${colors.greyText};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  padding: 1rem;
  cursor: grab;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: ${colors.purpleButton};
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 4px 12px rgba(128, 26, 229, 0.25);
    border-radius: 16px;
    width: 200px;
    height: auto;
    min-height: 200px;

    ${IconContainer} {
      transform: translateY(-50%);
    }

    ${CardContent} {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:active {
    cursor: grabbing;
  }
`;

export const PresetTitle = styled.h4`
  margin: 0;
  color: ${colors.white};
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PresetType = styled.span`
  background: ${colors.darkPurpleButton};
  color: ${colors.purpleButton};
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.65rem;
  font-weight: 500;
  text-align: center;
`;

export const ParametersList = styled.div`
  display: grid;
  gap: 0.3rem;
  margin-top: 0.5rem;
`;

export const ParameterBadge = styled.span`
  background: ${colors.backgroundBlack};
  color: ${colors.greyText};
  padding: 0.25rem;
  border-radius: 4px;
  font-size: 0.65rem;
  text-align: center;
  white-space: nowrap;
`;
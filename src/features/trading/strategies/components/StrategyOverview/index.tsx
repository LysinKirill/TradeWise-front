import {  IStrategyOverviewProps } from '../../types';
import * as UI from './styles';

export const StrategyOverview = ({ strategy, onNameChange, onDescriptionChange  }: IStrategyOverviewProps) => {
  
  return (
    <UI.OverviewContainer>
      <UI.Title>Strategy Overview</UI.Title>
      <UI.InputGroup>
        <UI.StyledInput
          placeholder="Strategy Name"
          value={strategy.name || ''}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </UI.InputGroup>
      <UI.InputGroup>
        <UI.StyledTextarea
          placeholder="Strategy Description"
          value={strategy.description || ''}
          onChange={(e) => onDescriptionChange(e.target.value)}
        />
      </UI.InputGroup>
    </UI.OverviewContainer>
  );
};
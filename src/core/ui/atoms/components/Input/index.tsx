import { colors } from '../../../../constants/colors';
import { Check } from '../../../Icons';

import * as UI from './styles';

export const Input = (props: any) => {
  const {
    error,
    onChange,
    onApplyValue,
    type,
  } = props;
  
  return (
    <UI.InputPageContainer>
      {error && error}
      <UI.InputContainer error={error}>
        <UI.PageInput type={type} onChange={onChange} />
        <UI.IconContainer onClick={onApplyValue}>
          <Check color={colors.accentGreen} size={16}/>
        </UI.IconContainer>
      </UI.InputContainer>
    </UI.InputPageContainer>
  );
};

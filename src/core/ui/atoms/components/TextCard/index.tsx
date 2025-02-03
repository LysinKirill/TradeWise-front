import { Close } from '../../../Icons';
import * as UI from './TextCard.styles';
import { ITextCardProps } from './types';

export const TextCard = (props: ITextCardProps) => {
  const { 
    settings,
    children,
    onClick,
    id,
    isActive,
    onClear,
    withHover,
    additionalStyles,
    isShowCloseButton = true,
  } = props;

  return (
    <UI.Container 
      id={id} 
      {...settings} 
      additionalStyles={additionalStyles} 
      isActive={isActive} 
      withHover={withHover}
      onClick={!isActive ? onClick : onClear}
    >
      {children}
      {isActive && isShowCloseButton
      && <UI.Button>
        <Close id={id} size={12} />
      </UI.Button>
      }
    </UI.Container>
  );
};

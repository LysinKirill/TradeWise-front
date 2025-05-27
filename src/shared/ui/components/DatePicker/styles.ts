import { colors } from "@/shared/constants/colors";
import { css, styled } from "styled-components";

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${colors.textSecondary};
    font-size: 0.95rem;
  }
`;


export const DatePickerWrapper = styled.div`
  .react-datepicker {
    font-family: inherit;
    border: 1px solid ${colors.borderColor};
    background: ${colors.inputBackground};
    color: ${colors.textPrimary};
    border-radius: 8px;
    box-shadow: 0 0 12px ${colors.neonPurple}40;
    width: 320px;
    max-height: 400px;
    display: block;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: ${colors.neonPurple} ${colors.inputBackground};

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: ${colors.inputBackground};
      border-radius: 0 8px 8px 0;
    }

    &::-webkit-scrollbar-thumb {
      background: ${colors.neonPurple};
      border-radius: 3px;
    }
  }

  .react-datepicker__month-container {
    width: 100%;
    padding: 10px;
    min-width: 300px;
  }

  .react-datepicker__header {
    position: sticky;
    top: 0;
    z-index: 1;
    border-bottom: none;
    border-radius: 8px 8px 0 0;
    padding: 15px 0;
  }

  .react-datepicker__aria-live {
  display: none !important;
  visibility: hidden !important;
  height: 0 !important;
  width: 0 !important;
  opacity: 0 !important;
  position: absolute !important;
  pointer-events: none !important;
}

  .custom-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
  }

  .react-datepicker__day-name {
    color: ${colors.white} !important;
    width: 2.5rem;
    line-height: 2.5rem;
    font-size: 0.9rem;
    text-align: center;
  }

  .react-datepicker__month {
    margin: 0;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-around;
  }

  .react-datepicker__day {
    color: ${colors.textPrimary};
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 0.95rem;
    margin: 2px;
    border-radius: 6px;
    transition: all 0.2s ease;
    text-align: center;

    &:hover {
      transform: scale(1.05);
      background: ${colors.neonPurple}40;
    }

    &--selected {
      background: ${colors.neonPurple} !important;
      color: ${colors.white} !important;
      font-weight: 500;
    }

    &--outside-month {
      color: ${colors.textSecondary};
      opacity: 0.7;
    }
  }

  .react-datepicker__navigation {
    top: 20px;
    width: 2rem;
    height: 2rem;
    border: 0.45rem solid transparent;

    &--previous {
      border-right-color: ${colors.white};
      left: 20px;
    }

    &--next {
      border-left-color: ${colors.white};
      right: 20px;
    }
  }

  ${({ theme }) => theme.isMobile && css`
    .react-datepicker {
      width: 100%;
      max-width: 300px;
      font-size: 0.9rem;
    }
    
    .react-datepicker__day {
      width: 2rem;
      height: 2rem;
      line-height: 2rem;
    }
    
    .react-datepicker__navigation {
      top: 15px;
      width: 1.5rem;
      height: 1.5rem;
    }
  `}
`;

export const DateInputWrapper = styled.div`
  position: relative;
  width: 100%;

  .custom-date-input {
    width: 100%;
    padding: 0.9rem 1.2rem;
    padding-left: 2.8rem;
    font-size: 1rem;
    background: ${colors.inputBackground};
    border: 1px solid ${colors.borderColor};
    color: ${colors.white};
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      border-color: ${colors.neonPurple};
    }

    &:focus {
      box-shadow: 0 0 12px ${colors.neonPurple}40;
      outline: none;
    }
  }

  svg {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    color: ${colors.textSecondary};
    width: 1.2em;
    height: 1.2em;
  }
`;
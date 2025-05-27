/* eslint-disable @typescript-eslint/no-unused-vars */
import DatePicker from 'react-datepicker';
import { FiCalendar } from 'react-icons/fi';
import * as UI from './styles';
import type { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import { MiddlewareReturn } from '@floating-ui/core';
import { MiddlewareState } from '@floating-ui/dom';

interface CustomDatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  label: string;
  minDate?: Date;
}

export const CustomDatePicker = ({
  selected,
  onChange,
  label,
  minDate
}: CustomDatePickerProps) => {
  const renderCustomHeader = ({
    monthDate,
    decreaseMonth,
    increaseMonth,
  }: ReactDatePickerCustomHeaderProps) => (
    <div className="custom-header">
      <button type="button" onClick={decreaseMonth}>&lt;</button>
      <div className="month-title">
        {monthDate.toLocaleString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </div>
      <button type="button" onClick={increaseMonth}>&gt;</button>
    </div>
  );

  return (
    <UI.InputGroup>
      <label>{label}</label>
      <UI.DateInputWrapper>
        <FiCalendar />
        <UI.DatePickerWrapper>
          <DatePicker
            selected={selected}
            onChange={onChange}
            dateFormat="MMMM d, yyyy"
            className="custom-date-input"
            popperPlacement="bottom-start"
            monthsShown={1}
            minDate={minDate}
            popperModifiers={[
              {
                name: 'offset',
                options: {
                  offset: [5, 10],
                },
                fn: function (state: MiddlewareState): MiddlewareReturn | Promise<MiddlewareReturn> {
                  throw new Error('Function not implemented.');
                }
              },
              {
                name: 'preventOverflow',
                options: {
                  boundary: 'clippingParents',
                },
                fn: function (state: MiddlewareState): MiddlewareReturn | Promise<MiddlewareReturn> {
                  throw new Error('Function not implemented.');
                }
              },
            ]}
            renderCustomHeader={renderCustomHeader}
          />
        </UI.DatePickerWrapper>
      </UI.DateInputWrapper>
    </UI.InputGroup>
  );
};
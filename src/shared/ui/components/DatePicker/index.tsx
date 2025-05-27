import DatePicker from 'react-datepicker';
import { FiCalendar } from 'react-icons/fi';
import * as UI from './styles';

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
            popperModifiers={{
              offset: {
                enabled: true,
                offset: "5px, 10px"
              },
              preventOverflow: {
                enabled: true,
                boundariesElement: "viewport"
              }
            }}
            renderCustomHeader={({
              monthDate,
              decreaseMonth,
              increaseMonth,
            }) => (
              <div className="custom-header">
                <button onClick={decreaseMonth}>&lt;</button>
                <div className="month-title">
                  {monthDate.toLocaleString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <button onClick={increaseMonth}>&gt;</button>
              </div>
            )}
          />
        </UI.DatePickerWrapper>
      </UI.DateInputWrapper>
    </UI.InputGroup>
  );
};
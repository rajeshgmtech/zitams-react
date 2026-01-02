import React, { forwardRef } from 'react';
import calendarIcon from '../../assets/images/calendar-askjohn.svg';

// Note: this file is plain JSX (not TypeScript). Use a simple prop for showing the icon.
const DatePickerField = forwardRef(({ label, icon = true, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm text-gray-200">{label}</label>

        <div className="relative">
          <input
            ref={ref}
            className="bg-white rounded-full px-4 py-3 min-w-[150px] w-full 
                       text-sm text-gray-700 placeholder:text-gray-400 
                       outline-none cursor-pointer"
            {...props}
          />

          {/* Standard HTML Image Tag */}
          {icon && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <img src={calendarIcon} alt="calendarIcon-askjohn" className="w-4 h-4" />
            </span>
          )}
        </div>
      </div>
    );
  }
);

DatePickerField.displayName = 'DatePickerField';
export default DatePickerField;
import React, { forwardRef, useEffect, useRef, useImperativeHandle } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css'; // Essential styles
import calendarIcon from '../../assets/images/calendar-askjohn.svg';

const FlatPickerField = forwardRef(({ label, icon = true, options = {},onChange, ...props }, ref) => {
  const internalRef = useRef(null);

  // Expose the internal input ref to the parent if they pass a ref
  useImperativeHandle(ref, () => internalRef.current);

  useEffect(() => {
    if (internalRef.current) {
      const fp = flatpickr(internalRef.current, {
        // Default configurations
        dateFormat: "Y-m-d",
        allowInput: true,
        ...options, // Allow overriding options from props
           onChange: (selectedDates, dateStr) => {
        if (onChange) {
          onChange(dateStr); // send value back to React
        }
      }
      });

      // Cleanup on unmount
      return () => {
        fp.destroy();
      };
    }
  }, [options]);

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm text-gray-200">{label}</label>}

      <div className="relative">
        <input
          ref={internalRef}
          className="bg-white rounded-full px-4 py-3  w-full 
                     text-sm text-gray-700 placeholder:text-gray-400 
                     outline-none cursor-pointer"
          {...props}
        />

        {icon && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <img src={calendarIcon} alt="calendar icon" className="w-4 h-4" />
          </span>
        )}
      </div>
    </div>
  );
});

FlatPickerField.displayName = 'FlatPickerField';
export default FlatPickerField;
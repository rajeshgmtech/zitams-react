import React from "react";
import chevronDown from "../../assets/images/chevron-down.svg";

/**
 * @param {Object} props
 * @param {string} props.label - Text displayed above the select
 * @param {Array} props.options - Array of { label, value } objects
 * @param {string|number} props.value - Currently selected value
 * @param {function} props.onChange - Callback (returns value)
 * @param {string} props.placeholder - Initial disabled option text
 * @param {string} props.error - Error message
 */
export default function CustomSelect({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select",
  className = "",
  error,
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm text-gray-200 ml-1">
          {label}
        </label>
      )}

      <div className="relative group">
        <select
          className={`
            appearance-none w-full cursor-pointer rounded-full pl-4 pr-10 py-3
            bg-white text-sm outline-none border transition-all
            ${!value ? "text-gray-400" : "text-[#1E2858]"}
            ${error 
              ? "border-red-500" 
              : "border-gray-200 hover:border-gray-300 focus:border-blue-500"}
          `}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="text-[#1E2858]">
              {opt.label}
            </option>
          ))}
        </select>

        {/* Custom Arrow Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
          <img 
            src={chevronDown} 
            alt="chevron" 
            className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" 
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <span className="text-xs text-red-500 font-medium ml-1">
          {error}
        </span>
      )}
    </div>
  );
}
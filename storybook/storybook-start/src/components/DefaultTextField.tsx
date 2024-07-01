import React from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";
interface IDefaultTextFieldProps {
  errorMessage: string;
  iconAlt: string;
  iconPath: string;
  onIconClick: React.ReactEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
}

export default function DefaultTextField({
  errorMessage,
  iconPath,
  onIconClick,
  placeholder,
  onChange,
  value,
  iconAlt,
  isError,
}: IDefaultTextFieldProps) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {!!value && (
        <IconButton alt={iconAlt} iconPath={iconPath} onClick={onIconClick} />
      )}
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}

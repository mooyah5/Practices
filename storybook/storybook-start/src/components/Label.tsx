import React from "react";

// type Label = 'usernamr', 'password' // stirng보다 확장성 떨어짐

interface ILabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export default function Label({ htmlFor, children }: ILabelProps) {
  return (
    <label className="text-sm text-secondary" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

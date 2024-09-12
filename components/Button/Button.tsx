import { FC } from "react";

type Props = {
  label: string;
  onClick: VoidFunction;
};

const Button: FC<Props> = ({ label, onClick }) => (
  <button className="ds-bg-green-800 ds-border-0 ds-p-4 ds-text-white" onClick={onClick}>
    {label}
  </button>
);

export default Button;

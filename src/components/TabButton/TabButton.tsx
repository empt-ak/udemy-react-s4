import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface TabButtonProps extends ComponentPropsWithoutRef<"button"> {
  children?: ReactNode;
  isSelected: boolean;
}

const TabButton = ({ isSelected, children, ...props }: TabButtonProps) => {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;

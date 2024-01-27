interface DropdownProps {
  classes: string;
  defaultValue: string;
  options: string[];
}

export function Dropdown({ classes, defaultValue, options }: DropdownProps) {
  return (
    <select className={classes} defaultValue={defaultValue}>
      {options.map((option) => {
        return <option>{option}</option>;
      })}
    </select>
  );
}

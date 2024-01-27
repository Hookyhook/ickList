interface DropdownProps {
  classes: string;
  defaultValue: string;
  options: string[];
  handleDropdownSelect: (selectedText: string) => void;
}

export function Dropdown({
  classes,
  defaultValue,
  options,
  handleDropdownSelect,
}: DropdownProps) {
  return (
    <select
      className={classes}
      defaultValue={defaultValue}
      onChange={(event) => handleDropdownSelect(event.target.value)}
    >
      <option>{defaultValue}</option>
      {options.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  );
}

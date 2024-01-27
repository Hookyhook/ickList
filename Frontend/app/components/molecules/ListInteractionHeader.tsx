import { Dropdown } from '@components';

interface ListInteractionHeaderProps {
  handleSearchInput: (searchText: string) => void;
  handleGenderInput: (gender: string) => void;
  handleIckTypeInput: (ickType: string) => void;
}

export function ListInteractionHeader({
  handleGenderInput,
  handleIckTypeInput,
  handleSearchInput,
}: ListInteractionHeaderProps) {
  return (
    <tr>
      <th className="w-11/12">
        <input
          className="w-11/12 input input-bordered"
          placeholder="Search"
          onChange={(event) => handleSearchInput(event.target.value)}
        ></input>
      </th>
      <th>
        <Dropdown
          classes="select select-bordered min-w-[200px]"
          defaultValue="Choose Gender"
          options={['FEMALE', 'MALE', 'GENERAL']}
          handleDropdownSelect={handleGenderInput}
        ></Dropdown>
      </th>
      <th>
        <Dropdown
          classes="select select-bordered min-w-[200px]"
          defaultValue="Choose IckType"
          options={['ICK', 'REVERSEICK']}
          handleDropdownSelect={handleIckTypeInput}
        ></Dropdown>
      </th>
    </tr>
  );
}

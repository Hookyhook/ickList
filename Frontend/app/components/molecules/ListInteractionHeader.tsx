import { Dropdown } from '@components';

export function ListInteractionHeader() {
  return (
    <tr>
      <th className="w-11/12">
        <input
          className="w-11/12 input input-bordered"
          placeholder="Search"
        ></input>
      </th>
      <th>
        <Dropdown
          classes="select select-bordered min-w-[200px]"
          defaultValue="Choose IckType"
          options={['FEMALE', 'MALE', 'GENERAL']}
        ></Dropdown>
      </th>
      <th>
        <Dropdown
          classes="select select-bordered min-w-[200px]"
          defaultValue="Choose IckType"
          options={['ICK', 'REVERSEICK']}
        ></Dropdown>
      </th>
    </tr>
  );
}

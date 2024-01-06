import { Ick } from '@types';

import { EditIckButton } from '@components';
interface ListElementProps {
  ick: Ick;
  index: number;
}

export function ListElement({ ick, index }: ListElementProps) {
  return (
    <tr className="hover" key={index}>
      <td>{ick.ickDescription}</td>
      <td>{ick.gender}</td>
      <td>{ick.ickType}</td>
      <td className=" justify-end flex pr-3">
        <EditIckButton />
      </td>
    </tr>
  );
}

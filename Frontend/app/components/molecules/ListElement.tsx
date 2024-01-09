import { Ick } from '@types';

import { DeleteIckButton, EditIckButton } from '@components';
interface ListElementProps {
  ick: Ick;
}

export function ListElement({ ick }: ListElementProps) {
  return (
    <tr className="hover">
      <td>{ick.ickDescription}</td>
      <td>{ick.gender}</td>
      <td>{ick.ickType}</td>
      <td className=" justify-end flex pr-3 gap-3">
        <EditIckButton />
        <DeleteIckButton />
      </td>
    </tr>
  );
}

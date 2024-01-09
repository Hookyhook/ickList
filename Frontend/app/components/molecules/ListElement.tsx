import { Ick } from '@types';

import { DeleteIckButton, EditIckButton } from '@components';
interface ListElementProps {
  ick: Ick;
  handleDeleteIckButtonClick: (ickId: number) => void;
}

export function ListElement({
  ick,
  handleDeleteIckButtonClick,
}: ListElementProps) {
  return (
    <tr className="hover">
      <td>{ick.ickDescription}</td>
      <td>{ick.gender}</td>
      <td>{ick.ickType}</td>
      <td className=" justify-end flex pr-3 gap-3">
        <EditIckButton />
        <DeleteIckButton
          handleDeleteIckButtonClick={handleDeleteIckButtonClick}
          ickId={ick.id}
        />
      </td>
    </tr>
  );
}

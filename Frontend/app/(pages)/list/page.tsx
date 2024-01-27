'use client';

import { getIcks, deleteIck } from '@lib';
import { Ick } from '@types';
import { useEffect, useState } from 'react';

import { ListElement, ListInteractionHeader } from '@components';

export default function Home() {
  const [icks, setIcks] = useState<Ick[]>([]);

  useEffect(() => {
    getIcks().then((icks) => setIcks(icks));
  }, [setIcks]);

  const handleDeleteIckButtonClick = (ickId: number) => {
    deleteIck(ickId).then(() => {
      getIcks().then((icks) => setIcks(icks));
    });
  };
  return (
    <div className="overflow-x-auto w-auto">
      <table className="table">
        <thead>
          <ListInteractionHeader></ListInteractionHeader>
          <tr>
            <th className="w-5/12">Ick Description</th>
            <th className="w-1/12">Gender</th>
            <th className="">Icktype</th>
          </tr>
        </thead>
        <tbody>
          {icks.map((ick, index) => {
            return (
              <ListElement
                ick={ick}
                key={index}
                handleDeleteIckButtonClick={handleDeleteIckButtonClick}
              ></ListElement>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

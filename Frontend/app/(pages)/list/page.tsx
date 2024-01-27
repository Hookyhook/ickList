'use client';

import { getIcks, deleteIck } from '@lib';
import { Ick } from '@types';
import { useEffect, useState } from 'react';

import { ListElement, ListInteractionHeader } from '@components';

import Fuse from 'fuse.js';

export default function Home() {
  const [icks, setIcks] = useState<Ick[]>([]);
  const [originalIcks, setOriginalIcks] = useState<Ick[]>([]);

  useEffect(() => {
    getIcks().then((icks) => {
      setIcks(icks);
      setOriginalIcks(icks);
    });
  }, [setIcks]);

  const handleDeleteIckButtonClick = (ickId: number) => {
    deleteIck(ickId).then(() => {
      getIcks().then((icks) => setIcks(icks));
    });
  };

  const handleSearchInput = (searchText: string) => {
    const emptySearch = searchText.length === 0;
    if (emptySearch) {
      setIcks(originalIcks);
      return;
    }
    const fuse = new Fuse(originalIcks, {
      keys: ['ickDescription'],
    });
    const searchResult = fuse.search(searchText);

    const searchedIcks: Ick[] = searchResult.map(
      (fuseResult) => fuseResult.item
    );

    setIcks(searchedIcks);
  };

  const handleIckTypeSelect = (selectedValue: string) => {
    setIcks(
      originalIcks.filter(
        (ick: Ick) => ick.ickType.toString() === selectedValue
      )
    );
  };

  const handleGenderSelect = (selectedValue: string) => {
    setIcks(
      originalIcks.filter((ick: Ick) => ick.gender.toString() === selectedValue)
    );
  };
  return (
    <div className="overflow-x-auto w-auto">
      <table className="table">
        <thead>
          <ListInteractionHeader
            handleGenderInput={handleGenderSelect}
            handleIckTypeInput={handleIckTypeSelect}
            handleSearchInput={handleSearchInput}
          ></ListInteractionHeader>
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

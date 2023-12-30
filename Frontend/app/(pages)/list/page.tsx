'use client';

import { getIcks } from '@lib';
import { Ick } from '@types';
import { useEffect, useState } from 'react';

export default function Home() {
  const [icks, setIcks] = useState<Ick[]>([]);

  useEffect(() => {
    getIcks().then((icks) => setIcks(icks));
  }, [setIcks]);
  return (
    <div className="overflow-x-auto w-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Ick Description</th>
            <th>Gender</th>
            <th>Icktype</th>
          </tr>
        </thead>
        <tbody>
          {icks.map((ick, index) => {
            return (
              <tr className="hover" key={index}>
                <td>{ick.ickDescription}</td>
                <td>{ick.gender}</td>
                <td>{ick.ickType}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

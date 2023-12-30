'use client';

import { StatDisplay } from '@components';

import { openModal, getStat } from '@lib';
import { Stat } from '@types';
import { useEffect, useState } from 'react';

export default function Home() {
  const [stat, setStat] = useState<Stat>();

  useEffect(() => {
    getStat().then((stat: Stat) => {
      setStat(stat);
    });
  }, [setStat]);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md flex flex-col gap-6">
            <h1 className="text-5xl font-bold">Ick List</h1>
            {stat && (
              <StatDisplay
                title="Total number of icks"
                number={stat!.ickCount}
                development={`Last month the number of icks developed by ${stat.ickMonthlyChangePercents}%`}
              ></StatDisplay>
            )}
            <button className="btn btn-primary" onClick={openModal}>
              New Ick
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

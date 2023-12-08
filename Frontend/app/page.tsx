'use client';

import { IckModal } from '@components';
import { Stat } from '@components';

import { openModal } from '@lib';

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md flex flex-col gap-6">
            <h1 className="text-5xl font-bold">Ick List</h1>
            <Stat
              title="Total number of icks"
              number={1000}
              development="More than 100 icks uploaded +24%"
            ></Stat>
            <button className="btn btn-primary" onClick={openModal}>
              New Ick
            </button>
          </div>
        </div>
      </div>
      <IckModal></IckModal>
    </>
  );
}

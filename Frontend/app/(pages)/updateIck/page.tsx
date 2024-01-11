'use client';

import { updateIck, getIck } from '@lib';
import { useRouter, useSearchParams } from 'next/navigation';
import { Ick } from '@types';
import { useEffect, useState } from 'react';

export default function UpdateIck() {
  const router = useRouter();

  const ickId = useSearchParams().get('ickId');

  const [Ick, setIck] = useState<Ick>();

  useEffect(() => {
    if (!ickId) {
      router.back();
      return;
    }
    getIck(ickId).then((ick) => {
      setIck(ick);
    });
  }, []);

  function submitIck(): void {
    const { ickDescription, ickGender, ickType } = getModalElements();
    const valuesNotComplete =
      ickDescription.value === '' ||
      ickGender.value === '' ||
      ickType.value === '';

    console.log(ickDescription.value, ickGender.value, ickType.value);

    if (valuesNotComplete) {
      return;
    }

    const ick: any = {
      id: parseInt(ickId!),
      ickDescription: ickDescription.value,
      gender: ickGender.value,
      ickType: ickType.value,
    };

    updateIck(ick).then(() => {
      redirectToPriorPage();
    });

    function redirectToPriorPage() {
      router.back();
    }

    function getModalElements() {
      const ickDescription = document.querySelector(
        '.textarea'
      ) as HTMLTextAreaElement;
      const ickGender = document.querySelector(
        '.select:nth-of-type(1)'
      ) as HTMLSelectElement;
      const ickType = document.querySelector(
        '.select:nth-of-type(2)'
      ) as HTMLSelectElement;

      return { ickDescription, ickGender, ickType };
    }
  }
  if (!Ick)
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-lg mx-auto"></span>
      </div>
    );
  return (
    <div className="flex justify-center items-center">
      <div className="w-full mx-auto p-6 shadow-lg rounded-lg bg-transparent">
        <h3 className="font-bold text-3xl mb-5 text-center text-primary">
          Update Ick
        </h3>
        <div className="flex flex-col gap-7">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Describe your ick</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              defaultValue={Ick!.ickDescription}
            ></textarea>
          </label>
          <div className="flex flex-row gap-7 flex-wrap">
            <select
              className="select select-bordered min-w-[200px] flex-grow"
              defaultValue={String(Ick!.gender)}
            >
              <option>MALE</option>
              <option>FEMALE</option>
              <option>GENERAL</option>
            </select>
            <select
              className="select select-bordered min-w-[200px] flex-grow"
              defaultValue={String(Ick!.ickType)}
            >
              <option>ICK</option>
              <option>REVERSEICK</option>
            </select>
          </div>

          <button className="btn btn-primary" onClick={submitIck}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

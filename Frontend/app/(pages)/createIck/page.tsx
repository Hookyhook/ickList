'use client';

import { createIck } from '@lib';
import { useRouter } from 'next/navigation';

export default function CreateIck() {
  const router = useRouter();

  function submitIck(): void {
    const { ickDescription, ickGender, ickType } = getModalElements();
    const valuesNotComplete =
      ickDescription.value === '' ||
      ickGender.value === '' ||
      ickType.value === '';

    if (valuesNotComplete) {
      return;
    }

    const ick: any = {
      id: 0,
      ickDescription: ickDescription.value,
      gender: ickGender.value,
      ickType: ickType.value,
    };

    createIck(ick).then(() => {
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

  return (
    <>
      <h3 className="font-bold text-xl mb-5">New Ick</h3>
      <div className="flex flex-col gap-7">
        <label className="form-control">
          <div className="label">
            <span className="label-text">Describe your ick</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Ick Description"
          ></textarea>
        </label>
        <select
          className="select select-bordered w-full max-w-xs"
          defaultValue={'Which gender has this ick?'}
        >
          <option>MALE</option>
          <option>FEMALE</option>
          <option>GENERAL</option>
        </select>
        <select
          className="select select-bordered w-full max-w-xs"
          defaultValue={'What kind of ick is it?'}
        >
          <option>ICK</option>
          <option>REVERSEICK</option>
        </select>
        <button className="btn btn-primary" onClick={submitIck}>
          Submit
        </button>
      </div>
    </>
  );
}

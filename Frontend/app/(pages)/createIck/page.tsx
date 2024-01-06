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
    <div className="flex justify-center items-center">
      <div className="w-full mx-auto p-6 shadow-lg rounded-lg bg-transparent">
        <h3 className="font-bold text-3xl mb-5 text-center text-primary">
          New Ick
        </h3>
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
          <div className="flex flex-row gap-7 flex-wrap">
            <select
              className="select select-bordered min-w-[200px] flex-grow"
              defaultValue={'Which gender has this ick?'}
            >
              <option>MALE</option>
              <option>FEMALE</option>
              <option>GENERAL</option>
            </select>
            <select
              className="select select-bordered min-w-[200px] flex-grow"
              defaultValue={'What kind of ick is it?'}
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

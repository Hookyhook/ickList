import { createIck } from '@lib';
import { Gender, Ick, IckType } from '@types';

export function openModal(): void {
  const modal: any = document.getElementById('ickModal');

  if (modal) {
    modal.showModal();
  }
}

export function submitModal(): void {
  const { ickDescription, ickGender, ickType } = getModalElements();
  const valuesNotComplete =
    ickDescription.value === '' ||
    ickGender.value === '' ||
    ickType.value === '';

  if (valuesNotComplete) {
    return;
  }

  const genderValue = ickGender.value as Gender;
  const ickTypeValue = ickType.value as IckType;
  const ick: Ick = {
    id: 0,
    ickDescription: ickDescription.value,
    gender: genderValue,
    ickType: ickTypeValue,
  };

  console.log(ick);
  createIck(ick);

  function getModalElements() {
    const ickDescription = document.querySelector(
      '#ickModal .textarea'
    ) as HTMLTextAreaElement;
    const ickGender = document.querySelector(
      '#ickModal .select:nth-of-type(1)'
    ) as HTMLSelectElement;
    const ickType = document.querySelector(
      '#ickModal .select:nth-of-type(2)'
    ) as HTMLSelectElement;

    return { ickDescription, ickGender, ickType };
  }
}

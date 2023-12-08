import { Gender } from '@types';
import { IckType } from '@types';

export interface Ick {
  id: number;
  ickDescription: string;
  gender: Gender;
  ickType: IckType;
}

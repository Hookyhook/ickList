import { Gender } from '.';
import { IckType } from '.';

export interface Ick {
  id: number;
  ickDescription: string;
  gender: Gender;
  ickType: IckType;
}

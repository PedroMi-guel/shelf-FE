import { User } from './user';
import { Element } from './element';

export interface Record {
  id: number;
  state:number;
  User_id:number;
  Element_id: number;
  requested_time: string;
  request_time: string;
  end_time: string;

}

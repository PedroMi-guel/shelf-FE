import { User } from './user';
import { Element } from './element';

export interface Record {
  id: number;
  state:number;
  UserId:number;
  ElementId: number;
  requested_time: number;
  request_time: number;
  end_time: number;

}

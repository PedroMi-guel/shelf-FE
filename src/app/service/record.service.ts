import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Record } from './../interfaces/record';


@Injectable({
  providedIn: 'root'
})
export class RecordService {


  constructor(private http:HttpClient) { }

  getElemntss() {
    return this.http.get<Record[]>('http://localhost:3000/api/records');
  }

  getRecord(id: number) {
    return this.http.get<Record>(`http://localhost:3000/api/records/${id}`);
  }
  
  getRecordbyUser(id:number){
    return this.http.get<Record>(`http://localhost:3000/api/records/getByUser/${id}`);
  }
  createElemnt(record: Record) {
    return this.http.post<Record>('http://localhost:3000/api/records', record);
  }

  updateRecord(record: Record) {
    return this.http.put<Record>(`http://localhost:3000/api/records/${record.id}`, record);
  }

  deleteElemnt(id: number) {
    return this.http.delete(`http://localhost:3000/api/records/${id}`);
  }

}

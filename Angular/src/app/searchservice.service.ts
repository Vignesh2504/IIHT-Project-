import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Search } from './search';

@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {

  private usersUrl:string;
  private users1Url:string;

  

  constructor(private http: HttpClient) {
    this.usersUrl="http://localhost:8761/api/authenticate/mentor/mentor-list";
    this.users1Url="http://localhost:8761/api/authenticate/mentor/delete/";
   }

   public findAll(): Observable<Search[]>{

    return this.http.get<Search[]>(this.usersUrl);
   }
   deleteMentor(mentorId: number): Observable<any>{
    console.log(mentorId);
    return this.http.delete(`${this.users1Url}` + mentorId, {responseType:'text'});
  }

}

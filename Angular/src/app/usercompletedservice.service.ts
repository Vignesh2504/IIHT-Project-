import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usercompleted } from './usercompleted';

@Injectable({
  providedIn: 'root'
})
export class UsercompletedserviceService {

  private usersUrl:string;

  constructor(private http: HttpClient) {
    this.usersUrl="http://localhost:8761/api/authenticate/mentor/mentor-list";
   }

   public findAll(): Observable<Usercompleted[]>{

    return this.http.get<Usercompleted[]>(this.usersUrl);
   }

   
}

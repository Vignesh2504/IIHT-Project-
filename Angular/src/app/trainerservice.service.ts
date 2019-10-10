import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from './trainer';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TrainerserviceService {
  private baseUrl= "http://localhost:8761/api/authenticate/mentor/signup"
  private baseUrl1= "http://localhost:8761/api/authenticate/mentor/details/"
  private baseUrl2= "http://localhost:8761/api/authenticate/user/details/"

  constructor(private http:HttpClient) { }
 
  createTrainer(Trainer:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,Trainer);
  }
  getMentorDetails(mentorName:String):Observable<Trainer>{
    console.log(mentorName);
    return this.http.get<Trainer>(`${this.baseUrl1}` +mentorName);
  }
  getUserDetails(userName:String):Observable<User>{
    console.log(userName);
    return this.http.get<User>(`${this.baseUrl2}` +userName);
  }
}

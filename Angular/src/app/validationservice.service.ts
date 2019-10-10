import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from './trainer';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidationserviceService {
  public baseUrl = 'http://localhost:8761';

  constructor( private http:HttpClient) { }
  
  createUser(user:object):Observable<object>{
    console.log(user);
    return this.http.post(`${this.baseUrl}` + '/user/user/signup',user);
  }
  createMentor(mentor:object):Observable<object>{
    console.log(mentor);
    return this.http.post(`${this.baseUrl}` + '/mentor/mentor/signup',mentor);
  }
  getMentorDetails(mentorName:String):Observable<Trainer>{
    console.log(mentorName);
    return this.http.get<Trainer>(`${this.baseUrl}` + '/mentor/getMentor/'+mentorName);
  }
  getUserDetails(userName:String):Observable<User>{
    console.log(userName);
    return this.http.get<User>(`${this.baseUrl}` + '/user/getUser/'+userName);
  }
  getUserDetailsx(){
    return this.http.get('/assets/userCredentials.json');
  }
}
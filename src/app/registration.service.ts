import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

     _url ='http://localhost:3000/register';
  constructor(private _http:HttpClient) { }
  register(userData:any){
   return  this._http.post<any>(this._url,userData);
    }
    getAllUser(){
      return this._http.get<any>(this._url,);
    }
}
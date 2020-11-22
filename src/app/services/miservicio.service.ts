import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Global} from './../../Globals';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {

  constructor(private _http: HttpClient) {

  }

  getUsuarios():Observable<any>{
    var request ="api/users?page=2";
    var url = Global.urlApi + request;
    return this._http.get(url);
  }
  getUsuario(id : number) :Observable<any>{
    var request ="api/users/" + id;
    var url = Global.urlApi  + request;
    return this._http.get(url);
  }
  deleteUsuario(id : number):Observable<any>{
    var request = "api/users/" + id ;
    var url = Global.urlApi + request
    return this._http.delete(url);
  }
  
  createUsuario(nuevoUsuario :any):Observable<any>{
    var request = "api/users" 
    var url = Global.urlApi + request;
    let objetoJson = JSON.stringify(nuevoUsuario);
    var header = new HttpHeaders().set("Content-type","application/json");
    return this._http.post(url ,objetoJson ,{headers : header})
  }
  updateUsuario(usuarioActualizado : any , id: number): Observable<any>{
    var request = "api/users/" + id ;
    var url = Global.urlApi + request;
    let objetoJson = JSON.stringify(usuarioActualizado);
    var header = new HttpHeaders().set("Content-type","application/json");
    return this._http.put(url , objetoJson , {headers : header});
  }
 

 
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

public urlApi ='https://greve-gerard-60497.herokuapp.com/api/usuarios'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('https://greve-gerard-60497.herokuapp.com/api/usuarios')
  }

  createUsers(user:{name:string,lastname:string,email:string}):Observable<any> {
    console.log('hola',user)
    return this.http.post('https://greve-gerard-60497.herokuapp.com/api/usuarios',user)
  }

  editUsers(user:{id:number, name: string, lastname: string, email: string}):Observable<any> {
    return this.http.put('https://greve-gerard-60497.herokuapp.com/api/usuarios/'+user.id,user)
  }

  deteleUsers(id:string):Observable<any> {
    this.urlApi = `${this.urlApi}/${id}`;
    return this.http.delete(this.urlApi);
  }


}

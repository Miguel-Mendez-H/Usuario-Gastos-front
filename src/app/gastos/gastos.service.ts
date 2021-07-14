import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class GastosService {

public urlApi ='http://api.test/api/gastos'

  constructor(private http: HttpClient) { }

  getGastos(): Observable<any> {
    return this.http.get('http://api.test/api/gastos')
  }

  createGastos(user:{descripcion:any,monto:number,id_usuario:any}):Observable<any> {
    console.log('hola',user)
    return this.http.post('http://api.test/api/gastos',user)
  }

  editGastos(user:{id:number, descripcion:any,monto:number,id_usuario:any}):Observable<any> {
    return this.http.put('http://api.test/api/gastos/'+user.id,user)
  }

  deteleGastos(id:string):Observable<any> {
    this.urlApi = `${this.urlApi}/${id}`;
    return this.http.delete(this.urlApi);
  }


}

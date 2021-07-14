import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class GastosService {

public urlApi ='https://greve-gerard-60497.herokuapp.com/api/gastos'

  constructor(private http: HttpClient) { }

  getGastos(): Observable<any> {
    return this.http.get('https://greve-gerard-60497.herokuapp.com/api/gastos')
  }

  createGastos(user:{descripcion:any,monto:number,id_usuario:any}):Observable<any> {
    return this.http.post('https://greve-gerard-60497.herokuapp.com/api/gastos',user)
  }

  editGastos(user:{id:number, descripcion:any,monto:number,id_usuario:any}):Observable<any> {
    return this.http.put('https://greve-gerard-60497.herokuapp.com/api/gastos/'+user.id,user)
  }

  deteleGastos(id:string):Observable<any> {
    this.urlApi = `${this.urlApi}/${id}`;
    return this.http.delete(this.urlApi);
  }


}

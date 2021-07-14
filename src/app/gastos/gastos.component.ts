import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { UsuariosService } from '../Usuarios/usuarios.service';
import { GastosService } from './gastos.service';



@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})



export class gastosComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  gastos: any;
  gastosArray: any[] = [];
  displayedColumns: string[] = ['id', 'descripcion', 'monto', 'id_usuario', 'actions'];
  element: any;
  users: any;


  constructor(public appService: GastosService, public appUserServices: UsuariosService) { }

  ngOnInit() {

    this.appUserServices.getUsers().subscribe(data => this.users = data)
    this.listarGastos()
  }

  listarGastos() {
    this.appService.getGastos().subscribe(data => {
      this.gastosArray = data
    })
  }

  crearGastos(user:{descripcion:any, monto:number, id_usuario:any}) {
    this.appService.createGastos(user).subscribe(data => data)

  }

  editarGastos(user:{id:any, descripcion:any, monto:number, id_usuario:any}) {
    this.appService.editGastos(user).subscribe(data=>{
      this.gastosArray[this.gastosArray.findIndex(u => u.id === user.id)]=user
      this.table.renderRows()
    })

  }

  eliminarGastos(id: string) {
    const userDeleted = { id }
    this.appService.deteleGastos(userDeleted.id).subscribe();
  }

}


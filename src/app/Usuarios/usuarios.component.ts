import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { UsuariosService } from './usuarios.service';



@Component({
  selector: 'app-Usuarios',
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.css']
})



export class usuariosComponent implements OnInit {
  @ViewChild(MatTable) table?: MatTable<any>;
  usuarios: any;
  usuariosArray: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'lastname', 'email', 'actions'];
  element: any;


  constructor(public appService: UsuariosService) { }

  ngOnInit() {
    this.listarUsuarios()
  }

  listarUsuarios() {
    this.appService.getUsers().subscribe(data => {
      this.usuariosArray = data
      console.log(data)
    })
  }

  crearUsuario(user:{name: string, lastname: string, email: string}) {
    this.appService.createUsers(user).subscribe(data => data)

  }

  editarUsuario(user:{id:number, name: string, lastname: string, email: string}) {
    this.appService.editUsers(user).subscribe(data=>{
      this.usuariosArray[this.usuariosArray.findIndex(u => u.id == user.id)]=user
      this.table?.renderRows()
    })

  }

  eliminarUsuario(id: string) {
    let userDeleted = { id: id }
    this.appService.deteleUsers(userDeleted.id).subscribe();
  }

}

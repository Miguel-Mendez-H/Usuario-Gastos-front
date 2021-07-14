import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modalgastos',
  templateUrl: './modalgastos.component.html',
  styleUrls: ['./modal.component.css'],
})

export class ModalGastoComponent implements OnInit {
  static createUser() {
    throw new Error('Method not implemented.');
  }

  @Input() user:{id?:number, descripcion:string,monto:number,id_usuario:any} = {descripcion:'', monto:0,id_usuario:''}
  @Input() tittle:string=''
  @Input() users:any[]=[]

  @Output() createGastos : EventEmitter<any> = new EventEmitter();
  @Output() editGastos : EventEmitter<any> = new EventEmitter();

  inputId:any;
  inputDescripcion:any;
  inputMonto:any;
  inputIdUsuario:any;

  closeResult: string | undefined;

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {

    this.inputId =this.user.id
    this.inputDescripcion = this.user.descripcion
    this.inputMonto=this.user.monto
    this.inputIdUsuario=this.user.id_usuario
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(this.inputId){
        this.editGastos.emit({id:this.inputId, descripcion:this.inputDescripcion,monto:this.inputMonto,id_usuario:this.inputIdUsuario})
      }else{
        this.createGastos.emit({descripcion:this.inputDescripcion,monto:this.inputMonto,id_usuario:this.inputIdUsuario})
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}






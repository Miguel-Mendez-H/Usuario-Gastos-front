import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})

export class ModalComponent implements OnInit {
  static createUser() {
    throw new Error('Method not implemented.');
  }

  @Input() user:{id?:number, name: string,lastname: string,email:string} = {name:'', lastname:'',email:''}
  @Input() tittle:string=''

  @Output() createUser : EventEmitter<any> = new EventEmitter();
  @Output() editUser : EventEmitter<any> = new EventEmitter();

  inputId:any;
  inputName:any;
  inputLastName:any;
  inputEmail:any;

  closeResult: string | undefined;

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
    this.inputId =this.user.id
    this.inputName = this.user.name
    this.inputLastName=this.user.lastname
    this.inputEmail=this.user.email
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(this.inputId){
        this.editUser.emit({id:this.inputId, name: this.inputName,lastname: this.inputLastName,email: this.inputEmail})
      }else{
        this.createUser.emit({name: this.inputName,lastname: this.inputLastName,email: this.inputEmail})
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






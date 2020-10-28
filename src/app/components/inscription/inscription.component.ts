import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private service:UserService) { }
  InvalidFrom;
  user = {
    email: '',
    password:'',
    nom:'',
    prenom:'',
    direction:''
  };
  ngOnInit(): void {
  }
save(f){
  this.service.add(f)
  .subscribe(data =>{ console.log(data);
   this.succes();
     },
  
  error => {console.log(error);
   this.InvalidFrom=error["error"]["message"]; 

 });
}

succes(): void{
  swal.fire(
    'Inscription!',
    'Votre avez créer un nouveau agence!',
    'success'
  )

}
}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
users;
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(){
   
    return this.service.getAll().subscribe(data=>{  
      this.users= data;
     
    });
  }

  deletePopup(id){
    swal.fire({
      title: 'Vous étes sur?',
      text: "Vous avez supprimer cette utilisateur ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui!'
    }).then((result) => {
      if (result.value) {
        swal.fire(
          'Suppression!',
          'Vous avez supprimer cette utilisateur avec succes.',
          'success'
        ).then(()=>{
          this.delete(id);
        })
      }
    })
  }
  delete(id){
    return this.service.deleteUser(id).subscribe(data=>{
      location.reload();
    })
  }
}

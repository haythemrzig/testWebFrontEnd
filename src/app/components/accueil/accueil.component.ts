import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private http: HttpClient) { }
  selectedFile : File = null;
  ngOnInit(): void {
  }
  

  succes(): void{
    swal.fire(
      'Inscription!',
      'Votre avez ajouter un nouveau fichier!',
      'success'
    )

  }

  onFileSelected(event){
    this.selectedFile = <File> event.target.files[0];
  }
  
  save(){
    const fd = new FormData();
    fd.append('fichier', this.selectedFile, this.selectedFile.name);
   // console.log(fd);
    //console.log(this.selectedFile.name);
    this.http.post('http://localhost:3000/single', fd)
      .subscribe(res => {
        this.succes();
      });
    
  
  }

}

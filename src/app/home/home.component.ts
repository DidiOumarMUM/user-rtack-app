
import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Signup } from './Signup';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public user : any ;
 message : String ;
 public model : Signup = new Signup() ;
 langs : String[] = ['fr' ,'ar' , 'eng'] ;
 @ViewChild('f') form : any  ;
 
  constructor(private service : HomeService ) { }

  ngOnInit() {
    this.getUsers() ;
   
  }
 getUsers(){
     this.service.getUsers().subscribe(
       data => this.user = data.json() , err => this.showErrorPage(err)
     )
 }

 update(u :any){
  this.service.updateUser(u).subscribe(data => console.log(data) , err => console.log(err) );
}

onSubmit()
{
  if (this.form.valid) {
    console.log("Form Submitted!");
    this.form.reset();
  }
}
showErrorPage(err): void {
 this.message="problem with the service please try again " ;
}
}


interface test {
  i : number ;
}
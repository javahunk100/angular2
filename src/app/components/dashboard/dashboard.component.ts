import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  email :String ="nasir@gmail.com";
  password :String ="";
  message :String ="";
  public cdata =[];
  
  constructor() { }

  ngOnInit(){
  }

  
  public validate() : void {
    if("nagen@gmail.com"==this.email && "cool"==this.password) {
      this.message="Hey! you are valid user!!!!!!!!!!!!!";
       //var obj={email:this.email,password:this.password};
    }else{
      this.message="Sorry! your username and password are not valid !!!!!!!!!!!!";
    }
    this.cdata.push({email:this.email,password:this.password});
    console.log(")#)#(@(@(@(@(ahahaa I understand!!!!!!!!!!!!!"); 
  }

  public deleteRecord(item) : void {
    console.log(item);
    this.cdata=this.cdata.filter(temp => temp.email!=item.email);
  }

}

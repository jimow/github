import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  users : any= [];
  constructor(public htpcl: HttpClient) {
    
   }
   sendGetRequest(){
    this.htpcl.get('https://api.github.com/users').subscribe((res)=>{
        console.log(res);

        this.users = res;
       
    });
}


  ngOnInit(): void {
  }

}

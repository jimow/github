import { Component, OnInit } from '@angular/core';
import { GitserveService } from '../gitserve.service';



@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers:[GitserveService]
  
})
export class GithubComponent implements OnInit {


  user: any = [];
	repos: any = [];
	userName:string;

  constructor(private gitserve: GitserveService) {
   
  	this.gitserve.getUser().subscribe(user => {
  		
  		this.user = user;
    });
    
    this.gitserve.getRepos().subscribe(repos => {
  		
  		this.repos = repos;
  	});

  }
  findProfile(){

  	this.gitserve.updateUser(this.userName);

  	this.gitserve.getUser().subscribe(user => {
  		
  		this.user = user;
  	});

  	this.gitserve.getRepos().subscribe(repos => {
  		
  		this.repos = repos;
    });
  }
  
  ngOnInit(): void {
   

    }
    
  }
  



import { Component, OnInit } from '@angular/core';

import { Post, PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'final-project-angular';
  postsContent!: Post[]
  constructor(private http: PostsService){
    
  }
  ngOnInit(){
      this.http.getPosts().subscribe((result)=>{
      this.postsContent = result
    })
   
        
  }
}

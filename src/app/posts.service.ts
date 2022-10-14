import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts'
    return this.http.get<Post[]>('url', {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          Authorization: 'my-auth-token'
        })
      })
    // return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
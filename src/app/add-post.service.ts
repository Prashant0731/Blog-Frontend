import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostPayload} from './add-post/post-payload';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private httpClient: HttpClient) {
  }

  addPost(postPayload: PostPayload){
    return this.httpClient.post('http://13.127.71.50:80/api/posts/', postPayload);

  //  return this.httpClient.post('http://localhost:8080/api/posts/', postPayload);

  // return this.httpClient.post('http://dataoct.com/api/posts/', postPayload);

  }

  getAllPosts(): Observable<Array<PostPayload>>{
    return this.httpClient.get<Array<PostPayload>>("http://13.127.71.50:80/api/posts/all");

    // return this.httpClient.get<Array<PostPayload>>("http://localhost:8080/api/posts/all");

    //  return this.httpClient.get<Array<PostPayload>>("http://dataoct.com/api/posts/all");
  
  }

  getPost(permaLink: Number):Observable<PostPayload>{
    return this.httpClient.get<PostPayload>('http://13.127.71.50:80/api/posts/get/' + permaLink);

    // return this.httpClient.get<PostPayload>('http://localhost:8080/api/posts/get/' + permaLink);

   // return this.httpClient.get<PostPayload>('http://dataoct.com/api/posts/get/' + permaLink);

  }
}


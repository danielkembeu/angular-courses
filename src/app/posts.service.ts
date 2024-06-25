import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PostsService {

  API_URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }

  getAllPosts() {
    return this.httpClient.get(this.API_URL);
  }
}

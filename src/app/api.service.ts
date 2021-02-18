import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class ApiService {
  private readonly url = 'https://jsonplaceholder.typicode.com/posts';

  async fetchPosts(): Promise<any> {
    const results = await fetch(this.url);
    return results.json();
  }


}

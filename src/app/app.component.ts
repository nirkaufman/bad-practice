import {Component} from '@angular/core';
import {memoize} from "lodash-decorators";

@Component({
  selector: 'app-root',
  template: `
      <div style="text-align:center" class="content">
          <h1>Welcome to Bad practices!</h1>
          <ul>
              <li *ngFor="let post of posts" 
                  [ngClass]="getClassFor(post.title)">
                  {{ parseTitle(post.title) }}
              </li>
          </ul>
          <button (click)="addPost()">add posts</button>
      </div>
  `,
})
export class AppComponent {
  title = "AppComponent";
  posts = [
    {title: 'post1'},
    {title: 'post1'},
    {title: 'post1'}
  ];

  @memoize
  parseTitle(title: string) : string {
    console.log('parseTitle executed');
    return title.toUpperCase();
  }

  @memoize
  getClassFor(string) {
    console.log("getClassFor executed");
    return 'class-name'
  }

  addPost() {
    this.posts.push({title: 'post'})
  }
}

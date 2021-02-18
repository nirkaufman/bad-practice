import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { WhenDirective } from './when.directive';
import { MapPipe } from './map.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    WhenDirective,
    MapPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

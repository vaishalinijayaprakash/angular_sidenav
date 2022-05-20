import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mean-demo2-client';
  SubMenuState:boolean = false;
  burgerClicked(event){
this.SubMenuState =event;
console.log("inside burger--------")
  }
}

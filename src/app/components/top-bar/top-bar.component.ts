import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Output() menuState = new EventEmitter();
  opened:boolean;
  showMenu = false;
  constructor() { }

  ngOnInit(): void {
  }
   
  toggleMenu(){
    console.log("inside toggle");
    this.showMenu = ! this.showMenu;
    this.menuState.emit(this.showMenu);
  }
}

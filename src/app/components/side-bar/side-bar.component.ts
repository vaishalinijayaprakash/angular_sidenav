import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { menuList } from './menu-list';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit,OnChanges {
@Input() SubMenuState;
opened:boolean;
ShowMenu = true;
  sideMenu = menuList;
  
  constructor() { }

  ngOnInit(): void {
  }

 toogleMenu(){
   this.ShowMenu= !this.ShowMenu; 
 }  
 ngOnChanges(): void {
   console.log("inside ngOnchanges With SubMenustate ----")

   this.ShowMenu = this.SubMenuState
 }
 
}

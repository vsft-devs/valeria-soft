import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  @Input() props: any;
  @Input() keys: any;
  openSubmenu: boolean = false;
  objKeys = Object.keys;
  ngOnInit(): void {

  }

  showSubMenu(submenu: any) {
    if(!submenu) {
      this.openSubmenu = false;
    } else {
      this.openSubmenu = true;
    }

  }

  hideSubMenu(submenu: any) {
    if(!submenu) {
      this.openSubmenu = false;
    }
    this.openSubmenu = false;
  }

}

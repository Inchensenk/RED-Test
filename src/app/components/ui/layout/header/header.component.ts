import { Component, OnInit } from '@angular/core';
import { IMenuItem } from './header.interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit{

  menuItems: IMenuItem[] = []

  ngOnInit(): void {

  }
}

import { Component, OnInit } from '@angular/core';
import { path } from './../../../core/constants/path.constant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  path = path;
  constructor() {}

  ngOnInit(): void {}
}

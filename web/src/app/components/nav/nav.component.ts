

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenavContainer) sidenavContainer: MatSidenavContainer;

  ngAfterViewInit() {
    this.sidenavContainer.scrollable.elementScrolled().subscribe(() =>  {}/* react to scrolling */);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

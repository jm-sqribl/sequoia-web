import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared-service';
import { NavbarComponent } from '../../a2-components/navbar/navbar.component';

@Component({
  moduleId: module.id,
  selector: 'default-layout',
  templateUrl: 'default.component.html',
  styleUrls: ['default.component.scss'],
  providers: [ SharedService ]
})
export class DefaultLayoutComponent implements OnInit {
  pageTitle: any;
  @Input() openedSidebar: boolean = false;

  constructor( private _sharedService: SharedService ) {
    _sharedService.changeEmitted$.subscribe(
      title => {
        this.pageTitle = title;
      }
    );
  }

  ngOnInit() { }

  sidebarState() {
    this.openedSidebar = !this.openedSidebar;
  }
}
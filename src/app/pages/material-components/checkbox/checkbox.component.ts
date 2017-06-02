import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

@Component({
  moduleId: module.id,
  selector: 'page-checkbox',
  templateUrl: 'checkbox.component.html',
  styleUrls: ['checkbox.component.scss']
})
export class PageCheckboxComponent implements OnInit {
  pageTitle: string = 'Checkbox';

  constructor( private _sharedService: SharedService ) { }

  ngOnInit() {
    this._sharedService.emitChange(this.pageTitle);
  }
}
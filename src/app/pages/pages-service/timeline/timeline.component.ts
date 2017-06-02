import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

@Component({
  selector: 'page-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class PageTimelineComponent implements OnInit {
  pageTitle: string = 'Timeline';

  constructor( private _sharedService: SharedService ) { }

  ngOnInit() {
    this._sharedService.emitChange(this.pageTitle);
  }
}

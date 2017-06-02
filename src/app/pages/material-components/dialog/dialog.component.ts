import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'page-dialog',
  templateUrl: 'dialog.component.html'
})
export class PageDialogComponent implements OnInit {
  pageTitle: string = "Dialog";
  //dialogRef: MdDialogRef<DialogResultComponent>;
  selectedOption: string;

  constructor( public dialog: MdDialog, private _sharedService: SharedService ) { }

  openDialog() {
    this.dialog.open(DialogResultComponent);
  }

  ngOnInit() {
    this._sharedService.emitChange(this.pageTitle);
  }
}

@Component({
  selector: 'dialog-result',
  templateUrl: 'dialog-result.html',
})
export class DialogResultComponent {
  jazzMessage = 'Jazzy jazz jazz';
  constructor(public dialogRef: MdDialogRef<DialogResultComponent>) {}
}
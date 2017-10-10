import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { User } from 'app/models/user';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent implements OnInit {

  usuario:User = new User()

  constructor(	public dialogRef: MdDialogRef<ModalUserComponent>,
		@Optional() @Inject(MD_DIALOG_DATA) public data: User
	) { }

  ngOnInit() {
    if (this.data) 
    this.usuario = this.data;
  }

}

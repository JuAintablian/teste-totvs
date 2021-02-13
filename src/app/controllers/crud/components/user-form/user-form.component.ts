import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() userForm: FormGroup;
  @Input() inputMask: FormGroup;
  @Input() optionsOrganDonor: Array<object>;
  @Output() mask = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onVerifyMaskKeyup(event) {
    this.mask.emit(event);
  }
}

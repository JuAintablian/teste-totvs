import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() formFilter: FormGroup;
  @Input() optionsCategory: Array<any>;
  @Input() optionsPeriod: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.less']
})
export class CompanyInfoComponent implements OnInit {
  @Input() companyName: string;
  @Input() companyAddress: string;
  @Input() companyTel: string;
  @Input() companyWebsite: string;

  @Output() companyLabelClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onCompanyLabelClick() {
    this.companyLabelClick.emit(42);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.less']
})
export class CompanyInfoComponent implements OnInit {
  @Input('name') companyName : string;

  @Input('address') companyAddress : string;

  @Input('tel') companyTel : string;

  @Input('web-site') companyWebsite : string;

  @Output() companyLabelClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onCompanyLabelClick() {
    this.companyLabelClick.emit(42);
  }
}

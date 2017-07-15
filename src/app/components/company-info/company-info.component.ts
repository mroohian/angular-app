import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  @Input('name') companyName : string;

  @Input('address') companyAddress : string;

  @Input('tel') companyTel : string;

  @Input('web-site') companyWebsite : string;

  constructor() { }

  ngOnInit() {
  }

}

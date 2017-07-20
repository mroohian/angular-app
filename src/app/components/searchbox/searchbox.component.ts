import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  active = false;
  searchTerm: string;
  searchTermsSubject = new Subject<string>();
  results: string[] = [];

  constructor() {
    this.searchTermsSubject
      .debounceTime(500)
      .switchMap((v) => {
        const s = new Subject<string[]>();

        if (!!v) {
          setTimeout(() => {
            s.next([
              'Search result A',
              'Search result B',
              'Search result C',
              'Search result D'
            ]);
            s.complete();
          }, 400);
        } else {
          setTimeout(() => {
            s.next([]);
          }, 0)
        }

        return s;
      }).subscribe((v) => {
        this.results = v;
      });
  }

  ngOnInit() {
  }

  search() {
    this.searchTermsSubject.next(this.searchTerm);
  }
}

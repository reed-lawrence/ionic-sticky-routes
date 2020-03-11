import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.page.html',
  styleUrls: ['./test-modal.page.scss'],
})
export class TestModalPage implements OnInit {

  constructor() { }

  stateAbbrevs: string[] = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA',
    'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA',
    'WA', 'WV', 'WI', 'WY'];

  ngOnInit() {
  }

}

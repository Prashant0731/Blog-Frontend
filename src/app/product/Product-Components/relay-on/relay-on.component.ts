import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
  styleUrls: ['./relay-on.component.css']
})
export class RelayOnComponent implements OnInit {

  relayOn = [
    {
      icon: 'sl-icon-target text-info-gradiant',
      field: 'Retargeting Market',
      fieldText: '-'
    },
    {
      icon: 'sl-icon-mouse text-info-gradiant',
      field: 'Fruitful Results',
      fieldText: '-'
    },
    {
      icon: 'sl-icon-earphones-alt text-info-gradiant',
      field: 'Instant Solutions',
      fieldText: '-'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

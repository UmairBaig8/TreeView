import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss'],
})
export class TreeviewComponent implements OnInit {
  treeData: {
    id: string;
    type: string;
    name: string;
    childs: { id: string; type: string; name: string }[];
  }[];

  constructor() {
    this.treeData = [
      {
        id: 'ultimatix',
        type: 'OU',
        name: 'Ultimatix',
        childs: [
          {
            id: 'compliance',
            type: 'BU',
            name: 'Compliance',
          },
        ],
      },
    ];
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

interface ITree {
  id: string;
  type: string;
  name: string;
  childs?: ITree[];
  search?(id: string): ITree;
}

class Tree implements ITree {
  id: string;
  type: string;
  name: string;
  childs?: Tree[];
  search?(id: string): Tree {
    throw new Error('Method not implemented.');
  }
}

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss'],
})
export class TreeviewComponent implements OnInit {
  private stack: any;
  private treeData: Tree;

  constructor() {
    // this.treeData = {
    //   id: 'ultimatix',
    //   type: 'OU',
    //   name: 'Ultimatix',
    //   childs: [
    //     {
    //       id: 'compliance',
    //       type: 'BU',
    //       name: 'Compliance',
    //     },
    //   ],
    // };
    // console.log(typeof this.treeData);
  }

  ngOnInit(): void {}
}

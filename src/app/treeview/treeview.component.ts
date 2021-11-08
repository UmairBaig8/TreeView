import { Component, OnInit } from '@angular/core';

interface ITree {
  id: string;
  type: string;
  name: string;
  childs?: ITree[];
  search?(id: string): ITree;
}

interface IStack extends ITree {
  isParent: boolean;
  isSelected: boolean;
}

class Tree implements ITree {
  id: string;
  type: string;
  name: string;
  childs?: Tree[];
  search?(id: string): Tree {
    if (this.id === id) {
      return this;
    }
    if (this.childs) {
      for (var t of this.childs) {
        return Object.assign(new Tree(), t).search(id);
      }
    }
  }
  constructor() {}
}

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss'],
})
export class TreeviewComponent implements OnInit {
  private treeData: Array<Tree>;

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
            childs: [
              {
                id: 'A0001',
                type: 'AP',
                name: 'A0001',
              },
            ],
          },
        ],
      },
    ];
    var t = new Tree();
    t = Object.assign(new Tree(), this.treeData[0]);
    console.log(t instanceof Tree);
    console.log(t.search('A0001'));
  }

  ngOnInit(): void {}
}

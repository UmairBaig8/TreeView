import { Component, OnInit } from '@angular/core';

interface ITree {
  id: string;
  type: string;
  name: string;
  isParent?: boolean;
  isSelected?: boolean;
  childs?: ITree[];
  search?(id: string): ITree;
}

class Tree implements ITree {
  id: string;
  type: string;
  name: string;
  isParent?: boolean = false;
  isSelected?: boolean = false;
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
}

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss'],
})
export class TreeviewComponent implements OnInit {
  private treeData: Array<Tree> = [];
  public barStack: Array<Array<Tree>> = [];

  constructor() {
    this.treeData = [
      {
        id: 'ultimatix',
        type: 'OU',
        name: 'Ultimatix',
        isParent: true,
        childs: [
          {
            id: 'compliance',
            type: 'BU',
            name: 'Compliance',
            isParent: true,
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
    this.barStack.push(this.treeData);
  }

  public addBar(tmp: Tree[]): void {
    this.barStack.push(tmp);
  }
  public removeBar(): Tree[] {
    return this.barStack.pop();
  }

  ngOnInit(): void {}
}

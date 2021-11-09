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

interface IStackBar {
  level: number;
  nodes: Tree[];
  isActive: boolean;
}

class StackBar implements IStackBar {
  level: number;
  nodes: Tree[];
  isActive: boolean;

  constructor(l: number, n: Tree[], a: boolean) {
    this.level = l;
    this.nodes = n;
    this.isActive = a;
  }
}

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss'],
})
export class TreeviewComponent implements OnInit {
  private treeData: Array<Tree> = [];
  private stackLevel: number = 0;
  public barStack: Array<StackBar> = [];

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
          {
            id: 'finance',
            type: 'BU',
            name: 'Finance',
            isParent: true,
            childs: [
              {
                id: 'A0002',
                type: 'AP',
                name: 'A0002',
              },
              {
                id: 'A0003',
                type: 'AP',
                name: 'A0003',
              },
              {
                id: 'A0004',
                type: 'AP',
                name: 'A0004',
              },
            ],
          },
          {
            id: 'prime',
            type: 'BU',
            name: 'Prime',
            isParent: true,
            childs: [
              {
                id: 'A0005',
                type: 'AP',
                name: 'A0005',
              },
            ],
          },
        ],
      },
      {
        id: 'fresco',
        type: 'OU',
        name: 'Fresco',
        isParent: false,
      },
    ];
    this.barStack.push(new StackBar(this.stackLevel++, this.treeData, true));
    console.log(typeof this.barStack[0]);
  }

  public addBar(bar: Tree): void {
    console.log(bar);
    if (bar.childs)
      this.barStack.push(new StackBar(this.stackLevel++, bar.childs, true));
    console.log(this.barStack);
    console.log(this.barStack[this.barStack.length - 1]);
  }
  public removeNBars(n: number): void {
    for (let step = 0; step < n; step++) {
      this.barStack.pop();
    }
  }

  ngOnInit(): void {}
}

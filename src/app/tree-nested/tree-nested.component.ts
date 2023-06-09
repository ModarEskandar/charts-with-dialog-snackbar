import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-tree-nested',
  templateUrl: './tree-nested.component.html',
  styleUrls: ['./tree-nested.component.css'],
})
export class TreeNestedComponent {
  @Input() treeControl!: NestedTreeControl<any>;
  @Input() dataSource!: MatTreeNestedDataSource<any>;
  @Input() filterText!: string;

  constructor() {}

  hasChild = (_: number, node: any) =>
    !!node.children && node.children.length > 0;
}

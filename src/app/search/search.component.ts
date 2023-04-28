import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { INVESTIGATIONS_ARR } from '../data/investigations.data';
import { FormControl } from '@angular/forms';

export type TTree<T> = {
  children?: TTree<T>[];
  searchText: string;
} & T;

/**
 * flat list to tree
 *
 * @param list - a flat list
 * @param params - `{ id, parentId }`: id name and parentId name
 * @example `arrayToTree<IInvestigation>(investArr, { investId: 'investId', parentId: 'investParentId' });`
 * @returns `TTree`
 */
export const arrayToTree = <T>(
  list: T[],
  { id, parentId, name }: { id: string; parentId: string; name: string }
): TTree<T>[] | [] => {
  /** map between id and array position */
  const map: number[] = [];
  const treeList: TTree<T>[] = list as TTree<T>[];

  for (let i = 0; i < treeList.length; i += 1) {
    /** initialize the map */
    map[(treeList[i] as TTree<T> & { [investId: string]: number })[id]] = i;
    /** initialize the children */
    treeList[i].children = [];
  }

  let node: TTree<T> & { [parentId: string]: number };
  /** return value */
  const roots: TTree<T>[] = [];

  for (const item of treeList) {
    node = item as TTree<T> & { [parentId: string]: number };
    // console.log(node);
    if (node[parentId]) {
      if (treeList[map[node[parentId]]] !== undefined) {
        treeList[map[node[parentId]]].children?.push(node);
        // treeList[map[node[parentId]]].searchText = treeList[map[node[parentId]]]
        //   .searchText
        //   ? '' + node[name]
        //   : treeList[map[node[parentId]]].searchText + node[name];
      }
    } else {
      // node.searchText = node.searchText + node[name];
      roots.push(node);
    }
  }
  console.log(roots);
  return roots;
};

export interface IInvestigation {
  investId: number;
  investParentId?: number | undefined;
  name: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  //filterText: string = '';
  searchControl = new FormControl<string | IInvestigation>('');
  investArr = INVESTIGATIONS_ARR;
  displayFn(option: IInvestigation): string {
    return option && option.name ? option.name : '';
  }
  arrToTreeRes = {};
  searchList: any[] = [];
  result: any[] = [];
  allItems = '';
  treeControl = new NestedTreeControl<any>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  filterText = '';
  ngOnInit(): void {
    this.arrToTreeRes = arrayToTree<IInvestigation>(this.investArr, {
      id: 'investId',
      parentId: 'investParentId',
      name: 'name',
    });
    this.dataSource.data = Object.values(this.arrToTreeRes);

    this.searchList = Object.values(this.arrToTreeRes).map((item: any) => {
      this.allItems = '';
      return this.buildSearchText(item, '', item.name);
    });
  }
  buildSearchText(list: any, parentName: string, allItems: string) {
    if (list.children.length > 0) {
      for (let child of list.children) {
        child.parents = parentName ? parentName + '@' + list.name : list.name;
        this.allItems = this.allItems + '@' + child.name;
        list.parents = list.parents + '@' + child.name;
        // child.searchText = child.searchText + list.name;
        this.buildSearchText(child, child.parents, allItems);
      }
      list.searchText = list.name + '@' + list.parents;
    } else {
      {
        list.searchText = list.name + '@' + list.parents;
        allItems = allItems + list.name;
      }
    }
    if (!list.investParentId) list.searchText = list.name + '@' + this.allItems;
    return list;
  }
  changeSearchText(newSearchText: string) {
    this.filterText = newSearchText;
  }
}

import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { INVESTIGATIONS_ARR } from '../data/investigations.data';

interface Option {
  name: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() open!: boolean;
  // @Input() filteredList!: any[];
  filterText: string = '';
  searchControl = new FormControl<string | Option>('');
  investArr = INVESTIGATIONS_ARR;
  displayFn(option: Option): string {
    return option && option.name ? option.name : '';
  }
  // searchList = [...this.filteredList];

  // selecteItemsFilter: string = 'All';
  // onSelecteItemsFilterChanged(data: string) {
  //   console.log('this.searchList', this.searchList);
  //   this.selecteItemsFilter = data;
  //   if (data === 'All') this.filteredList = [...this.searchList];
  //   else
  //     this.filteredList = this.searchList.filter((item) => item.name === data);
  // }
}

import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, merge, startWith, tap } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';

export interface Option {
  name: string;
}

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css'],
})
export class AutoCompleteComponent {
  @Output() searchTextChangedEvent = new EventEmitter<string>();

  searchControl = new FormControl<string | Option>('');
  @Input() options!: any[];
  filteredOptions!: Observable<Option[]>;
  @Input() displayFn!: (value: any) => string;
  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        this.searchTextChangedEvent.emit(name);

        return name ? this._filter(name as string) : this.options.slice();
      })
    );
  }

  private _filter(name: string): Option[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }
}

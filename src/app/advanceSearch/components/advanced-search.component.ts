import {Component, EventEmitter, Input, Output} from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { filterAppliedTypes, FilterInterface, filterKeys, filterSupport, filterTypes } from '../filter.interface';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AdvancedSearchService } from 'src/app/core/services/advance-search/advance-search.service';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent {

  @Input() filters: FilterInterface[] = [];
  @Output() applyFilters = new EventEmitter<FilterInterface[]>();
  normalFilters: FilterInterface[] = [
    { 
      key: filterKeys.title, 
      type: filterTypes.title,
      support: filterSupport.normal,
      label: 'title',
     }
  ];
  filterNormalValue: string = '';
  filterNormalSeleted: FilterInterface = { 
    key: filterKeys.title, 
    type: filterTypes.title,
    support: filterSupport.normal,
    label: 'title',
   };
   
  constructor(
    public router: Router,
    private advancedSearchService: AdvancedSearchService,
  ) {}

  ngOnInit() {
    this.setNormalFilters();
    const searchBox = document.getElementById('search-box') as HTMLInputElement;
    const typeahead = fromEvent(searchBox, 'input').pipe(
      map(e => (e.target as HTMLInputElement).value),
      filter(text => text.length > 2),
      debounceTime(800),
      distinctUntilChanged(),
      switchMap(async searchTerm => {
        /** here we change text query text */
        if(this.advancedSearchService.getSearchText() !== searchTerm){
          this.advancedSearchService.setSearchText(searchTerm);
        }
      })
    );
    typeahead.subscribe(data => {
     // Handle the data from the API
    });
  }

  setNormalFilters(): void {
    this.filterNormalSeleted = this.normalFilters[0];
  }
  
  ApplyNormalFilters(): void {
    if (this.filterNormalSeleted) {
      const selectedFilter = { ...this.filterNormalSeleted };
      selectedFilter.value = this.filterNormalValue.trim();
      selectedFilter.filterType = filterAppliedTypes.normal;
      if (!selectedFilter.value) {
        selectedFilter.value = '';
      }
      const outputFilters: FilterInterface[] = [];
      if(selectedFilter.value){
        outputFilters.push(selectedFilter);
      }

      delete selectedFilter['label'];
      delete selectedFilter['support'];
      delete selectedFilter['isAutoComplete'];
      delete selectedFilter['table'];
      delete selectedFilter['field'];
      this.applyFilters.emit([...outputFilters]);
    }
  }
  
  applyNormalFiltersFromEnter($event: any): void {
    if ($event.keyCode === 13) {
     this.ApplyNormalFilters();
     this.router.navigate([ 'movie/list' ]);
    }
  }

}


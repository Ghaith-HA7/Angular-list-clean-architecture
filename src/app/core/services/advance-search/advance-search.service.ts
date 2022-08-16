import {Injectable} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AdvancedSearchRepository } from 'src/app/core/repository';

@Injectable({
  providedIn: 'root'
})
export class AdvancedSearchService extends AdvancedSearchRepository {
  
  public searchText: BehaviorSubject<string> = new BehaviorSubject('');
  _unsubscribeAll: Subject<any> = new Subject();
  
  constructor(
  ){
    super();
  }
  setSearchText(text: string): void {
    this.searchText.next(text);
  }
  getSearchText(): string {
    return this.searchText.getValue();
  }
  removeSearchText(): void {
    this.searchText.next(' ');
  }
}

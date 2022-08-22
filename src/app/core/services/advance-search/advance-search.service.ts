import {Injectable} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AdvancedSearchRepository } from 'src/app/core/repository';

@Injectable({
  providedIn: 'root'
})
export class AdvancedSearchService extends AdvancedSearchRepository {
  
  public searchText: BehaviorSubject<string>;
  _unsubscribeAll: Subject<any> = new Subject();
  
  constructor(
  ){
    super();
    this.searchText = new BehaviorSubject('');
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
  
  ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private isSubLoading$$ = new BehaviorSubject<boolean>(false);

  public isLoading$ = this.isLoading$$.asObservable();
  public isSubLoading$ = this.isSubLoading$$.asObservable();

  public setLoading(isLoading: boolean) {
    this.isLoading$$.next(isLoading);
  }

  public setSubLoading(isLoading: boolean) {
    this.isSubLoading$$.next(isLoading);
  }
}

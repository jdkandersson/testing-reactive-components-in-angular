// name.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  private mName$ = new BehaviorSubject<string>(null);

  name$(): Observable<string> {
    return this.mName$;
  }

  constructor(private httpClient: HttpClient) { }

  loadName() {
    this.httpClient.get<string>('name URL')
      .subscribe(
        name => this.mName$.next(name)
      );
  }
}

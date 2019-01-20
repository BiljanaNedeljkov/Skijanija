import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skiresort } from '../Model/ski-resort.model';
import { map } from 'rxjs/operators';


const baseUrl: string = 'http://localhost:3000/api/skiresorts';

@Injectable({
  providedIn: 'root'
})
export class SkiResortService {

  constructor(private http: HttpClient) { }

  getSkiresorts(): Observable<Skiresort[]> {
    return this.http.get<Skiresort[]>(baseUrl).pipe(map(
      data => {
        let retVal = Array<Skiresort>();
        data.forEach(item => retVal.push(new Skiresort(item)));
        return retVal;
      }
    ));
  }
}

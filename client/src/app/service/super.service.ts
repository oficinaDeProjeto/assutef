import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class SuperService {
	public extractData(res) {
		let body = res.json();
		return body || [];
	}

	public createObservable(data: any): Observable<any> {
		return Observable.create((observer: Observer<any>) => {
			observer.next(data);
			observer.complete();
		});
	}

	public handleError(error: any) {
		return Observable.throw(error.json().error || 'Server error');
	}

}
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoadingBarService {
    public isLoading = new BehaviorSubject(false);
}

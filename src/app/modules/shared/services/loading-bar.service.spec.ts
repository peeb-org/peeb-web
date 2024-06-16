import { LoadingBarService } from './loading-bar.service';
import { TestBed } from '@angular/core/testing';

describe('LoadingBarService', () => {
    let service: LoadingBarService;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        service = TestBed.inject(LoadingBarService);
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('should set isLoading to false', () => {
        service.isLoading.subscribe((v) => expect(v).toBe(false));
    });
});

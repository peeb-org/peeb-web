import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { first, last } from 'rxjs/operators';
import { LoadingBarInterceptor } from './loading-bar.interceptor';
import { LoadingBarService } from '../services/loading-bar.service';
import { TestBed } from '@angular/core/testing';

describe('LoadingBarInterceptor', () => {
    let interceptor: LoadingBarInterceptor;
    let loadingBarService: LoadingBarService;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                LoadingBarInterceptor,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: LoadingBarInterceptor,
                    multi: true,
                },
            ],
        });

        interceptor = TestBed.inject(LoadingBarInterceptor);
        loadingBarService = TestBed.inject(LoadingBarService);
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should create interceptor', () => {
        expect(interceptor).toBeTruthy();
    });

    it('should set isLoading to true when requests are sent', () => {
        httpClient.get('foo').subscribe((r) => expect(r).toBeTruthy());
        httpClient.get('bar').subscribe((r) => expect(r).toBeTruthy());
        loadingBarService.isLoading.pipe(first()).subscribe((v) => expect(v).toBe(true));
        httpTestingController.expectOne('foo').flush('OK');
        httpTestingController.expectOne('bar').flush('OK');
        httpTestingController.verify();
    });

    it('should set isLoading to true when not all responses are received', () => {
        httpClient.get('foo').subscribe((r) => expect(r).toBeTruthy());
        httpClient.get('bar').subscribe();
        loadingBarService.isLoading.subscribe((v) => expect(v).toBe(true));
        httpTestingController.expectOne('foo').flush('OK');
    });

    it('should set isLoading to false when all responses are received', () => {
        httpClient.get('foo').subscribe((r) => expect(r).toBeTruthy());
        httpClient.get('bar').subscribe((r) => expect(r).toBeTruthy());
        loadingBarService.isLoading.pipe(last()).subscribe((v) => expect(v).toBe(false));
        httpTestingController.expectOne('foo').flush('OK');
        httpTestingController.expectOne('bar').flush('Not Found', { headers: { status: '404' } });
        httpTestingController.verify();
    });
});

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingBarService } from '../services/loading-bar.service';
import { Observable } from 'rxjs';

@Injectable()
export class LoadingBarInterceptor implements HttpInterceptor {
    private requests: HttpRequest<unknown>[] = [];

    public constructor(private loadingBarService: LoadingBarService) {}

    public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.requests.push(req);
        this.loadingBarService.isLoading.next(true);

        return new Observable((s) => {
            const subscription = next.handle(req).subscribe(
                (e) => {
                    if (e instanceof HttpResponse) {
                        this.removeRequest(req);
                        s.next(e);
                    }
                },
                (err) => {
                    this.removeRequest(req);
                    s.error(err);
                },
                () => {
                    this.removeRequest(req);
                    s.complete();
                }
            );

            return () => {
                this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    }

    private removeRequest(req: HttpRequest<unknown>): void {
        const i = this.requests.indexOf(req);

        if (i >= 0) {
            this.requests.splice(i, 1);
        }

        this.loadingBarService.isLoading.next(this.requests.length > 0);
    }
}

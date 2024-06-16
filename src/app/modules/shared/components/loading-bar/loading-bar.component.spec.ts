import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LoadingBarComponent } from './loading-bar.component';
import { LoadingBarService } from '../../services/loading-bar.service';
import { SharedModule } from '../../shared.module';

describe('LoadingBarComponent', () => {
    let fixture: ComponentFixture<LoadingBarComponent>;
    let loadingBarService: LoadingBarService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SharedModule],
        }).compileComponents();

        fixture = TestBed.createComponent(LoadingBarComponent);
        loadingBarService = TestBed.inject(LoadingBarService);
    });

    it('should create', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should set isLoading to false when not loading', () => {
        loadingBarService.isLoading.next(false);

        expect(fixture.componentInstance.isLoading).toBe(false);
    });

    it('should not show progress bar when not loading', () => {
        loadingBarService.isLoading.next(false);
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('mat-progress-bar'))).toBeNull();
    });

    it('should set isLoading to true when loading', () => {
        loadingBarService.isLoading.next(true);

        expect(fixture.componentInstance.isLoading).toBe(true);
    });

    it('should show progress bar when loading', () => {
        loadingBarService.isLoading.next(true);
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('mat-progress-bar'))).toBeTruthy();
    });
});

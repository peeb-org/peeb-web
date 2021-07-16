import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StandardLayoutComponent } from './standard-layout.component';

describe('StandardLayoutComponent', () => {
    let fixture: ComponentFixture<StandardLayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StandardLayoutComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(StandardLayoutComponent);
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });
});

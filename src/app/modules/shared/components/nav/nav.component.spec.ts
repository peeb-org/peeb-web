import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
    let fixture: ComponentFixture<NavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NavComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });
});

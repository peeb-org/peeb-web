import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyLayoutComponent } from './empty-layout.component';

describe('EmptyLayoutComponent', () => {
    let fixture: ComponentFixture<EmptyLayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EmptyLayoutComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(EmptyLayoutComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });
});

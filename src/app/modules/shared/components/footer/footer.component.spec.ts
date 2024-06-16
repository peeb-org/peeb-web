import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FooterComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FooterComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });
});

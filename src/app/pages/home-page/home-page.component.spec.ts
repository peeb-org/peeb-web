import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
    let fixture: ComponentFixture<HomePageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomePageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(HomePageComponent);
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });
});

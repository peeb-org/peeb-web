import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
    let fixture: ComponentFixture<SidenavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SidenavComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SidenavComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });
});

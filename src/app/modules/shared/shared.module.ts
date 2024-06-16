import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './components/nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { StandardLayoutComponent } from './layouts/standard-layout/standard-layout.component';

@NgModule({
    declarations: [EmptyLayoutComponent, FooterComponent, HeaderComponent, LoadingBarComponent, NavComponent, SidenavComponent, StandardLayoutComponent],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatToolbarModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    exports: [CommonModule, HttpClientModule, LoadingBarComponent, MatButtonModule, MatDividerModule, MatIconModule, MatToolbarModule, ReactiveFormsModule, RouterModule],
})
export class SharedModule {}

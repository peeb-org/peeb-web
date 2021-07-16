import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StandardLayoutComponent } from './layouts/standard-layout/standard-layout.component';

@NgModule({
    declarations: [LoadingBarComponent, StandardLayoutComponent],
    imports: [CommonModule, FormsModule, HttpClientModule, MatProgressBarModule, ReactiveFormsModule, RouterModule],
    exports: [CommonModule, HttpClientModule, LoadingBarComponent, MatProgressBarModule, ReactiveFormsModule, RouterModule],
})
export class SharedModule {}

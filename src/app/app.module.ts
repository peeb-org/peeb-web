import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadingBarInterceptor } from './modules/shared/interceptors/loading-bar.interceptor';
import { NgModule } from '@angular/core';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
    declarations: [AppComponent, HomePageComponent],
    imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule, SharedModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingBarInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

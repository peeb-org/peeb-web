import { RouterModule, Routes } from '@angular/router';
import { EmptyLayoutComponent } from './modules/shared/layouts/empty-layout/empty-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: EmptyLayoutComponent,
        children: [
            {
                path: '',
                component: HomePageComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

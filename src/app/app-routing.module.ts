import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { StandardLayoutComponent } from './modules/shared/layouts/standard-layout/standard-layout.component';

const routes: Routes = [
    {
        path: '',
        component: StandardLayoutComponent,
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

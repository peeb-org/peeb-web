import { Component } from '@angular/core';
import { LoadingBarService } from '../../services/loading-bar.service';

@Component({
    selector: 'app-loading-bar',
    templateUrl: './loading-bar.component.html',
    styleUrls: ['./loading-bar.component.scss'],
})
export class LoadingBarComponent {
    public isLoading = false;

    public constructor(private loadingBarService: LoadingBarService) {
        this.loadingBarService.isLoading.subscribe((v) => (this.isLoading = v));
    }
}

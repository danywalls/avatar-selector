import { Component } from '@angular/core';
import { AvatarSelectorComponent } from './components/avatar-selector/avatar-selector.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [AvatarSelectorComponent]
})
export class AppComponent {
  title = 'avatar-selector';
}

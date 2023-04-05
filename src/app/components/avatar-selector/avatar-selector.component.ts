import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarPreviewComponent } from '../avatar-preview/avatar-preview.component';
import { AvatarListComponent } from '../avatar-list/avatar-list.component';

@Component({
  selector: 'app-avatar-selector',
  standalone: true,
  imports: [CommonModule, AvatarPreviewComponent, AvatarListComponent],
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.css'],
})
export class AvatarSelectorComponent {}

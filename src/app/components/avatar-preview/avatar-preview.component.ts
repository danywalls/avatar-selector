import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar-preview.component.html',
  styleUrls: ['./avatar-preview.component.css']
})
export class AvatarPreviewComponent {
  @Input() id: number = 0;
}

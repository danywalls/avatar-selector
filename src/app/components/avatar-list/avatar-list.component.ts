import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar-list.component.html',
  styleUrls: ['./avatar-list.component.css'],
  exportAs: 'avatarListContext' //<!-- The magic is here ;)
})
export class AvatarListComponent {
  avatars = [1, 2, 3, 4, 5];
  selectedId = 1;
  favorites: number[] = [];

  addToFavorites(id: number) {
    this.favorites.push(id);
  }

  removeFavorite(id: number) {
    this.favorites = this.favorites.filter((favId) => favId !== id);
  }
}

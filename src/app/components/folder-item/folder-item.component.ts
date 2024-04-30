import { Component, Input } from '@angular/core';
import { Folder } from '../../../models/folder';

@Component({
  selector: 'app-folder-item',
  standalone: true,
  imports: [],
  templateUrl: './folder-item.component.html',
  styleUrl: './folder-item.component.css'
})
export class FolderItemComponent {
  @Input() folder!: Folder;

}

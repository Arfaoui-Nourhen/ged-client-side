import { CommonModule } from '@angular/common';
import { Component,HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FoldersComponent } from '../folders/folders.component';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,FoldersComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarWidth: number = 200; // Default width in pixels
  isResizing: boolean = false;
  faPlus=faPlus;
  faRefresh=faRefresh;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isResizing) {
      this.sidebarWidth = event.clientX;
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (this.isResizing) {
      this.isResizing = false;
    }
  }

  startResizing(event: MouseEvent) {
    this.isResizing = true;
    event.preventDefault(); // Prevents selection and other side effects
  }
}

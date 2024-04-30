import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-docview',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './docview.component.html',
  styleUrl: './docview.component.css'
})
export class DocviewComponent {

}

import { Component } from '@angular/core';
import { FolderItemComponent } from '../folder-item/folder-item.component';
import { Folder } from '../../../models/folder';
import { FolderService } from '../../services/folder.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-folders',
  standalone: true,
  imports: [FolderItemComponent,CommonModule],
  templateUrl: './folders.component.html',
  styleUrl: './folders.component.css'
})
export class FoldersComponent {
  folders : Folder[]= [] ;
  
 constructor(private folderService : FolderService){
   this.folderService.getAllFolders().subscribe((res : any)=>{
    this.folders=res.data;  
    }
  );
 }
}

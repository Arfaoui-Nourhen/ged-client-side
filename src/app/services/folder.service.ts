import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Folder } from "../../models/folder";
import { Observable } from "rxjs";
import { API_CONFIG } from "../config/config-api";


@Injectable({
  providedIn: 'root'
})

export class FolderService {

  constructor(private http: HttpClient) {}

  getAllFolders(): Observable<Folder[]> {
    return this.http.get<Folder[]>(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.folders}`);
  }
}

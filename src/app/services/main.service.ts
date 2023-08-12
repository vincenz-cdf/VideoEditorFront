import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private api = "http://localhost:8080/";
  private baseURL: string = 'http://localhost:8080/uploads';

  constructor(
    private http: HttpClient
    ) { } 


  uploadVideoToProcess(formData: any): Promise<any> {

    return this.http.post(this.api + 'upload', formData).toPromise();

  }
  
  downloadFile(folder: string, filename: string): Observable<Blob> {
    let endpoint = `${this.baseURL}/${folder}/${filename}`;
    return this.http.get(endpoint, { responseType: 'blob' });
  }
}


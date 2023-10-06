import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AxiosService } from './axios.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private baseURL: string = 'http://localhost:8080/uploads';

  constructor(
    private http: HttpClient,
    private axiosService: AxiosService
  ) { }


  uploadVideoToProcess(formData: any): Promise<any> {
    console.log(formData)
    return this.axiosService.request("POST", "/upload", formData);
  }

  downloadFile(folder: string, filename: string): Observable<Blob> {
    let endpoint = `${this.baseURL}/${folder}/${filename}`;
    return this.http.get(endpoint, { responseType: 'blob' });
  }
}


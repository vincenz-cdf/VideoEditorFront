import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-derush',
  templateUrl: './derush.component.html',
  styleUrls: ['./derush.component.css']
})
export class DerushComponent {
  title = 'video-editor';

  constructor(
    private mainService: MainService,
  ) {}

  isUploading = false;

  public uploadFile() {
    let fileInput = <HTMLInputElement>document.getElementById('uploadBloc');
    fileInput.click();
  }

  public onFileSelected(event: any) {
    this.isUploading = true;
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('video', file, file.name);

      this.mainService.uploadVideoToProcess(formData).then((data) => {
        console.log(data);
        this.isUploading = false;
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
      }, (error) => {
        this.isUploading = false;
        Swal.fire(
          'Bad job!',
          '!',
          'error'
        )
      }
      )
    }
  }

  download() {
    const folder = 'isaac_au_studio__the_binding_of_isaac__repentance';
    const filename = 'finished.mp4';

    this.mainService.downloadFile(folder, filename).subscribe((data) => {
      const blob = new Blob([data], { type: 'video/mp4' });

      const url= window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
}

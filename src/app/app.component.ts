import { Component } from '@angular/core';
import { ImageCompressService, ResizeOptions, ImageUtilityService, IImage, SourceImage } from 'ng2-image-compress';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private imageCompress: NgxImageCompressService) { }

  imgResultBeforeCompress: string;
  imgResultAfterCompress: string;

  compressFile() {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      this.imgResultBeforeCompress = image;
      var block = image.split(";");
      console.log(block);
      // Get the content type of the image
      var contentType = block[0].split(":")[1];
      console.log(contentType);

      // get the real base64 content of the file
      var realData = block[1].split(",")[1];
      console.warn('Size in bytes was:', this.imageCompress.byteCount(image));

      if (contentType == "image/gif") {
        image;
      }
      else {
        //image is compressed and stored in result
        this.imageCompress.compressFile(image, orientation, 70, 70).then(
          result => {
            console.log(result);
            this.imgResultAfterCompress = result;
            console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
          }
        );

      }
    });

  }
}
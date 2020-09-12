import { Pipe, PipeTransform } from '@angular/core';
const DEFAULT_PATH='1.jpg';
@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    if(path.trim().length===0)
      {
        return DEFAULT_PATH;
      }
    else
      {
        return path;
      }
  }

}

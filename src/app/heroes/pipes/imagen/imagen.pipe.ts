import { Heroe } from './../../interfaces/heroes.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: Heroe): string {
    return `assets/heroes/${value.id}.jpg`;
  }

}

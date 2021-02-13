import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rgCpfPipe'
})
export class RgCpfPipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
    if (value.length === 11) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '\$1.\$2.\$3\-\$4');
    }
    if (value.length === 9) {
      return value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/g, '\$1.\$2.\$3\-\$4');
    }
    return value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji',
  standalone: true
})
export class EmojiPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + ' 😜';
  }

}

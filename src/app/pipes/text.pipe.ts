import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'truncate'
})
export class TextPipe implements PipeTransform{
  transform(value: string, limit=8):string
  {
    return value.length > limit ? `${value.substring(0, limit)}...` : value;
  }
}

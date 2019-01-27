import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
	transform(value:any, limit: number, limit2:number){
		if(value.length>limit){
			return value.substr(0,limit+limit2)+'...';
		}
		return value;
	}
}
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'MyUpper'
})

export class MyUpperPipe implements PipeTransform {
    transform(value: string, typeo: string ){
        if (typeo === 'upper'){
            value = value.toUpperCase();  
        }else if (typeo === 'lower') {
            value = value.toLowerCase();
        }            
        return value;
    }
}
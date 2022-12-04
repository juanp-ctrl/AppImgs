import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent {

  constructor(private router:Router) {}

  onSearch(value: string){
    // Redireccion a la lista de fotos y pasamos como parametro el valor que viene del input

    if(value && value.length>3){
      this.router.navigate(["/lista-fotos"], {
        queryParams: {q:value}
      })
    }
    console.log("buscar " +value)
  }

}

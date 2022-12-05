import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListaFotosComponent } from 'src/app/components/pages/fotos/lista-fotos/lista-fotos.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router:Router) {}

  onSearch(e:any, value:string): void{
    // Redireccion a la lista de fotos y pasamos como parametro el valor que viene del input

    e.preventDefault()
    
    if(value && value.length>3){
      this.router.navigate(["/lista-fotos"], {
        queryParams: {category:value}
      })
    }
    console.log("buscar " + value)
  }
  
}

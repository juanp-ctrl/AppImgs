import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, take } from 'rxjs';
import { Foto } from 'src/app/shared/components/interfaces/fotos.interface';
import { FotoService } from 'src/app/shared/services/foto.service';

@Component({
  selector: 'app-foto-detalles',
  templateUrl: './foto-detalles.component.html',
  styleUrls: ['./foto-detalles.component.scss']
})
export class FotoDetallesComponent implements OnInit {

  fotos: Foto[] =[];
  
  constructor(private route:ActivatedRoute, private fotoSvc:FotoService, private location:Location){}

  ngOnInit(): void{
    this.route.queryParams.pipe(take(1)).subscribe(params => {
      const id = params["id"];
      // this.foto$ = this.fotoSvc.getDetalles(id);
      this.fotoSvc.getDetalles(id).pipe(take(1)).subscribe((res:any)=>{
        console.log(res)
        const {hits} = res;
        this.fotos = hits
      })
      console.log(this.fotos)
    })
  }

  GoBack(): void{
    this.location.back()
  }
}

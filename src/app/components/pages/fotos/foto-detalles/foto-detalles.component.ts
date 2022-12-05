import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, take } from 'rxjs';
import { Foto } from 'src/app/shared/components/interfaces/fotos.interface';
import { FotoService } from 'src/app/shared/services/foto.service';
import { Store } from '@ngrx/store';
import { selecUnaFoto } from 'src/app/state/selectors/fotos.selectors';

@Component({
  selector: 'app-foto-detalles',
  templateUrl: './foto-detalles.component.html',
  styleUrls: ['./foto-detalles.component.scss']
})
export class FotoDetallesComponent implements OnInit {

  foto!: Foto;
  foto$: Observable<any> = new Observable()
  
  constructor(private route:ActivatedRoute, private fotoSvc:FotoService, private location:Location,
    private store: Store){
      this.foto$ = this.store.select(selecUnaFoto)
    }

  ngOnInit(): void{
    this.route.queryParams.pipe(take(1)).subscribe(params => {
      const id = params["id"];
      // this.foto$ = this.fotoSvc.getDetalles(id);
      this.fotoSvc.getDetalles(id).pipe(take(1)).subscribe((res:any)=>{
        console.log(res)
        const {hits} = res;
        this.foto = hits[0]
        console.log(this.foto)
      })
    })
  }

  GoBack(): void{
    // this.location.back()
    this.foto$.subscribe(o => console.log(o[0].category))
    this.foto$.subscribe(o => console.log(o[0].query))
  }
}

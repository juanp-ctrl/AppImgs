import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, take } from 'rxjs';
import { Foto } from 'src/app/shared/components/interfaces/fotos.interface';
import { FotoService } from 'src/app/shared/services/foto.service';
import { Store } from '@ngrx/store';
import { selectUnaFoto } from 'src/app/state/selectors/fotos.selectors';

@Component({
  selector: 'app-foto-detalles',
  templateUrl: './foto-detalles.component.html',
  styleUrls: ['./foto-detalles.component.scss']
})
export class FotoDetallesComponent implements OnInit {

  foto!: Foto;
  foto$: Observable<any> = new Observable()
  query!: string;
  category!: string;
  // router: any;
  
  constructor(private route:ActivatedRoute, private fotoSvc:FotoService, private location:Location,
    private store: Store, private router:Router){
      
      this.foto$ = this.store.select(selectUnaFoto)
    }

  ngOnInit(): void{
    this.route.queryParams.pipe(take(1)).subscribe(params => {
      const id = params["id"];
      this.fotoSvc.getDetalles(id).subscribe((res:any)=>{
        console.log(res)
        const {hits} = res;
        this.foto = hits[0]
        console.log(this.foto)
      })
    })
  }

  GoBack(): void{
    this.location.back()
    this.foto$.subscribe(o => {
      this.query = o[0].query
    })
    this.router.navigate(["/lista-fotos"], {
      queryParams: {q:this.query, category:this.category}
    })
  }
}

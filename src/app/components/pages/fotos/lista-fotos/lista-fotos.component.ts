import { Component, HostListener, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Foto } from 'src/app/shared/components/interfaces/fotos.interface';
import { FotoService } from 'src/app/shared/services/foto.service';
import { DOCUMENT } from '@angular/common';
import { Store } from '@ngrx/store';
import { addFoto } from 'src/app/state/actions/fotos.actions';

@Component({
  selector: 'app-lista-fotos',
  templateUrl: './lista-fotos.component.html',
  styleUrls: ['./lista-fotos.component.scss']
})
export class ListaFotosComponent {
  fotos: Foto[] =[];
  // foto$: Observable<any> = new Observable()

  private pageNum=1;
  query!: string;
  category!: string;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;
  showGoUpButton = false;

  constructor(private fotoSvc: FotoService, private route: ActivatedRoute,
    @Inject(DOCUMENT) private document:Document, private store: Store) 
    {
      // this.foto$ = this.store.select(selectFotos)    //Nos comunicamos con el store y hacemos uso del selector
    }

  ngOnInit(): void{
    this.getFotosByQuery();
  }

  @HostListener("window:scroll", [])
  onWindowScroll():void{
    const yOffSet = window.pageYOffset;
    if((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight){
      this.showGoUpButton = true;
    }
    else if(this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight){
      this.showGoUpButton = false;
    }
  }

  private getFotosByQuery(): void{
    this.route.queryParams.subscribe(params => {
      if(params["q"]){
        this.query = params["q"];
        this.getDataFromService(1)
      }
      else if(params["category"]){
        this.category = params["category"];
        this.getDataFromService(1)
      }
      else{
        this.getDataFromService(0)
      }
    })
  }

  private getDataFromService (num:number):void{
    console.log(this.query, this.category)
    this.fotoSvc.searchFotos(this.query, this.pageNum, this.category)
    .pipe(
      take(1)
    ).subscribe( (res:any) => {
      if(res.hits.length > 0){
        if(num == 1){
          console.log("Respuesta: ", res)
          const {hits} = res;
          // this.store.dispatch(retrievedFotosList({fotos: [...hits]}))   //Usamos el store
          this.fotos = [...hits]
        }
        else{
          console.log("Respuesta: ", res) 
          const {hits} = res;
          // this.store.dispatch(retrievedFotosList({fotos: [...hits]}))
          this.fotos = [...this.fotos, ...hits]
        }
      }
      else{
        this.fotos = []
      }
    })
  }

  onScrollDown():void {
    this.pageNum++;
    this.getDataFromService(0)
  }

  onScrollTop():void {
    this.document.body.scrollTop = 0;   //Safari
    this.document.documentElement.scrollTop = 0;    //Otros navegadores
  }

  addData(foto:Foto):void {
    const dataFoto: Foto = {
      ...foto,
      query: this.query,
      category: this.category
  }
  console.log("ESTA ES LA DATA",dataFoto,this.query,this.category)
    this.store.dispatch(addFoto({foto: dataFoto}))
  }
}

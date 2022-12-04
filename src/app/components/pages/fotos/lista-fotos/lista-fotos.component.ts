import { Component, HostListener, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { take } from 'rxjs/operators';
import { Foto } from 'src/app/shared/components/interfaces/fotos.interface';
import { FotoService } from 'src/app/shared/services/foto.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-lista-fotos',
  templateUrl: './lista-fotos.component.html',
  styleUrls: ['./lista-fotos.component.scss']
})
export class ListaFotosComponent {
  fotos: Foto[] =[];

  private pageNum=1;
  private query!: string;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;
  showGoUpButton = false;

  constructor(private fotoSvc: FotoService, private route: ActivatedRoute,
    @Inject(DOCUMENT) private document:Document) {}

  ngOnInit(): void{
    this.getDataFromService();
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
      console.log(params)
      this.query = params["q"];
      this.getDataFromService()
    })
  }

  private getDataFromService ():void{
    this.fotoSvc.searchFotos(this.query, this.pageNum)
    .pipe(
      take(1)
    ).subscribe( (res:any) => {
      if(res.hits.length > 0){
        console.log("Respuesta: ", res)
        const {hits} = res;
        this.fotos = [...this.fotos, ...hits]
      }
      else{
        this.fotos = []
      }
    })
  }

  onScrollDown():void {
    this.pageNum++;
    this.getDataFromService()
  }

  onScrollTop():void {
    this.document.body.scrollTop = 0;   //Safari
    this.document.documentElement.scrollTop = 0;    //Otros navegadores
  }
}

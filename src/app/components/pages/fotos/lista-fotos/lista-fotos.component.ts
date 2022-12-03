import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { take } from 'rxjs/operators';
import { Foto } from 'src/app/shared/components/interfaces/fotos.interface';
import { FotoService } from 'src/app/shared/services/foto.service';

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

  constructor(private fotoSvc: FotoService,
    private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.getDataFromService();
  }

  // private getFotosByQuery(): void{
  //   this.route.queryParams.pipe(take(1))
  //   .subscribe( (params: ParamMap ) => {
  //     console.log("Params ->", params)
  //     this.query = params['q'];
  //     this.getDataFromService();
  //   })
  // }

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
}

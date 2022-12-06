import { from, Observable } from "rxjs";
import { Component, Input, ChangeDetectionStrategy } from "@angular/core"
import { Foto } from "src/app/shared/components/interfaces/fotos.interface";
import { Store } from "@ngrx/store";
import { selectFotos } from "src/app/state/selectors/fotos.selectors";
import { addFoto } from "src/app/state/actions/fotos.actions";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-foto",
    template:`
    <div class="card">

    <div class="content">
        <a (click)="addData()" [routerLink]="['/foto-detalles']" [queryParams]="{id: foto.id}">
        <div class="content-overlay"></div>
        <img [src]="foto.webformatURL" [alt]="foto.type" class="content-image">                  <div class="content-details fadeIn-bottom">
            <p class="content-text"># {{foto.tags}}</p>
        </div>
        </a>
    </div>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FotoComponent{
    @Input() foto!:Foto;
    // foto$: Observable<any> = new Observable()
    // constructor(private store: Store){
    //     this.foto$ = this.store.select(selectFotos)
    //     console.log(this.foto$)
    // }
    query!: string

    constructor(private store: Store, private route: ActivatedRoute){}


    addData(): void{
        this.route.queryParams.subscribe(params => {
            const dataFoto: Foto = {
                ...this.foto,
                query: "clavel",
                category: "ciencia"
            }
            // console.log("los parametros",params)
            this.store.dispatch(addFoto({foto: dataFoto}))
            // alert("hola")
        })

    }
}
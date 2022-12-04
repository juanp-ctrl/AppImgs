import { from } from "rxjs";
import { Component, Input, ChangeDetectionStrategy } from "@angular/core"
import { Foto } from "src/app/shared/components/interfaces/fotos.interface";

@Component({
    selector: "app-foto",
    template:`
    <div class="card">

    <div class="content">
        <a [routerLink]="['/foto-detalles']" [queryParams]="{id: foto.id}">
        <div class="content-overlay"></div>
        <img [src]="foto.webformatURL" [alt]="foto.type" class="content-image">                  <div class="content-details fadeIn-bottom">
            <p class="content-text"># {{foto.tags}}</p>
        </div>
        </a>
    </div>
        <div class="card-inner">
            <div class="header">
                <h4 class="text-muted">Likes: {{foto.likes}}</h4>
                <small class="text-muted">Vistas: {{foto.views}}</small>
            </div>
        </div>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FotoComponent{
    @Input() foto!:Foto;
}
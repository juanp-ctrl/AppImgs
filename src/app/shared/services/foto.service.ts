import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Foto } from '../components/interfaces/fotos.interface';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(private http:HttpClient) { }

  searchFotos(query='', page=1){
    return this.http.get<Foto[]>(`https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&q=${query}&page=${page}`
    );
  }

  getDetalles(id:number){
    return this.http.get<Foto>(`https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&id=${id}`)
  }
}

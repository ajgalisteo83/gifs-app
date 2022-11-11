import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'PUT_YOUR_API_KEY_HEAR';
  private _historial: string[] = [];
  
  public resultados : Gif[] = [];


  get historial(): string[] {
    return [...this._historial];
  }

  constructor (private http: HttpClient) {}

  buscarGifs(query: string) {
    
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=P0WM88uKHCU9CeKqFDgvzMJ3ZOF3KCpE&q=${ query }&limit=10`)
    .subscribe(resp => {
      console.log(resp.data);
      this.resultados = resp.data;
    });
  }

}

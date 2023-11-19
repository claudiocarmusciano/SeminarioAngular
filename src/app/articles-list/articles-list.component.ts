import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent {

  articleTitle = 'Lista de articulos';

  articles: Article[] = [
    {
      image: "assets/img/mouseGenius.jpeg",
      description: "Mouse",
      brand: "Genius",
      stock: 5,
      price: 5900,
      clearance: true
    },
    {
      image: "assets/img/tecladoXtrikeme.jpeg",
      description : "Teclado",
      brand : "XtrikeMe",
      stock : 0,
      price : 35900,
      clearance: false
      }
    ];
}

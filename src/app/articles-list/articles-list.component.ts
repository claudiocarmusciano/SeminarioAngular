import { Component } from '@angular/core';
import { Article } from './Article';

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
      clearance: true,
      quantity: 0
    },
    {
      image: "assets/img/tecladoXtrikeme.jpeg",
      description : "Teclado",
      brand : "XtrikeMe",
      stock : 0,
      price : 35900,
      clearance: false,
      quantity: 0
      }
    ];

  upQuantity (article: Article): void {
    if (article.quantity < article.stock)
      article.quantity++;
  }

  downQuantity (article: Article): void {
    if (article.quantity > 0)
      article.quantity--;
}

}

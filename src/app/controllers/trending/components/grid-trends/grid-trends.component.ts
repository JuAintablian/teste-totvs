import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-trends',
  templateUrl: './grid-trends.component.html',
  styleUrls: ['./grid-trends.component.scss']
})
export class GridTrendsComponent implements OnInit {

  @Input() trendsList;
  @Input() category;

  columnsMovie = [
    { property: 'title', label: 'Nome', readonly: true, width: 100},
    { property: 'overview', label: 'Resumo', readonly: true, width: 300},
    { property: 'original_language', label: 'Idioma original', readonly: true, width: 100 },
    { property: 'vote_average', label: 'Votos', readonly: true, width: 60 }
  ];

  columnsTv = [
    { property: 'name', label: 'Nome', readonly: true, width: 100},
    { property: 'overview', label: 'Resumo', readonly: true, width: 300},
    { property: 'original_language', label: 'Idioma original', readonly: true, width: 100 },
    { property: 'vote_average', label: 'Votos', readonly: true, width: 60 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable: curly
  getCategory() {
    if (this.category === 'tv') return this.columnsTv;
    if (this.category === 'movie') return this.columnsMovie;
  }
}

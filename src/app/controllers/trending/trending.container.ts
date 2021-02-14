import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-trending-container',
  templateUrl: './trending.container.html',
  styleUrls: ['./trending.container.scss']
})
export class TrendingContainerComponent implements OnInit {

  trendsList;
  formFilter: FormGroup;

  optionsCategory = [
    { label: 'TV', value: 'tv' },
    { label: 'Filme', value: 'movie' }
  ];

  optionsPeriod = [
    { label: 'Dia', value: 'day' },
    { label: 'Semana', value: 'week' }
  ];

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormFilter();
    this.onChangeFilter();
    this.getTrends();
  }

  createFormFilter() {
    this.formFilter = this.formBuilder.group({
      category: ['movie'],
      period: ['week']
    });
  }

  onChangeFilter() {
    this.formFilter.valueChanges.subscribe( () => {
      this.getTrends();
    });
  }

  getTrends(){
    const category = this.formFilter.value.category;
    const period = this.formFilter.value.period;

    this.apiService.getTrending(category, period).subscribe( res => {
      this.trendsList = res.results;
    });
  }
}

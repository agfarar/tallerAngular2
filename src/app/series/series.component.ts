import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serie } from './series'; 
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Serie[] = []; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    this.http.get<any>('https://gist.githubusercontent.com/josejbocanegra/8490b48961a69dcd2bfd8a360256d0db/raw/34ff30dbc32392a69eb0e08453a3fc975a3890f0/series.json')
      .subscribe(data => {
        
        this.series = data;
      });
  }
}


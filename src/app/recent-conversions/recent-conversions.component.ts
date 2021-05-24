import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter-output-card/converter.service';
import { Conversion } from '../converter-output-card/response';

@Component({
  selector: 'app-recent-conversions',
  templateUrl: './recent-conversions.component.html',
  styleUrls: ['./recent-conversions.component.scss']
})
export class RecentConversionsComponent implements OnInit {
  recentConversions: Conversion[] = [];
  constructor(private converterService: ConverterService) { }

  ngOnInit(): void {
    this.recentConversions = this.converterService.recentConversions;
  }

}

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProcessSummaryVM } from '../../../store/models/process.model';

@Component({
  selector: 'pvs-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})
export class ResultsTableComponent implements OnInit {
  @Input() processSummaries: Array<ProcessSummaryVM>;
  @Input() title: string;

  @Output()
  onReload: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}

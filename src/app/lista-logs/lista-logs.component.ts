import { Logs } from './../models/logs.model';
import { Component, Input, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-lista-logs',
  templateUrl: './lista-logs.component.html',
  styleUrls: ['./lista-logs.component.scss']
})
export class ListaLogsComponent implements OnInit {

  @Input()  logs:any[] = [];
  pageLogs: Array<any> = [];

  constructor(private service: LogService) { }

  ngOnInit(): void {
    this.service.todas().subscribe((logs: Logs[]) => {
      console.table(logs);
      this.logs = logs.reverse();
    });
  }

  onChangePage(pageLogs: Array<any>){
    this.pageLogs = pageLogs
  }

}

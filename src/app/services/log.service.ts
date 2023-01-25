import { Logs } from './../models/logs.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private listaLogs: any[] = [];
  private url = "http://ec2-15-229-1-113.sa-east-1.compute.amazonaws.com:8080/sniffer/logs"

constructor(private httpClient: HttpClient) {
  this.listaLogs = [];
}

  get logs(){
    return this.listaLogs;
  }

  todas(): Observable<Logs[]>{
    return this.httpClient.get<Logs[]>(this.url)
  }
}


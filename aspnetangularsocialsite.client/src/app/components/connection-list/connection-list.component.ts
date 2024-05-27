
import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../services/connection.service';
import { Connection } from '../../models/connection';

@Component({
  selector: 'app-connection-list',
  templateUrl: './connection-list.component.html',
  styleUrls: ['./connection-list.component.css']
})
export class ConnectionListComponent implements OnInit {
  connections: Connection[] = [];

  constructor(private connectionService: ConnectionService) { }

  ngOnInit(): void {
    this.loadConnections();
  }

  loadConnections(): void {
    this.connectionService.getConnections().subscribe((data: Connection[]) => {
      this.connections = data;
    }, error => {
      console.error('Error fetching connections', error);
    });
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated: EventEmitter<{serverName: string, serverContent: string}>
    = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated: EventEmitter<{serverName: string, serverContent: string}>
    = new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName: string = '';
  newServerContent: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }
}

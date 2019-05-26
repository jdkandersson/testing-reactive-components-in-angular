// name.component.ts
import { Component, OnInit } from '@angular/core';

import { NameService } from './name.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  constructor(public nameService: NameService) { }

  ngOnInit() {
    this.nameService.loadName();
  }

}

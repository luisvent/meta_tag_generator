import {Component, Input, OnInit} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'app-google-card',
  templateUrl: './google-card.component.html',
  styleUrls: ['./google-card.component.css']
})
export class GoogleCardComponent implements OnInit{

  @Input()
  metadata!: Metadata;

  ngOnInit(): void {

  }
}

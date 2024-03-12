import {Component, Input, OnInit} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'app-google-preview',
  templateUrl: './google-preview.component.html',
  styleUrls: ['./google-preview.component.css']
})
export class GooglePreviewComponent implements OnInit{

  @Input()
  metadata!: Metadata;

  ngOnInit(): void {

  }
}

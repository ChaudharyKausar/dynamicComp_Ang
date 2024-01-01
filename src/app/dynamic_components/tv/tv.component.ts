import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  @Input() name:string='';
  @Output() closed=new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }
  close(){
    this.closed.emit({
      name:this.name,
    })
  }
}

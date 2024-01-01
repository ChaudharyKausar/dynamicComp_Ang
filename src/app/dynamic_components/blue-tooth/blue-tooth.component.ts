import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-blue-tooth',
  templateUrl: './blue-tooth.component.html',
  styleUrls: ['./blue-tooth.component.css']
})
export class BlueToothComponent implements OnInit {
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

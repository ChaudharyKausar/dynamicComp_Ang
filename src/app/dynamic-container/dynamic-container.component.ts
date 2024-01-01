import { Component, OnInit,Type,ViewChild,ViewContainerRef ,ComponentRef} from '@angular/core';
import { MobileComponent } from '../dynamic_components/mobile/mobile.component';
import { LaptopComponent } from '../dynamic_components/laptop/laptop.component';
import { WatchComponent } from '../dynamic_components/watch/watch.component';
import { TvComponent } from '../dynamic_components/tv/tv.component';
import { BlueToothComponent } from '../dynamic_components/blue-tooth/blue-tooth.component';

@Component({
  selector: 'app-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.css']
})
export class DynamicContainerComponent implements OnInit {
  @ViewChild('container',{read:ViewContainerRef,static:true})
  container!:ViewContainerRef;
  components=new Map<string, ComponentRef<any>>();
  index:number=0;

  ProductsName:any={
    mobile:'mobile',
    laptop:'laptop',
    watch:'watch',
    tv:'tv',
    bluetooth:'bluetooth',
  };

  constructor() { }

  ngOnInit(): void {}
  createComponent(componentName:string){
    const componentType=this.getComponentType(componentName);
    let uniqueName=componentName +'-' +this.index.toString();
    const component=this.container.createComponent(componentType);
    component.instance.name=uniqueName;
    component.instance.closed.subscribe((res:any)=>{
this.deleteComponent(res.name);
    })
    this.components.set(uniqueName,component);
    this.index++;
    }

    deleteComponent(componentName:string){
      if(this.components.has(componentName)){
        this.components.get(componentName)?.destroy();
        this.components.delete(componentName);
      }
    }
getComponentType(name:string): Type<any>{
  let type:Type<any>=MobileComponent;
  switch(name){
    case this.ProductsName.mobile:{
      type=MobileComponent;
      break;
    }
    case this.ProductsName.laptop:{
      type=LaptopComponent;
      break;
    }
    case this.ProductsName.watch:{
      type=WatchComponent;
      break;
    }
    case this.ProductsName.tv:{
      type=TvComponent;
      break;
    }
    case this.ProductsName.bluetooth:{
      type=BlueToothComponent;
      break;
    }

  }

return type;
}
}

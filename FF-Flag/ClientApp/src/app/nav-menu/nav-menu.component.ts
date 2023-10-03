import { Component } from '@angular/core';
import { AppConfigurationClient } from "@azure/app-configuration";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  counterFeature = this.ShowCounter();

  async ShowCounter() {
    const conn = 'Endpoint=https://ff-configuration.azconfig.io;Id=cbxa;Secret=HPYBTw9Bt3p8NydAyv9rjp9EmcNfs3mv1JPeYrlsyF8=';
    const client = new AppConfigurationClient(conn);

    var val = await client.getConfigurationSetting({ key: ".appconfig.featureflag/showCounter" });

    const parsedValue = val.value ? JSON.parse(val.value) : null;

    if (parsedValue && parsedValue.enabled !== undefined) {
      return parsedValue.enabled;
    }
    return false;
  }

 // async ShowCounter() {
   // const conn = 'Endpoint=https://ff-configuration.azconfig.io;Id=cbxa;Secret=HPYBTw9Bt3p8NydAyv9rjp9EmcNfs3mv1JPeYrlsyF8=';
   // const client = new AppConfigurationClient(conn);

   // var val = await client.getConfigurationSetting({ key: ".appconfig.featureflag/showCounter" });

   // var gt = val.value;
   // console.log("hello world");
   // console.log(gt);

    //return true;
    
    //return JSON.parse(val).enabled;
  //}
}

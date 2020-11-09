import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NavigationModule } from "./navigation/navigation.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports: [BrowserModule, FormsModule, SharedModule, NavigationModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

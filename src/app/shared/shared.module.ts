import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenubarModule } from "primeng/menubar";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";

@NgModule({
  imports: [
    MenubarModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [
    MenubarModule,
    InputTextModule,
    ButtonModule
  ],
  declarations: []
})
export class SharedModule {}

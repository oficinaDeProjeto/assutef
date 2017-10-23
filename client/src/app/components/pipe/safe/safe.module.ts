import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SafePipe} from "./SafePipe";

@NgModule({
  declarations: [SafePipe],
  exports: [SafePipe],
  imports: [CommonModule]
})
export class SafeModule {

}

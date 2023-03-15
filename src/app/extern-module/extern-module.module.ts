import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestExtModuleComponent } from '../test-ext-module/test-ext-module.component';

@NgModule({
  declarations: [TestExtModuleComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TestExtModuleComponent
  ]
})

export class ExternModuleModule { }

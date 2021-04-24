import {NgModule} from '@angular/core';
import {ResizeDetectDirective} from './resize-detect.directive';

@NgModule({
  declarations: [ResizeDetectDirective],
  exports: [ResizeDetectDirective]
})
export class ResizeDetectModule {
}

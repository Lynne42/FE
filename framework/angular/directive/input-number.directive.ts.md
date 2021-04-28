// 使用
```
<input
  type="number"
  appInputNumber
  (valueChange)="handleInputChange($event)"/>
```



// input-number.directive.ts
```
import { ElementRef, Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appInputNumber]'
})
export class InputNumberDirective {
  @Input() max: number;
  @Output() valueChange = new EventEmitter<number>();

  constructor(public elementRef: ElementRef) { }

  @HostListener('window:keydown', ['$event.target'])
  keyupFun(evt) {
    if (evt.value) {
      let value = parseInt(evt.value) || '';

      this.elementRef.nativeElement.value = value;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(kbdEvent:  any)  {
    let code: (number | string) = 0;

    if (kbdEvent.key !== undefined) {
      code = kbdEvent.key;
    } else if (kbdEvent.keyCode !== undefined) {
      code = kbdEvent.keyCode;
    }

    if (code === 13 || code === 'Enter') {
      let value = parseInt(kbdEvent.target.value.trim()) || 0;
      let v = value > this.max ? this.max : value >= 1 ? value :  '';
      this.elementRef.nativeElement.value = Number(v) || '';
      if(v > 0) {
        this.valueChange.emit(Number(v) || 0);
      }
    }
  }
}

```
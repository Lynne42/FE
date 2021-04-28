// 使用
```
<input
  placeholder={{placeholder}}
  [value]= "value"
  appDebounceInput
  (debounceInput)="onHandleKeydown($event)"/>
```


// debounce-input.directive.ts
```
import {Directive, HostListener, Input, EventEmitter, Output, OnDestroy, OnInit} from '@angular/core';
import {debounceTime} from 'rxjs/operators';
import {Subject, Subscription} from 'rxjs';

@Directive({
  selector: '[appDebounceInput]'
})
export class DebounceInputDirective implements OnInit, OnDestroy {
  @Input() time = 400;
  @Output() debounceInput = new EventEmitter();

  private inputs = new Subject<any>();
  private subscription: Subscription;

  constructor() {
  }

  @HostListener('input', ['$event'])
  clickEvent(event: any) {
    event.preventDefault();
    event.stopPropagation();
    const value = event.srcElement['value'];
    console.log(value);
    this.inputs.next(value);
  }

  ngOnInit(): void {
    this.subscription = this.inputs.pipe(
      debounceTime(this.time)
    ).subscribe(e => this.debounceInput.emit(e));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

```
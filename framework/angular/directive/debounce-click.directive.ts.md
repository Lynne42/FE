
// debounce-click.directive.ts
```
import {
  Directive,
  OnInit,
  HostListener,
  Output,
  EventEmitter,
  OnDestroy,
  Input,
} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {

  @Input() time = 400;
  @Output() debounceClick = new EventEmitter();

  private clicks = new Subject<any>();
  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscription = this.clicks.pipe(
      debounceTime(this.time)
    ).subscribe(e => this.debounceClick.emit(e));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }

}

```
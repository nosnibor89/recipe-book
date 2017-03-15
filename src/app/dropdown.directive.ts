import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

  private isOpen = false;

  @HostListener('mouseenter') showDropdown() {
    this.isOpen = true;
  }

  @HostListener('mouseleave') hideDropdown() {
    this.isOpen = false;
  }

  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }

  constructor() { }
}

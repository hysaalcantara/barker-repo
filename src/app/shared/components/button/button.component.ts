import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() message: string = '';
  @Input() type: string = '';
  @Input() size: string = '';
  @Input() outlined: boolean = false;


  colors = {
    error: 'bg-error',
    success: 'bg-success',
    primary: 'bg-primary',
    warning: 'bg-warning',
    info: 'bg-info',
  };

  get color(): string {
    // return 'bg-' + this.type
    return this.colors[this.type as keyof typeof this.colors];
  }
}

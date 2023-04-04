import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string | null>();
  term: string | null;

  constructor() {
    this.term = '';
  }

  public onInput(event: any): void {
    this.term = event.target.value;
  }

  public onFormSubmit(event: any): void {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}

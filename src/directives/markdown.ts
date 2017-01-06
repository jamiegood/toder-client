import { Component, Directive, ElementRef, Input } from '@angular/core';
import marked from 'marked';

@Component({
  selector: 'markdown',
  template: `
    <div [innerHTML]="convertedData">
    </div>
  `
})
export class MarkdownComponent {
  @Input('data')
  data:string;
  convertedData: any;

  ngOnChanges() {
    console.log('1 - '+marked(this.data));
    var md = marked.setOptions({});
    this.convertedData = marked(this.data);
    //this.convertedData = md.parse(this.data);

  }
}

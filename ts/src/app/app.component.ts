import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';

  isTextExpanded = false;
  buttonContent = 'ver mais';

  displayForm = false;
  displayDiscussionInfo = true;
  assunto: string = '';
  conteudo: string = '';

  toggleTextExpansion() {
    this.isTextExpanded = !this.isTextExpanded;
    this.buttonContent = this.isTextExpanded ? 'ver menos' : 'ver mais'
  }

  getButtonClass() {
    return {
      'expanded': this.isTextExpanded
    };
  }

  createTopic() {
    this.displayForm = true;
    this.displayDiscussionInfo = false;
  }

  submitForm() {

    this.assunto = '';
    this.conteudo = '';
    this.displayForm = false;
    this.displayDiscussionInfo = true;
  }
}
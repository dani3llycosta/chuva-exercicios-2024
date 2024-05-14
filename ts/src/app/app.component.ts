import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';

  displayForm = false;
  displayDiscussionInfo = true;
  assunto: string = '';
  conteudo: string = '';

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



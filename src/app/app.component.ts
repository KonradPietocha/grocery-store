import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';

@Component({
    selector: 'app-root',
    imports: [CommonModule, TopbarComponent, RouterOutlet, DisclaimerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    providers: [AppModule]
})
export class AppComponent {
  title = 'Your favorite grocery store';
  showDisclaimer = true;

  onDisclaimerConfirmed() {
    this.showDisclaimer = false;
  }
}

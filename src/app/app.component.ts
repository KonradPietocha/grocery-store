import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { TopbarComponent } from './components/topbar/topbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AppModule]
})
export class AppComponent {
  title = 'Grocery Store';
}

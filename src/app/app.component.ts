import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'github-user-info';
  private router = inject(Router)

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/user-info'); 
    }, 2800);
  }
}

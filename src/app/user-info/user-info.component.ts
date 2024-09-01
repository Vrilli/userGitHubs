import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GithubService } from '../services/github.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  form: FormGroup;
  userForm: FormGroup;
  user: any;
  repos: any[] = [];

  constructor(private fb: FormBuilder, private githubService: GithubService) {
    this.userForm = this.fb.group({
      username: ['']
    });
    this.form = this.fb.group({
      username: ['', Validators.required]
    });
  }



  onSubmit() {
    const username = this.userForm.get('username')?.value;
    if (username) {
      this.githubService.getUser(username).subscribe(user => {
        this.user = user;
      });

      this.githubService.getUserRepos(username).subscribe(repos => {
        this.repos = repos;
      });
    }
  }

  checkInput() {
    const username = this.form.get('username')?.value;
    if (username) {
      this.githubService.getUser(username).subscribe(user => {
        this.user = user;
      });
      
    } else {
      alert('Por favor llena el campo');
    }
  }
}

import {Component, EventEmitter, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'fbi-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  public hide: boolean = true;
  public email: string = '';
  public password: string = '';

  public succesfulLoginEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.authService.login(this.email, this.password).then((data) => {
      console.log(data);
      this.succesfulLoginEmitter.emit(true);
    }).catch(error => {
      console.log(error);
      this.succesfulLoginEmitter.emit(false);
    });
  }
}

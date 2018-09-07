import { AuthService } from './../../_services/auth.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancleRegister = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
    this.authService.register(this.model)
      .subscribe(res => {
        console.log('registration succesful');
      }, err => {
        console.log(err);
      });
  }

  cancle() {
    this.cancleRegister.emit(false);
  }
}

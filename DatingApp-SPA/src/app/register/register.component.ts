import { AuthService } from './../../_services/auth.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancleRegister = new EventEmitter();

  model: any = {};

  constructor(private alertify: AlertifyService, private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
    this.authService.register(this.model)
      .subscribe(res => {
        this.alertify.success('REgisteration Succesful');
      }, err => {
        this.alertify.error(err);
      });
  }

  cancle() {
    this.cancleRegister.emit(false);
  }
}

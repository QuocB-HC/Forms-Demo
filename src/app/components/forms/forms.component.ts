import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  standalone: false,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  userName: string = "";
  favoriteMusic: string = "";
  user = {
    name: '',
    email: '',
  }

  // Nhập Favorite Music bằng prompt
  // showForms() {
  //   let a = prompt("Your Favorite Music ?","");
  //   this.favoriteMusic = String(a);
  // }

  submitForm() {
    console.log('Thông tin nhập vào:', this.user);
    alert('Gửi thành công!');
  }
}

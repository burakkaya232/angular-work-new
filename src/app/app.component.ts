import { Component } from '@angular/core';
import { User } from './user.i';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'First Angular Application';
  name = 'Burak';

  user: User = {
    id: 0,
    name: '',
  };

  //instance : Örnek

  users: User[] = [
    {
      id: 0,
      name: 'Burak KAYA',
    },
    {
      id: 1,
      name: 'Serhat KAYA',
    },
    {
      id: 2,
      name: 'Onur KARAAĞAÇ',
    },
  ];

  userAdd() {
    //assign = atamak
    this.users.push(Object.assign({}, this.user));
  }

  userDelete(i: number) {
    this.users.splice(i, 1);
  }
}

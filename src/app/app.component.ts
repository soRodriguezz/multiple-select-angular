import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userSelectsString: any = '';
  name: any = 'Angular';
  userSelects: any = [];
  suggestions: any = [
    { id: '001', name: 'mangosdkjklasjdskajdklajdkajkdlakd' },
    { id: '002', name: 'apple' },
    { id: '003', name: 'bananaaksdjakldskaljdkajdsksajdkajsklas' },
    { id: '004', name: 'pinesdkjakdsljalkdjkasjdkljaklsdjkajdlkajsdkljasdlkjaksldjdksjds' },
    { id: '005', name: 'orange' },
    { id: '006', name: 'chery' },
    { id: '007', name: 'watermelon' },
    { id: '008', name: 'grapes' },
    { id: '009', name: 'lemon' }
  ];

  show: boolean = false;

  suggest() {
    this.show = true;
  }

  isSelected(s: any) {
    return this.userSelects.findIndex((item: any) => item.id === s.id) > -1
      ? true
      : false;
  }

  selectSuggestion(s: any) {
    if (this.userSelects.find((item: any) => item.id === s.id)) {
      this.userSelects = this.userSelects.filter(
        (item: any) => item.id !== s.id
      );
    } else {
      this.userSelects.push(s);
    }
    this.show = false;
    console.log(this.userSelects);
  }

  deleteSelects(s: any) {
    this.userSelects = this.userSelects.filter((item: any) => item.id !== s.id);
    console.log(this.userSelects);
  }

  assignToNgModel() {
    this.userSelectsString = '';
    this.userSelects.map(
      (item: any) => (this.userSelectsString += item.name + ' ')
    );
  }
}

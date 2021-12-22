import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-todo';
  todoArray: any = [];

  onAddButtonClicked(item: any) {
    if(item==''||null||NaN) {
      alert('Please input the things you want to do!')
      return;
    } else {
      this.todoArray.push(item);
    }
  }

  onDeleteButtonClicked(item: any) {
    for(let i = 0; i < this.todoArray.length; i++) {
      if(item == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }

  onStrikeThrough(item: any) {
    let listItem = document.querySelectorAll('li')
    for(let i = 0; i < this.todoArray.length; i++ ) {
      if(item == this.todoArray[i]) {
        listItem[i].style.textDecoration = 'line-through'
        listItem[i].style.textDecorationThickness = "2px"
      }
    }
  }

  onPressEnterKey(item: any) {
    if(item===''||null||NaN) {
      alert('Please input the things you want to do!')
    }
    this.todoArray.push(item.todo)
  }
}

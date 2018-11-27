import { OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class TodoComponent implements OnInit {
  todos: Todo[];
  message: string;
  constructor(private todoService: TodoService){
    this.todos = [];
  }
  ngOnInit(){
      this.todoService.getTodos().subscribe(todos => this.todos = todos, err=> this.message=err)
  }
  add() {
    let newTodo = {id: 1,title:'...'}
    this.todoService.addTodo(newTodo).subscribe(todo => this.todos.push(todo))
  }
  delete(id: number){
    if (confirm('are you sure you want to delete this todo?')){
      this.todoService.delete(id).subscribe();

    }
  }
}

export class Todo {
  id: number;
  title: string
}
export class TodoService {
  constructor(private http: Http) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get('...').pipe(
      map(todo => todo.json())
    )
  }
  addTodo(todo:Todo): Observable<Todo> {
    return this.http.post('...',todo).pipe(
      map(todo => todo.json())
    )
  }
  delete(id: number) {
    return this.http.delete('...').pipe();
  }
}

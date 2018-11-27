import { TodoComponent, TodoService} from './todo.component';
import { of, Observable } from 'rxjs';

describe('Todo Spec Test', () => {
  let component: TodoComponent;
  let todoService: TodoService;
  beforeEach(() => {
    todoService = new TodoService(null);
    component = new TodoComponent(todoService);
  })
  it('should initialize todos when called', () => {
    spyOn(todoService,'getTodos').and.returnValue(of([
      {id: 1, title: "Sleep"}
    ]))
    component.ngOnInit();
    expect(component.todos.length).toBeGreaterThan(0);
  })
  it('add Todos should have been called', () => {
   let  spy = spyOn(todoService,'addTodo').and.returnValue(of([
      {id: 1, title: "Sleep"}
    ]))
    component.add();
    expect(spy).toHaveBeenCalled();
  })
  it('should add the new todo returned from the server', () => {
    let todo = {id: 1, title: "Sleep"};
    spyOn(todoService,'addTodo').and.callFake(t => of(todo))
     component.add();
     expect(component.todos.length).toBeGreaterThan(0);
   })
   it('should set the message property if the server returns an error ', () => {
    let error = 'error message from the server';
    let spy = spyOn(todoService,'addTodo').and.throwError(error);


     expect(component.add).toThrow();
   })
   it('should call the server to delete a todo item once the user confirms', () => {
     spyOn(window,'confirm').and.returnValue(true);
     let spy = spyOn(todoService,'delete').and.returnValue(of());
     component.delete(1);
     expect(spy).toHaveBeenCalledWith(1);
   })
   it('should NOT call the server to delete a todo item once the user cancels', () => {
    spyOn(window,'confirm').and.returnValue(false);
    let spy = spyOn(todoService,'delete').and.returnValue(of());
    component.delete(1);
    expect(spy).not.toHaveBeenCalled();
  })
})

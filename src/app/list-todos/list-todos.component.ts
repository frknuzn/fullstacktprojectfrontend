import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';


export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
//Todo Listesi oluşturduk bunu html tarafında for ile döneceğiz
  todos:Todo[]
  
  message: string

  constructor(
    private todoService:TodoDataService,
    /*
    * Router amacı güncelleme isteği geldiğinde app-routing.module.ts de ki 
    * path: 'todos/:id', component: TodoComponent,canActivate:[RouteGuardService]}
    * todo componentine gidecek ve orada güncellenecek
    */

    private router:Router
    ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('Furkan').subscribe(
      response =>{
        console.log(response);
        this.todos=response;
      }
     )
  }


  deleteTodo(id){
    console.log(`delete todo ${id}` )

    this.todoService.deleteTodo('Furkan',id).subscribe(
      response =>{
        console.log(response);

        this.message=`Delete Succesfull ! ${id}`
        this.refreshTodos();
      }
      
    )
  }

  updateTodo(id){
    console.log(`Update ${id}`)
    //router da ki todos/:id componentine gidecek
    this.router.navigate(['todos',id])
  }
addTodo(){
   //todos componentine yönlendiriyoruz
   this.router.navigate(['todos',-1])
}
}

import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { CreateTodoPage } from '../pages/createTodo/createTodo';
import { LoginPage } from '../pages/login-page/login-page';
import { SignupPage } from '../pages/signup-page/signup-page';
import { Todos } from '../providers/todos';
import { Auth } from '../providers/auth';
import { MarkdownComponent} from '../directives/markdown';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateTodoPage,
    LoginPage,
    SignupPage,
    MarkdownComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateTodoPage,
    LoginPage,
    SignupPage
  ],
  providers: [Todos, Auth, Storage]
})
export class AppModule {}

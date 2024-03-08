import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { RegistroComponent } from "./registro/registro.component";


export const routes:Routes =[
    
    {path:'login',component:LoginComponent},
    {path:'registro',component:RegistroComponent},
    {path:'home',component:HomeComponent},
    {path:'',redirectTo: '/home',pathMatch:'full'},

];
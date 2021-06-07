import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PrivateGuard } from "./guards/private.guard";
import { PublicGuard } from "./guards/public.guard";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { RegisterComponent } from "./pages/register/register.component";
import { TasksComponent } from "./pages/tasks/tasks.component";

const routes: Routes = [
  { path: "", redirectTo: "/public/login", pathMatch: "full" },
  {
    path: "public",
    canActivate: [PublicGuard],
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

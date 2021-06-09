import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"],
})
export class TasksComponent implements OnInit {
  private id: string;
  public tasks: any[];
  public search: string;
  public text: string;

  public textChanged: Subject<string> = new Subject<string>();

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
    });

    this.getAllTasksForUser();
    this.textChanged.pipe(debounceTime(1000)).subscribe((response) => {
      this.doSearch();
    });
  }

  onFieldChanged() {
    this.textChanged.next(this.search);
  }

  getAllTasksForUser() {
    this.userService
      .getAllTasksForUser(this.id, "")
      .subscribe((response: any) => {
        this.tasks = response.allTasks;
      });
  }

  addTask() {
    const data = {
      userID: this.id,
      text: this.text,
    };
    this.userService.addTask(data).subscribe((response) => {
      this.getAllTasksForUser();
      this.text = null;
    });
  }
  deleteTask(task) {
    this.userService.deleteTask(task).subscribe(
      (response) => {
        this.getAllTasksForUser();
      },
      (err) => {}
    );
  }

  doSearch() {
    this.userService
      .getAllTasksForUser(this.id, this.search)
      .subscribe((response: any) => {
        this.tasks = response.allTasks;
      });
  }
}

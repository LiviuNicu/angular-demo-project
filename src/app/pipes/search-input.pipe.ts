import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../interfaces/user";

@Pipe({
  name: "searchInput",
})
export class SearchInputPipe implements PipeTransform {
  transform(users: User[], str: string): any {
    return;
  }
}

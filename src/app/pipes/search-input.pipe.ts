import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../interfaces/user";

@Pipe({
  name: "searchInput",
})
export class SearchInputPipe implements PipeTransform {
  transform(users: User[], str: string): any {
    if (!str) {
      return users;
    } else {
      return users.filter((item) => {
        if (item && item.firstName && item.lastName)
          return (
            item.firstName
              .toLocaleLowerCase()
              .indexOf(str.toLocaleLowerCase()) !== -1 ||
            item.lastName
              .toLocaleLowerCase()
              .indexOf(str.toLocaleLowerCase()) !== -1
          );
      });
    }
  }
}

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "material-demo";
  defaultGender = true;
  genders = [
    { name: "Male", isDefault: false },
    { name: "Female", isDefault: false },
    { name: "Non-Binary", isDefault: false },
    { name: "Other", isDefault: true }
  ];

  foods = [
    { value: 1, viewValue: "Pizza" },
    { value: 2, viewValue: "Hamburger" },
    { value: 3, viewValue: "Ice Cream" },
    { value: 4, viewValue: "Chocolate Pie" }
  ];

  categories = [
    { name: "Beginner", selected: false },
    { name: "Intermediate", selected: false },
    { name: "Advanced", selected: false }
  ];

  progress = 0;
  timer;

  constructor() {
    this.timer = setInterval(() => {
      this.progress++;

      if(this.progress === 100)
      clearInterval(this.timer);
    }, 20);

  }

  selectCategory(category){
    //Only one category will be selected
    this.categories
    .filter(c => c != category)
    .forEach(c => c.selected = false);

    category.selected = !category.selected;
  }


}

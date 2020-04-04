import { EditCourseComponent } from './edit-course/edit-course.component';
import { Component } from "@angular/core";
import { Observable, timer  } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

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
  isLoading = false;

  constructor(private dialog: MatDialog) {
    this.timer = setInterval(() => {
      this.progress++;

      if(this.progress === 100)
      clearInterval(this.timer);
    }, 20);

    this.isLoading = true;
    this.getCourses().subscribe(
      x => this.isLoading = false
    );
  }

  selectCategory(category){
    //Only one category will be selected
    this.categories
    .filter(c => c != category)
    .forEach(c => c.selected = false);

    category.selected = !category.selected;
  }

  getCourses(){
    //simulating a data service
    return timer(4000)
  }

  openDialog(){
    this.dialog.open(EditCourseComponent, {
      data: { courseId: 1 }
    })
      .afterClosed().subscribe((result) => {
        alert('You clicked: ' + result);
      });
  }

}

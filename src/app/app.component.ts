import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DateFilterFn } from '@angular/material/datepicker';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'material demo';
  myControl = new FormControl();

  notifications = 7;
  showSpinner = false;
  opened = false;

  selectedValue: string = '';

  options: string[] = ['Angular', 'React', 'Vue']

  objectOptions = [
    { name: 'Angular'},
    { name: 'Angular Material'},
     { name: 'React'},
     { name: 'Vue'},
    ];

  // <!-- ==================== Filtered Autocomplete ===================-->

  filteredOptions: Observable<string[]> = of([]);

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
        map(value => this._filter(value))
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  // <!-- ==================== Calender ===================-->


  minDate = new Date();
  maxDate = new Date(2024, 0, 1 );

  dateFilter: DateFilterFn<Date | null> = (date: Date | null) => {
    if (!date) {
      return true; // Allow null dates
    }
    const day = date.getDay();
    return day !== 0 && day !== 6; // Only allow weekdays
  };

  // <!-- ====================  ===================-->



    displayFunction(option: any): string {
      return option.name;
    }
  // displayFunction(subject:any){
  //   return subject ? subject.name : undefined;
  // }

  logChange(index: any) {
    console.log(index)
  }

  loadData(){
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000)
  }

  log(state: any) {
    console.log(state)
  }


}

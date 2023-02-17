import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DateFilterFn } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];


// <!-- ==================== ===================-->

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef,
    private paginatorIntl: MatPaginatorIntl
    ) {

    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => this.createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.dataSource.paginator = new MatPaginator(this.paginatorIntl, this.changeDetectorRefs);
    this.dataSource.sort = this.sort;

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

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

  // <!-- ==================== Data Table ===================-->

  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<UserData>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createNewUser(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';

    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };
  }

  // <!-- ==================== Dialog ===================-->

openDialog(){
  let dialogRef = this.dialog.open(DialogComponent, {data: {name: 'Anthony'}});

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog Result: ${result}`)
  })
}

  // <!-- ==================== Snack Bar ===================-->

  openSnackBar(message:string, action:string) {
    let snackBarRef = this.snackBar.open(message, action, {duration: 2000});

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('Snack Bar was dismissed');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('Snack Bar action was triggered');
    });
  }
    openCustomSnackBar(){
      this.snackBar.openFromComponent(CustomSnackBarComponant, {duration: 2000})
    }


  // <!-- ==================== Filtered Autocomplete ===================-->

  filteredOptions: Observable<string[]> = of([]);



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

// <!-- ==================== Snack Bar ===================-->
@Component({
  selector: 'custom-snackbar',
  template: `<span style="color: orange">Custom Snackbar</span>`,
})
export class CustomSnackBarComponant implements OnInit {
  ngOnInit() {
  }
}

// @Component({
//   selector: 'custom-snackbar',
//   template: `<span style="color: orange">Custom Snackbar</span>`,
// })
// export class CustomSnackBarComponant implements OnInit {
//   ngOnInit() {
//   }
// }

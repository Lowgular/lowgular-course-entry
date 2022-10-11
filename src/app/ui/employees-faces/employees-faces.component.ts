import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {EmployeeModel} from "../../model/employee.model";

@Component({
  selector: 'employees-faces',
  templateUrl: './employees-faces.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesFacesComponent {

  data$:Observable<EmployeeModel[] | null>=this._httpClient.get<EmployeeModel[]>('assets/data/employees.json')
  constructor(private _httpClient: HttpClient) {
  }
}

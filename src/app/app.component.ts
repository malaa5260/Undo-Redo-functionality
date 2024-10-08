import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "../components/form/form.component";
import { ParentComponent } from "../components/view-child-reference/parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SmartFormRevertApp';
}

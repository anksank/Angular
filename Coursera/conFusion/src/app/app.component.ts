// this file supports the root component that
// forms part of our angular application
import { Component } from '@angular/core';

// Below is a component declarator 
// It takes a javascript object as a parameter
// selector: app-root (This is why the index.html references this tag)
// templateUrl: points to html file that contains the template correspnding to this Component
// styleUrl: points to the scss code that can be used for css styling for component module
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';
}

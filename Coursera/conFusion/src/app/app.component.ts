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

/**
 * Template or style can also be specified inline
 * 
 * Below is an example of inline template.
 * Use $ to use variables within the template.
 * 
 * Same thing can be done for styles as well, 
 * instead of styleUrls, give 'style' for it
 /** 
@Component({
	selector: 'app-root',
	template: `<h1>{{title}}</h1>
	`,
	styleUrls: ['./app.component.scss']
})
 */

// Below variables can be used in templates
export class AppComponent {
	title = 'app';
}

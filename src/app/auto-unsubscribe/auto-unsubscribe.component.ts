import { Component } from '@angular/core';
import { interval, map } from 'rxjs';
import { subscriptionCleaner } from '../helpers/subscription-cleaner';

@Component({
  selector: 'app-auto-unsubscribe',
  templateUrl: './auto-unsubscribe.component.html',
  styleUrls: ['./auto-unsubscribe.component.scss'],
})
export class AutoUnsubscribeComponent {
  private subscriptionCleaner = subscriptionCleaner();
  ngOnInit(): void {

    // unManaged code
    const shamelessOb$ = interval(1000).pipe(
      map(() => 'Keeps on eating your memory. NOT GOOD!!! unsubscribe me :(')
    );
    shamelessOb$.subscribe((message) => console.log(message));

    // Managed via reusable helper
    const whatWeDesireWithIntelligence$ = interval(4000).pipe(
      this.subscriptionCleaner(),
      map(() => 'Nukes when component gets destroyed')
    );
    whatWeDesireWithIntelligence$.subscribe((whatHeartWants) =>
      console.log(whatHeartWants)
    );
  }
}

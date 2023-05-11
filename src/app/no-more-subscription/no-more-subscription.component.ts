import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-no-more-subscription',
  templateUrl: './no-more-subscription.component.html',
  styleUrls: ['./no-more-subscription.component.scss'],
})
export class NoMoreSubscriptionComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const shamelessOb$ = interval(1000).pipe(
      map(() => 'I have no shame and keep on hogging memory')
    );
    shamelessOb$.subscribe((message) => console.log(message));

    // Better way to avoid memory leak
    const whatWeDesireWithIntelligence$ = interval(4000).pipe(
      takeUntilDestroyed(this.destroyRef),
      map(() => 'Im Smart and nuke myself when not needed')
    );    
    whatWeDesireWithIntelligence$.subscribe((whatHeartWants) =>
      console.log(whatHeartWants)
    );
  }
}

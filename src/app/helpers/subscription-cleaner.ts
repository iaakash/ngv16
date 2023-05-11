import { DestroyRef, inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

export function subscriptionCleaner() {
  const subject = new Subject();

  inject(DestroyRef).onDestroy(() => {
    console.log(':::Destroy fired up:::');
    subject.next(true);
    subject.complete();
  });

  return <T>() => takeUntil<T>(subject.asObservable());
}

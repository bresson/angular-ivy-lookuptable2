import { Component, VERSION } from '@angular/core';
import { LookupTableService } from './lookup-table.service';
/**
 * 1. aicoach treshold service
 * 2. aicoach keypoints
 * 3.
 */
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    LookupTableService,
    // first iteration
    // {
    //   provide: 'grades',
    //   useValue: {
    //     0: { math: 0.9, science: 0.7 },
    //     DEFAULT_GRADES: { math: 0.9, science: 0.9 },
    //   },
    // },
    {
      provide: 'grades',
      useValue: {
        0: { math: 0.9, science: 0.7 },
        DEFAULT_GRADES: { math: 0.9, science: 0.9 },
      },
    },
    // {
    //   provide: 'DEFAULT_GRADES2',
    //   useValue: { math: 0.9, science: 0.7 },
    // },
  ],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private readonly lookuptableService: LookupTableService) {}

  ngOnInit() {
    console.log(this.lookuptableService.getLookupTable());

    this.lookuptableService.compareKeypointsToTreshold();
  }
}

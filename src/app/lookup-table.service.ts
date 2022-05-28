import { Injectable, Inject, Optional } from '@angular/core';

const DEFAULT_GRADES = {
  math: 0.5,
  science: 0.5,
};

const DEFAULT_GRADES2 = {
  math: 0.5,
  science: 0.5,
};

@Injectable({
  providedIn: 'root',
})
export class LookupTableService {
  private lookupTable = {};

  constructor(
    @Inject('grades') @Optional() private grades,
    @Inject('DEFAULT_GRADES2') @Optional() private DEFAULT_GRADES2
  ) {
    console.log('grades', grades);
    console.log('DEFAULT_GRADES2', DEFAULT_GRADES2);
    // iteration without iteration
    // this.lookupTable = {
    //   DEFAULT: {
    //     ...DEFAULT_GRADES,
    //     ...(grades?.DEFAULT_GRADES && grades.DEFAULT_GRADES),
    //   },
    //   ...(grades && grades),
    // };
    this.lookupTable = {
      DEFAULT_GRADES2,
      ...(grades && grades),
    };
  }

  getLookupTable() {
    return this.lookupTable;
  }
}
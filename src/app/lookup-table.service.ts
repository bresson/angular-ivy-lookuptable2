
import { Injectable, Inject, Optional } from '@angular/core';

const DEFAULT_GRADES2 = {
  math: 0.5,
  science: 0.5,
};

const DEFAULT_GRADES = {
  math: 0.5,
  science: 0.5,
};

@Injectable({
  providedIn: 'root',
})
export class LookupTableService {
  private lookupTable = {};
  private tresholdPredicate;

  constructor(
    @Inject('grades') @Optional() private grades,
    // @Inject('DEFAULT_GRADES') @Optional() private DEFAULT_GRADES
    @Inject('tresholdPredicateInput') @Optional() private tresholdPredicateInput
  ) {
    console.log('grades', grades);
    console.log('DEFAULT_GRADES', DEFAULT_GRADES);
    // iteration without iteration
    // this.lookupTable = {
    //   DEFAULT: {
    //     ...DEFAULT_GRADES,
    //     ...(grades?.DEFAULT_GRADES && grades.DEFAULT_GRADES),
    //   },
    //   ...(grades && grades),
    // };
    this.lookupTable = {
      DEFAULT_GRADES,
      ...(grades && grades),
    };
  }

  private pred(a, b) {
    return a - b
  }

  getLookupTable() {
    return this.lookupTable;
  }

  compareKeypointsToTreshold(keypoints?: unknown, exerciseTresholds?: unknown) {
    console.log(this.lookupTable['0']);
    console.log(this.lookupTable['1']);
    console.log('null coalescent with 0 should be 0:', 0 ?? 4);
    console.log('null coalescent with undefined should be 4:', undefined ?? 4);
    console.log('Alt pred', 0 || 4); // don't use
    console.log(
      ' should return true as value is .9',
      this.lookupTable[0]?.math > 0.5
    );
    // YES!!!
    console.log(
      'should use alt after ?? since [1] is undefined',
      (this.lookupTable[1]?.math ?? this.lookupTable['DEFAULT_GRADES'].math) > 1
    );
    // treshold is source, target is keypoints
    // should be pred(source, target) YES
  }
}

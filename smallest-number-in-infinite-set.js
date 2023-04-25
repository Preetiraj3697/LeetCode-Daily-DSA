// First Approach ==============================================================
class SmallestInfiniteSet {
  currentSmall: number = 1
  addedList: number[] = []

  popSmallest(): number {
    if (this.addedList.length) {
      return this.addedList.shift()
    } else {
      this.currentSmall = this.currentSmall + 1
      return this.currentSmall - 1
    }
  }

  addBack(num: number): void {
    if (num < this.currentSmall) {
      if(!this.addedList.includes(num)) {
        this.addedList.push(num)
        this.addedList = this.addedList.sort((a,b) => a - b)
      }
    }
  }
}


// Second Approach ==============================================================

var SmallestInfiniteSet = function() {
    this.heap = [];
    this.min_num = 1;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    if (this.heap.length > 0) {
        return this.heap.shift();
    }
    this.min_num += 1;
    return this.min_num - 1;    
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (this.min_num > num && this.heap.indexOf(num) === -1) {
        this.heap.push(num);
        this.heap.sort((a, b) => a - b);
    }
};

// Third Approach ==============================================================

class SmallestInfiniteSet {
  constructor() {
    this.arr = new Array(1001).fill(true);
  }
  popSmallest() {
    for (let i = 1; i < this.arr.length; i++) {
      if (this.arr[i]) {
        this.arr[i] = false;
        return i;
      }
    }
    return null;
  }
  addBack(num) {
    this.arr[num] = true;
  }
}



// 1st solution

const pairSum = head => {
    let max = 0;
    let headRunner = head;
    
    const calculatePairSum = tail => {
        if (!tail) return;
        
        calculatePairSum(tail.next);
        max = Math.max(headRunner.val + tail.val, max);
        headRunner = headRunner.next;
    }
    
    calculatePairSum(head);
    
    return max;
};

// 2nd solution

var pairSum = function(head) {
    const arr = [];
    let max = 0;
    
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    
    for (let i = 0; i < arr.length / 2; i++) {
        const sum = arr[i] + arr[arr.length - 1 - i]
        max = Math.max(max, sum);
    }
    
    return max;
};

// 3rd solution

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head;
    let fast = head;
    
    // find midpoint of listNode
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    // reverse second half of listNode
    let prev = null;
    let nextNode = new ListNode();
    while(slow) {
        nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }
    
    let maxVal = 0;
    // get max pair
    while(prev) {
        maxVal = Math.max(maxVal, prev.val + head.val);
        head = head.next;
        prev = prev.next;
    }
    
    return maxVal;
};

// 4th solution

var pairSum = function(head) {
    var st = []; 
    while(head != null){
        st.push(head.val);
        head = head.next;
    }
    let max = 0;
    for(let i=0; i<st.length; i++){
        max = Math.max(max, (st[i] + st[st.length-1-i]));
    }
    return max;
};



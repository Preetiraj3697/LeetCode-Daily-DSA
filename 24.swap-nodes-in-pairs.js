// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:
// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]
 

// Constraints:

// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

// 1st solution 

var swapPairs = function(head) {
    // Store head to return list, Only instance of new data so space is O(1)
    let dummy = new ListNode(-1);
    dummy.next = head;
    
    let prev = dummy
    
    // Traverse list
    while (head && head.next) {
        
    // Declare
    let n1 = head
    let n2 = head.next
        
        // Swap
        prev.next = n2
        n1.next = n2.next
        n2.next = n1
        
        // Assign
        prev = n1
        head = n1.next
    }
    
    // The variable prev has been used to create the dummy list. dummy.next is still the head of new list
    return dummy.next;
};


// 2nd solution 

var swapPairs = function(head) {
    if(!head || !head.next) return head;
    var v1 = head, v2 = head.next, v3 = v2.next;
    v2.next = v1;
    v1.next = swapPairs(v3);
    return v2;
};




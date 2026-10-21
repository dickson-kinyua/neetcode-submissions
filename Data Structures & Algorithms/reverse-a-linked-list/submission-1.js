/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let previous=null;
        let curr=head;
        while(curr){
            let next=curr.next;
            curr.next=previous;
            previous=curr;
            curr=next;

        }
        return head=previous;
    }
}

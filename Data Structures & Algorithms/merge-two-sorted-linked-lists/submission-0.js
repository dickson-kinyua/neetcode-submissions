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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const allValues = [];

        // Step 1: Collect values from the first list
        while (list1 !== null) {
            allValues.push(list1.val);
            list1 = list1.next;
        }

        // Step 2: Collect values from the second list
        while (list2 !== null) {
            allValues.push(list2.val);
            list2 = list2.next;
        }

        // Step 3: Sort all values in ascending order
        allValues.sort((firstValue, secondValue) => firstValue - secondValue);

        // Step 4: Create a new linked list
        const dummyHead = new ListNode(0);
        let lastNode = dummyHead;

        for (const value of allValues) {
            const newNode = new ListNode(value);

            lastNode.next = newNode;
            lastNode = newNode;
        }

        // Step 5: Return the actual head, skipping the dummy node
        return dummyHead.next;
    }
}

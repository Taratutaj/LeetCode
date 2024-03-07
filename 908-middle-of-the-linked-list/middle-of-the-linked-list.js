/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    console.log(head)
    console.log(head.next)

    let n = 0;
    let temp = head;
    while(temp!=null){
        n++;
        temp = temp.next;
    }
    console.log(n)

    m = Math.floor(n/2)

    console.log(m)
    let temp2 = head;
    while(m>0){
        temp2 = temp2.next;
        m--;
    }
    console.log(temp2)
    return temp2
};
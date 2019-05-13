https://cs.slides.com/colt_steele/singly-linked-lists#/

SLL Reverse

                 [100--->201--->250--->350]

i=0   prev=null  node   next 
                 node.next-->prev
                 100-------->null

i=1              prev   node    next
                        node.next-->prev
                        201--->100

i=2                     prev    node    next
                                node.next-->prev
                                250-------->201

i=3                             prev    node    next
                                        node.next-->prev
                                        350-------->250

                 [350--->250--->201--->100]



            SLL            Array
Insertion   O(1)            O(n)
Removal     O(1) or O(n)    O(n)
Searching   O(n)            O(n)
Access      O(n)            O(1) 
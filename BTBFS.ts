//Prime writes this commented out code first, then revises and comes up with lines 25 and beyond..
//
//export default function bfs(head: BinaryNode<number>, needle: number): boolean {
//
//    const q = [head];
//
//    while (q.length) {
//        
//        const curr = q.shift() as BinaryNode<number>;
//
//        // search
//        if (curr.value === needle) {
//            return true;
//        }
//
//        if (curr.left) {
//            q.push(curr.left);
//        }
//        if (curr.right) {
//            q.push(curr.right);
//        }
//    }
//
//}

export default function bfs(head: BinaryNode<number>, needle: number): boolean {

    const q: (BinaryNode<number> | null)[]  = [head];

    while (q.length) {
        
        const curr = q.shift() as BinaryNode<number> | undefined | null;
        if (!curr) {
            continue;
        }

        // search
        if (curr.value === needle) {
            return true;
        }

        q.push(curr.left);
        q.push(curr.right);
    }

    return false;
}

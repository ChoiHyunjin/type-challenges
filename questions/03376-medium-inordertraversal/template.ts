interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

type InorderTraversal<T extends TreeNode | null> = T extends TreeNode
  ? [...(T['left'] extends TreeNode ? InorderTraversal<T['left']> : []),
      T['val'],
      ...(T['right'] extends TreeNode ? InorderTraversal<T['right']> : [])]
  : []

// todo: 더 다듬기
// 깔끔 답안
// type InorderTraversal<T extends TreeNode | null, NT extends TreeNode = NonNullable<T> > = T extends null
//   ? []
//   : [...InorderTraversal<NT['left']>, NT['val'], ...InorderTraversal<NT['right']>]

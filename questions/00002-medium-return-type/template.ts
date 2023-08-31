type MyReturnType<T> = T extends (...arg: any[]) => infer U
  ? U
  : never

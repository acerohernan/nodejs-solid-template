export function wait(millisecons: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, millisecons));
}

export function wait100(): Promise<void> {
  return wait(100);
}

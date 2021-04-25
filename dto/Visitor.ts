export enum VisitorState {
  Waiting,
  Processed,
  Processing,
}

export class Visitor {
  name: string | undefined
  state: VisitorState | undefined
}

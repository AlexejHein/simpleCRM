export class Todo{
  todo: string;

  constructor( obj?: any) {
    this.todo = obj ? obj.todo : '';
  }

  public toJSON() {
    return {
      todo: this.todo
    }
  }
}

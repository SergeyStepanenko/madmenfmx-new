import { observable } from 'mobx'

export default class TaskModel {
  @observable
  public id: string

  @observable
  public name: string

  @observable
  public status: string[]

  constructor(id: string, name: string, status: string[]) {
    this.id = id
    this.name = name
    this.status = status
  }
}

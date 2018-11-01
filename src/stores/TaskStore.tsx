import { observable, computed, action } from 'mobx'
import axios from 'axios'

import { TaskModel } from 'src/models'

export default class TaskStore {
  @observable
  public list: TaskModel[]

  constructor() {
    this.list = []
  }

  @computed
  get taskList() {
    return this.list
  }

  @action('fetch tasks')
  fetch = async () => {
    const { data } = await axios.get('http://localhost:3002/tasks')

    this.list = data.map((item: any) => {
      const { _id: id, name, status } = item

      return new TaskModel(id, name, status)
    })
  }
}

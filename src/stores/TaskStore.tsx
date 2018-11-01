import { observable, action } from 'mobx'
import axios from 'axios'

import { TaskModel } from 'src/models'

export default class TaskStore {
  @observable
  public list: TaskModel[]

  @observable
  public isLoading: boolean

  constructor() {
    this.list = []
    this.isLoading = false
  }

  @action('fetch tasks')
  fetch = async () => {
    this.isLoading = true

    const { data } = await axios.get('http://localhost:3002/tasks')

    this.list = data.map((item: any) => {
      const { _id: id, name, status } = item

      return new TaskModel(id, name, status)
    })

    this.isLoading = false
  }
}

import { observable, action } from 'mobx'
import axios from 'axios'

import { TaskModel } from 'src/models'

const API = 'http://localhost:3002'

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

    const { data } = await axios.get(`${API}/tasks`)

    this.list = data.map((item: any) => {
      const { _id: id, name, status } = item

      return new TaskModel(id, name, status)
    })

    this.isLoading = false
  }

  @action('add task')
  add = async ({ name, status }: TaskModel) => {
    await axios.post(`${API}/tasks`, {
      name,
      status
    })

    this.fetch()
  }

  @action('update task')
  update = async ({ id, name, status }: TaskModel) => {
    await axios.put(`${API}/tasks/${id}`, {
      name,
      status
    })

    this.fetch()
  }
}

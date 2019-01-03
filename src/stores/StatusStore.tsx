import { observable, action } from 'mobx'

export default class StatusStore {
  @observable isLoading: boolean = false

  @action toggleIsLoading = (flag: boolean) => {
    this.isLoading = flag
  }
}

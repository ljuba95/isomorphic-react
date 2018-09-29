import {delay} from "redux-saga";

export default {
  async getNotifications() {
    await delay(1000)
    return {count: 42}
  }
}
let count = 0

export default {

  setCount(_count) {
    count = _count;
  },

  async getNotifications() {
    console.log("using mock service")
    return {count}
  }

}
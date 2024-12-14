export const formData = {
    data: {},

    addData: function (key, value) {
      this.data[key] = value;
    },

    getData: function () {
      return this.data;
    },
  };
  
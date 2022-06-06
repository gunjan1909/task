let task = {
  fetchData: function (json) {
    fetch("./json.json")
      .then((response) => response.json())
      .then((data) => this.displayData(data));
  },
  displayData: function (data) {
    const data_array = data.tasks[0].assets;
    console.log(data_array);
  },
};

task.fetchData();

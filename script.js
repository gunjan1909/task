let div = document.getElementById("accordionExample");
var bool = true;
let task = {
  fetchData: function () {
    fetch("json.json")
      .then((response) => response.json())
      .then((data) => this.displayData(data));
  },
  displayData: function (data) {
    const data_array = data.tasks[0].assets;
    console.log(data_array);
    data_array.forEach((element) => {
      var task = `<div class="accordion-item flex">
               <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                     aria-expanded="true" aria-controls="collapseOne">
                     ${element.asset_title}
                  </button>
               </h2>
               <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                   ${
                     element.display_asset_reflection ||
                     element.asset_description
                   }
                   <embed src="${
                     element.display_asset_url ||
                     element.display_asset_image ||
                     element.display_asset_video ||
                     (element.display_asset_docs && bool)
                   }" type="" alt="lorem">
                  </div>
               </div>
            </div>`;

      div.innerHTML += task;
    });
  },
};

task.fetchData();

// var url = "https://jsonplaceholder.typicode.com/photos";
// $("#byid").on("click", () => {
//   $(".response").html("");

//   let id = parseInt($("#myid").val());
//   $("#myid").val("");
//   fetch(url)
//     .then((response) => response.text())
//     .then(function (data) {
//       let myData = JSON.parse(data);
//       newDiv = $('<div class="item">');
//       newDiv.attr("class", "event col-md-6");
//       let newP = "<p id='title'>" + myData[id - 1].title + "</p>";
//       let img = "<img src='" + myData[id - 1].url + "'>";
//       newDiv.append(newP);
//       newDiv.append(img);
//       $(".response").append(newDiv);
//     })
//     .catch((err) => console.log(err));
// });

// $("#byalbum").on("click", () => {
//   $(".response").html("");
//   fetch(url)
//     .then((response) => response.text())
//     .then(function (data) {
//       let myData = JSON.parse(data);
//       let albumId = parseInt($("#myalbum").val());
//       let elements = [];
//       for (let i = 0; i < myData.length; i++) {
//         if (myData[i].albumId === albumId) {
//           elements.push(myData[i]);
//         }
//       }
//       console.log(elements);
//       for (let g = 0; g < elements.length; g++) {
//         newDiv = $('<div class="item">');
//         newDiv.attr("class", "event col-md-6");
//         let newP = "<p id='title'>" + elements[g].title + "</p>";
//         let img = "<img src='" + elements[g].url + "'>";
//         newDiv.append(newP);
//         newDiv.append(img);
//         $(".response").append(newDiv);
//       }
//       $("#myalbum").val("");
//     })
//     .catch((err) => console.log(err));
// });

// $("#byname").on("click", () => {
//   $(".response").html("");
//   fetch(url)
//     .then((response) => response.text())
//     .then(function (data) {
//       let myData = JSON.parse(data);
//       let name = $("#myname").val();
//       let elements = [];
//       for (let i = 0; i < myData.length; i++) {
//         if (myData[i].title.includes(name)) {
//           elements.push(myData[i]);
//         }
//       }
//       console.log(elements.length);
//       for (let g = 0; g < elements.length; g++) {
//         newDiv = $('<div class="item">');
//         newDiv.attr("class", "event col-md-6");
//         let newP = "<p id='title'>" + elements[g].title + "</p>";
//         let img = "<img src='" + elements[g].url + "'>";
//         newDiv.append(newP);
//         newDiv.append(img);
//         $(".response").append(newDiv);
//       }
//       $("#myname").val("");
//     })
//     .catch((err) => console.log(err));
// });

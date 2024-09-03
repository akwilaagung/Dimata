// const a = 1;
// const b = 2;
// const c = 3;

// console.log(a);
// setTimeout(() => console.log(b));

// let janji = new Promise(function (resolve, reject) {
//    setTimeout(() => resolve("Done"), 1000)
// //   setTimeout(() => reject(new Error("Oops")), 1000);
// });

// janji
//   .then((hasil) => {
//     console.log("[INI HASIL]", user);
//   })
//   .catch((error) => {
//     console.log("[INI ERROR]", err);
//   })
//   .finally(() => {
//     console.log("Resolve maupun Reject tetap berjalan");
//   });

// function fetchDadJoke() {
// fetch('https://icanhazdadjoke.com/', {
// headers: { Accept: 'application/json' }.
// }).then((response) -> {
// If (!response.ok) {
// throw new Error(`HTTP error! Status: ${response.status}`); 
// }
// return response.json();
// }).then((data) -> {
// console.log('Dad Joke: $(data.joke)');
// }).catch((error) -> {
// console.error('Error fetching dad joke:", error)
// });
// }

function fetchDadJoke() {
    fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    .then((response) => {
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
}
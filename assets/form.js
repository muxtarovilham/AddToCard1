const customers = document.getElementById("customers");
const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const i3 = document.getElementById("i3");
const btn = document.getElementById("btn");


btn.addEventListener('click', function () {
    fetch('https://northwind.vercel.app/api/customers', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: i1.value,
            description: i2.value
           }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data gonderildi" + data);
          });
})
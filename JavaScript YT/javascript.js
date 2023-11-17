function tampil() {
    // document.querySelector("h1").innerText="belajar javascript";
    // document.querySelector(".container").style.backgroundColor = "red";
    // document.querySelector("#para").style.fontsize = "50px";

    // console.log(document.querySelectorAll("img") );

    // min = Math.ceil(0);
    // max = Math.floor(2);
    // let n = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(n);

    // document.querySelectorAll("img")[n].style.visibility="visible";

    // alert(document.querySelector("#nama").value );

    document.querySelector("#hasil").value = document.querySelector("#nama").value;

    document.querySelector("#para").innerText = document.querySelector("#nama").value;
}

// btn.onclick = tampil;

// btn.onclick = function() {
//     alert("javascript");
// }

// btn.addEventListener('mouseover',tampil);

// btn.addEventListener('mouseover',function () {
//     alert("event");
// });

// btn.onclick = function(){
//     let div = document.querySelector(".container");
//     let h = document.createElement("h1");
    
//     h.textContent = "belajar javascript";
//     h.className = "judul";

//     div.appendChild(h);
// }

btn.onclick = function(){

    const nama = document.querySelector("#nama");

    if (nama.value == "") {
        alert("nama sama")
    }else{
        alert(nama.value)
    }

    //  >< == != <= >=

    // let a = 9;
    // let b = 5;

    // b = b + a;
    // b = b - a;
    // b = b * a;
    // b = b / a;
    // b = a % b;
    // b = b ** a;
    // console.log(b);
    // let menu = document.querySelector("ul");

    // menu.removeChild(menu.children[0]);

    // const nama = document.querySelector("#nama");
    // const judul = document.querySelector("h1");

    // let tampil = "javascript";

    // judul.innerHTML = tampil + nama.value;

    // tampil = "javascript";
    // judul.innerHTML = tampil + nama.value;
}
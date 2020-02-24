let time =1;
function play() {
    let a= parseInt(prompt('Nhap gia tri nho nhat cua khoang'));
    let b = parseInt(prompt('Nhap gia tri lon nhat cua khoang'));
    let random= Math.floor(Math.random()*(b-a+1))+b;
    console.log(random);


   for(i=0;i<3;i++) {
       let guess = parseInt(prompt('Nhap so du doan cua ban'));
       console.log(guess);
       if (guess ==random) {
           alert('Chuc mung ban da doan dung');

       } else {
           if (guess >random) {
               alert('So du doan cua ban lon hon');

           } else {
               alert('so du doan cua ban nho hon');

           }
       }
   }

}

function replay() {
    location.reload(true);
    play();

}

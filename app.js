let i = 1;
for (let li of carousel.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

let width = 100; 
let count = 3;

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; 

carousel.querySelector('.prev').onclick = function() {
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};

// let a = 1;
// for(let li of carousel2.querySelectorAll('li')) {
//     li.style.position = 'relative';
//     li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${a}</span>`);
//     i++;
// }

// let width2 = 110; 
// let count2 = 5;

// let list2 = carousel2.querySelector('ul');
// let listElems2 = carousel2.querySelectorAll('li');

// let position2 = 0; 

// carousel2.querySelector('.prev').onclick = function() {

//     position2 += width2 * count2;
//     position2 = Math.min(position2, 0)
//     list2.style.marginLeft = position2 + 'px';
// };

// carousel2.querySelector('.next').onclick = function() {
//     position2 -= width2 * count2;
//     position2 = Math.max(position2, -width2 * (listElems2.length - count2));
//     list2.style.marginLeft = position2 + 'px';
// };

// const carousel_cert = document.getElementById('carousel_cert');
// const gallery_cert = carousel_cert.querySelector('.gallery_cert');
// const prevBtn = carousel_cert.querySelector('.prev');
// const nextBtn = carousel_cert.querySelector('.next');
// const certificateItems = gallery_cert.querySelectorAll('li');

// let currentIndex = 0;

// function showCertificate(index) {
//     certificateItems.forEach((item, i) => {
//         item.style.display = i === index ? 'block' : 'none';
//     });
// }

// function nextCertificate() {
//     currentIndex = (currentIndex + 1) % certificateItems.length;
//     showCertificate(currentIndex);
// }

// function prevCertificate() {
//     currentIndex = (currentIndex - 1 + certificateItems.length) % certificateItems.length;
//     showCertificate(currentIndex);
// }

// prevBtn.addEventListener('click', prevCertificate);
// nextBtn.addEventListener('click', nextCertificate);

// showCertificate(currentIndex);


// File JavaScript

console.log('Hello World!');

// Function to validate the form
function formValidation() {
    let nameInput = document.getElementById('name-input').value;

    console.log(nameInput);

    // Condition for validation
    if (nameInput == "") {
        alert('Harap masukkan nama anda');
    } else {
        // Display the result
         document.getElementById('result-form').innerHTML = nameInput;
    }

}

document.getElementById('submit-btn').addEventListener('click', formValidation);

let indexBanner = 0;

changeBackground();

function nextBanner() {
    indexBanner = indexBanner + 1;
    changeBackground();
}

// Function to change background banner
function changeBackground() {
    let bannerList = document.getElementById ('banner-image');
    console.log(bannerList);

    console.log(indexBanner);
    if(indexBanner > bannerList.length -1) {
        // Riset indexBanner
        indexBanner = 0;    
    }

    //looping to change background
    for (let i = 0; i < bannerList.length; i++) {
        console.log(i);
        console.log(bannerList[i]);
        bannerList[i].style.display = 'none'
    } 

    bannerList[indexBanner].style.display = 'block'
}

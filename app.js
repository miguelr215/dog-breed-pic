// DOG BREED PIC
let breed = "";

// function to display results
function displayResults(responseJson){
    let finalString = "";
    finalString = '<img src="'+ responseJson.message +'" alt="placeholder">';
    $('.picBox').html(finalString);
};

// function to get dog pic
function getDogPic(){
    breed = $('#breed').val();
    // empty input validation
    if(breed == ''){
        alert('Please enter a breed');
    } else {
    console.log(breed);
    fetch('https://dog.ceo/api/breed/'+ breed +'/images/random')
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('breed not found or something else bad happened'));
    }
};

// function to listen for button
function watchForm(){
    $('form').on('click', 'button', function(event){
        event.preventDefault();
        getDogPic();
    });
};


// function to run on page load
$(function(){
    console.log('App running, ready to go!');
    watchForm();
});
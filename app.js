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
    let userBreed = $('#breed').val();
    breed = userBreed.split(' ').join('');
    // empty input validation
    if(breed == ''){
        alert('Please enter a breed');
    } else {
    console.log(breed);
    fetch('https://dog.ceo/api/breed/'+ breed +'/images/random')
        .then(response => {
            if(response.ok){
                return response.json();
            } 
            throw new Error(response.statusText);
        })
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

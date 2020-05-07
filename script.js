$(document).ready(function(){
    const obj = JSON.parse(localStorage.getItem('todoObj'))
    $("#currentDay").text('4/20/2020')
    for(let i = 9; i < 18; i++){
        $(".container").append(`<div class="row time-block">
    <span class="hour col-2">${i<12?`${i}AM`: i>12 ? `${i-12}PM` : '12PM'}</span>
    <textarea name="" id="" cols="30" rows="3" class="description future col-8">${obj}</textarea>
    <button class="saveBtn col-2">Save</button>
    </div>`)
    }
    //addEventListener(two params, first one is the event name to listen for, second one is the function )
    var saveBtn = $('.saveBtn');
    saveBtn.on('click', function(){
        let todo = $(this).siblings('textarea').val();
        let hour = $(this).siblings('.hour').text()
        // localStorage.getItem();
        obj[hour] = todo;
        localStorage.setItem(`todoObj`, JSON.stringify(obj));
        console.log(obj)
        // console.log('this is locally stored', localStorage.getItem('test'))
    })
    })

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
$('#currentDay').text(moment().format("MMM Do YY"));
const saveButton = $('.saveBtn');

const timeOfDay = function(){
    const timeArray = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];

    // const textSpace = document.getElementsByClassName('description');

    let hour = moment().hour();

    for (const i = 0; i < timeArray.length; i++) {
        const Id = '#' + timeArray[i];
        $(Id).val(localStorage.getItem(timeArray[i]));
        if (timeArray[i] > hour) {
            $(Id).addClass('bg-success');
        }
        else if (timeArray[i] < hour) {
            $(Id).addClass('bg-info');
        }
        // textSpace.appendChild(hourId);
    }
}

const storeTask = function() {
    const task = $(this).siblings('.description').val();
    const hourInfo = $(this).siblings('.description').attr('id');

    console.log(hourInfo)
    console.log('Button Clicked')

    taskInfo = localStorage.setItem(hourInfo, JSON.stringify(task));
}

saveButton.on('click', storeTask);
storeTask();
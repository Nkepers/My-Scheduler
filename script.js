$('#currentDay').text(moment().format("MMM Do YY"));
var saveButton = $('.saveBtn');

var timeOfDay = function () {
    var timeArray = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];
    var hour = moment().hour();

    for (var i = 0; i < timeArray.length; i++) {
        var hourId = '#' + timeArray[i];
        $(hourId).val(localStorage.getItem(timeArray[i]));
        if (timeArray[i] > hour) {
            $(hourId).addClass('bg-success');
        }
        else if (timeArray[i] < hour) {
            $(hourId).addClass('bg-danger');
        }
    }
}

var storeTask = function () {
    var task = $(this).siblings('.description').val();
    var hourInfo = $(this).siblings('.description').attr('id');

    console.log(hourInfo)
    console.log('Button Clicked')

    taskInfo = localStorage.setItem(hourInfo, JSON.stringify(task));
}

saveButton.on('click', storeTask);
timeOfDay();
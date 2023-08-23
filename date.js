var fromtomorrow = new Date();
fromtomorrow.setDate(fromtomorrow.getDate() + 1);

var fivedaysahead = new Date();
fivedaysahead.setDate(fivedaysahead.getDate() + 6);

var appointmentselect = [];
for (; fromtomorrow <= fivedaysahead; fromtomorrow.setDate(fromtomorrow.getDate() + 1)) {
    console.log(fromtomorrow);
    appointmentselect.push(new Date(fromtomorrow));
}

var output = '';
for(let elem of appointmentselect) {
    let val = appointmentselect.toISOString().split('T')[0]

    let txt = appointmentselect.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
    ;

    console.log(val);
    console.log(txt);
}
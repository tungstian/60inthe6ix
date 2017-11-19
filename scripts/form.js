var yes = document.getElementById('rsvp-yes');
var no = document.getElementById('rsvp-no');

var rec = document.getElementById('recipient');
var guest = document.getElementById('guest');
var submit = document.getElementById('submit');

var recH = rec.offsetHeight + "px";
var guestH = guest.offsetHeight + "px";
var submitH = submit.offsetHeight + "px";

// rec.style.height = "0px";
// guest.style.height = "0px";
// submit.style.height = "0px";

function isChecked(elem) {
	var checkedElement = elem.id;
	if (checkedElement == "rsvp-yes") { 
		rec.style.height = recH;
		guest.style.height = guestH;
		submit.style.height = submitH;
	}
	if (checkedElement == "rsvp-no") { 
		rec.style.height = recH;
		guest.style.height = "0";
		submit.style.height = submitH;
	}
}



yes.addEventListener("click", function(){
	isChecked(this);
}, false );
no.addEventListener("click", function(){
	isChecked(this);
}, false );

$('input[type=radio]').change(function() {
    // When any radio button on the page is selected,
    // then deselect all other radio buttons.
$('input[type=radio]:checked').not(this).prop('checked', false);
});

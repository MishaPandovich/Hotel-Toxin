function dataPicker() {
	$('#datepicker').datepicker({
		range: true,
	  // inline: true,
		clearButton: true,
		minDate: new Date()
	});

	var myDatepicker = $('#datepicker').datepicker().data('datepicker'); 
	var datepickerInput = document.querySelector('#datepicker');
	var datepickerInputGo = document.querySelector('#datepicker-go');

	datepickerInputGo.onclick = function() {
		myDatepicker.show();
	};

	document.querySelector('.datepicker--content').addEventListener('click', ({ target }) => {
		if (target.tagName === 'DIV') { // более уточнить
      let valueDataPicker = $('#datepicker').val();
			let arrayValueDataPicker = valueDataPicker.split(',');

			datepickerInput.value = arrayValueDataPicker[0];
			if (arrayValueDataPicker[1] === undefined) { datepickerInputGo.value = 'ДД.ММ.ГГГГ'; } 
			else { datepickerInputGo.value = arrayValueDataPicker[1];}
    }
	});

	function addButtonInDatePicker() {
		let parentElem = document.querySelector('.datepicker--buttons');
		let childElem  = document.createElement('span');
				childElem.textContent = 'применить';
				childElem.classList.add('datepicker--button--use');

		parentElem.appendChild(childElem);

		document.querySelector('.datepicker--button--use').addEventListener('click', function() {
			myDatepicker.hide();
		});
	}

	addButtonInDatePicker();
};

// переписать на тот случай, 
dataPicker();
let initialState = {
	tasksToSolve: [
		{
			id: 1,
			description: 'Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в четвертый инпут.'
		},
		{
			id: 2,
			description: 'Даны N инпутов с классом .num и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац с id="result".'
		},
		{
			id: 3,
			description: 'Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.'
		},
		{
			id: 4,
			description: 'Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел'
		},
		{
			id: 5,
			description: 'Дан инпут. В него вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в отдельные инпуты'
		},
		{
			id: 6,
			description: 'Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в том же инпуте).'
		},
	],
	sourcePage: 'http://old.code.mu/tasks/javascript/practice/praktika-javascript-dlya-novichkov.html'
}

const taskReducer = (state = initialState, action) => {
	switch (action.type) {

	}
	return state
}


export default taskReducer
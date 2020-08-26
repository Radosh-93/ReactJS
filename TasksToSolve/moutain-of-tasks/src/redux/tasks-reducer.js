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
		{
			id: 7,
			description: 'Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.'
		},
		{
			id: 8,
			description: 'Дан инпут. В него вводится текст. По потери фокуса узнайте количество символов в самом длинном слове в этом тексте.'
		},
		{
			id: 9,
			description: 'Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.'
		},
		{
			id: 10,
			description: 'Дан инпут. В него вводится год рождения пользователя. По нажатию на кнопку выведите в абзац ниже сколько пользователю лет. '
		},
		{
			id: 11,
			description: 'Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.'
		},
		{
			id: 12,
			description: 'Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).'
		},
		{
			id: 13,
			description: 'Дан инпут. В него вводится число. Проверьте по вводу, что это число содержит внутри себя цифру 3.'
		},
		{
			id: 14,
			description: 'Даны N абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.'
		},
		{
			id: 15,
			description: 'Даны N абзацев с числами. По нажатию на кнопку выведите эти числа в инпут через запятую в порядке возрастания.'
		},
		{
			id: 16,
			description: 'Даны ссылки. По загрузке страницы добавьте в конец каждой ссылки ее href в круглых скобках.'
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
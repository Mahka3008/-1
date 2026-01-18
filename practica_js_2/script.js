let userEnter = prompt('Введите число от одного до ста.')

if (userEnter === null) {
	alert('пока пока')
} else {
	if (userEnter <= 100 && userEnter >= 1) {
		userEnter = parseInt(userEnter)
		console.log(userEnter)
		let grid = prompt('Введите символ.')
		if (grid === null || grid === '') {
			for (let wow = 1; wow <= userEnter; wow++) {
        let row = " "
        for (let a = 0; a < userEnter; a++) {
          if ((wow + a) % 2 === 0) {
            row += "* ";
          } else {
            row += " ";
          }
        }
        console.log(row);
			}
		} else {
			for (let wow = 1; wow <= userEnter; wow++) {
        let row = " "
        for (let a = 0; a < userEnter; a++) {
          if ((wow + a) % 2 === 0) {
            row += grid;
          } else {
            row += " ";
          }
        }
        console.log(row);
			}
		}
	} else {
		if (userEnter === null) {
			alert('пока пока')
		} else {
			while (userEnter > 100 || isNaN(userEnter) || userEnter < 1) {
				userEnter = prompt('Попробуйте ещё раз ввести чсило от однго до ста.')
				userEnter = parseInt(userEnter)
			}
			console.log(userEnter)
		}
	}
}

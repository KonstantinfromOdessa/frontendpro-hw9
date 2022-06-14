let avgGroupMark = 0;
		let sum = 0;
		let diff = 0;
		const students = studentsMock.getStudentList(5);

		students.forEach((item) => {
		    item.marks.forEach((element) => {
		 	let diff = students.length * item.marks.length
		 		sum += element;
		 		avgGroupMark = sum / diff;
		 	})
		 });


		console.log(students);
		console.log(avgGroupMark);
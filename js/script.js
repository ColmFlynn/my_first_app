function calculateBmi() {
	
	let weight = $("#weight").val();
	
	let height = $("#height").val();
	
	if(weight > 0 && height > 0){	
		let finalBmi = weight/(height/100*height/100)
		//document.bmiForm.bmi.value = finalBmi
		$("#bmi").val(finalBmi);
		
		switch(true){
		
			case(finalBmi <18.5):
				$("#meaning").val("That you are too thin.")
				break;
			case(finalBmi > 18.5 && finalBmi < 25):
				$("#meaning").val("That you are healthy.")
				break;
			case(finalBmi <25):
				$("#meaning").val("That you are overweight.")
				break;
			default:
			{
				alert($("#meaning").val("please enter correct details"))
				break;
			}
		
		}
	}
}
function validateForm(){
	//#lastname, #input-email,#input-password
	validarCampoTexto($("#name"));
	validarCampoTexto($("#lastname"));
}

function validarCampoTexto(input){
	var mensaje="";
	if($(input).val()==""){
		mensaje+="Campo obligatorio.";
	} else{
		if ($(input).val().length>30){
			mensaje+= "Debe tener menos de 30 caracteres.";
		} 

		if ($(input).val().charAt(0).toUpperCase()!=$(input).val().charAt(0)){
			mensaje+= "La primera letra debe ir en mayúscula.";
		}

		if(!($(input).val().match(/^[a-zA-Z]+$/))){
			mensaje+="Solo se permiten letras.";
		}
	}

	$(input).siblings().filter("span").remove();

	var span_mensaje = $("<span>" + mensaje + "</span>");
	$(input).parent().append(span_mensaje);
}
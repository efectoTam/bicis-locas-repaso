function validarCampoTexto(input){
	var mensaje = "";		
	if($(input).val() == ""){
		mensaje += "Campo Obligatorio"	
	}else{
		if($(input).val().length > 30){
			mensaje += "Debe tener menos de 30 caracteres";
		}
		if($(input).val().charAt(0).toUpperCase() != $(input).val().charAt(0)){
			mensaje += "Primera letra en mayúscula";
		}
		if( ($(input).val().match(/^[a-zA-Z]+$/))){
			mensaje += "solo debo tener letras";
		}
	}

	$(input).siblings().filter("span").remove();
	var span_nombre = $("<span>" + mensaje + "</span>");
	$(input).parent().append(span_nombre);
}

function validarCampoEmail(input){
	var mensaje = "";
	if($(input).val() == ""){
		mensaje += "Campo Obligatorio";
	}else{
		if(!($(input).val().match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/))){
			mensaje += "Formato Inválido";
		}
	}
	$(input).siblings().filter("span").remove();
	var span_nombre = $("<span>" + mensaje + "</span>");
	$(input).parent().append(span_nombre);
}

function validarCampoContraseña(input){
	var mensaje = "";
	if($(input).val() == ""){
		mensaje += "Campo Obligatorio";
	} else{
		if($(input).val().length < 6){
			mensaje += "Debe tener más de 6 caracteres";
		}

		if($(input).val()=="password"||123456||098754){
			mensaje += "El campo contraseña no puede ser igual a 'password' o '123456' o '098754'";
		}
	}
	$(input).siblings().filter("span").remove();
	var span_nombre = $("<span>" + mensaje + "</span>");
	$(input).parent().append(span_nombre);
}

function validarCampoCheckbox(input){
	var mensaje = "";
	if($(input).val() /**/){
		mensaje += "Debe seleccionar al menos un tipo de bici.";
	}
	$(input).siblings().filter("span").remove();
	var span_nombre = $("<span>" + mensaje + "</span>");
	$(input).parent().append(span_nombre);
}



$( ".form-signup" ).submit(function(e) {
  e.preventDefault();
  $(".form-signup *").filter(":input").each(function(){
  	console.log($(this).attr('type'));
  	if($(this).attr('type') == 'text'){
  		validarCampoTexto($(this));
  	}else if($(this).attr('type') == 'email'){
  		validarCampoEmail($(this));
  	}else if($(this).attr('type') == 'password'){
  		validarCampoContraseña($(this));
  	}else if($(this).attr('type') =='checkbox'){
  		validarCampoCheckbox($(this));
  	}
  })
});
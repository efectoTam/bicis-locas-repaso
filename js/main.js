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
		if(!($(input).val().match(/^[a-zA-Z]+$/))){
			mensaje += "Solo debe tener letras";
		}
	}

	$(input).siblings().filter("span").remove();
	var span_nombre = $("<span>" + mensaje + "</span>");
	$(input).parent().append(span_nombre);
}

function validarTwitter(input){
	var mensaje = "";
	if($(input).val() == ""){
		mensaje += "Campo Obligatorio";
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

function validarCampoContrasena(input){
	var mensaje = "";
	if($(input).val() == ""){
		mensaje += "Campo Obligatorio";
	} else{
		if($(input).val().length < 6){
			mensaje += "Debe tener más de 6 caracteres";
		}

		if($(input).val()=="password"||$(input).val()==123456||$(input).val()==098754){
			mensaje += "El campo contraseña no puede ser igual a 'password' o '123456' o '098754'";
		}
	}
	$(input).siblings().filter("span").remove();
	var span_nombre = $("<span>" + mensaje + "</span>");
	$(input).parent().append(span_nombre);
}

function validarSelect(selected){
	var mensaje = "";
	if ($(".form-control:eq(4)").val()==0){
		mensaje += "Debes seleccionar un elemento de la lista";
	}
	$(".form-control:eq(4)").siblings().filter("span").remove();
	var span_nombre = $("<span>" + mensaje + "</span>");
	$(".form-control:eq(4)").parent().append(span_nombre);
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
  		validarCampoContrasena($(this));
  	}else if($(this).attr('type') == 'twitter'){
  		validarTwitter($(this));
  	}
  })
  $(".form-control *").filter(":selected").each(function(){
  		validarSelect($(this));
  })
});


/*function validarCampoCheckbox(input){
	var mensaje = "";
	if(!($(input).is(':checked'))) {  
    	 
    }
}*/

/*else if($(this).attr('type') =='checkbox'){
	validarCampoCheckbox($(this));
}*/
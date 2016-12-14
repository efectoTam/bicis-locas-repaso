function validarCampoTexto(input){
	var mensaje = "";		
	if($(input).val() == ""){
		mensaje += "Campo Obligatorio"	
	}else{
		if($(input).val().length > 30){
			mensaje += "Debe tener menos de 30 caracteres "
		}
		if($(input).val().charAt(0).toUpperCase() != $(input).val().charAt(0)){
			mensaje += "Primera letra en mayúscula "
		}
		if( ($(input).val().match(/^[a-zA-Z]+$/))){
			mensaje += "solo debo tener letras"
		}
	}

	$(input).siblings().filter("span").remove();
	var span_nombre = $("<span>" + mensaje + "</span>");
	$(input).parent().append(span_nombre);
}
function validarCampoEmail(input){
	var mensaje = "";
	if($(input).val() == ""){
		mensaje += "Campo Obligatorio"	
	}else{
		if(!($(input).val().match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/))){
			mensaje += "Formato Inválido"
		}
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
  		console.log("Hola");
  		validarCampoEmail($(this));
  	}
  })
});
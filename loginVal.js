$(init)
function init(){
    $("#btn").on("click", function()  {
        $("#formulario").validate
        ({
        rules:
        {
        correo:{required:true, email:true, minlength:8, maxlength:80},
        nombre:{required:true},
        cp:{required:true, number:true,minlength:5, maxlength:5},
        fecha:{required:true, date:true}     
        }, 
        messages:
        {
        correo:{required:"El correo es requerido", email:"El correo es invalido", minlength:"el minimo de caracteres son 8", maxlength:"el maximo de caracteres son 80"},
        nombre:{required:"El nombre es requerido"},
        cp:{required:"El codigo postal es requerido", number:"Ingrese solo numeros",minlength:"digitos insuficientes", maxlength:"el maximo numero de digistos son 5"},
        fecha:{required:"El campo es requerido", date:"tipo de dato erroneo"}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        }, 
        
           errorElement:"div",
           errorClass:"invalid",
           errorPlacement:function(error, element){
               error.insertAfter(element)
           },
           submitHandler:function(form){

            saveData();
           }
        });
        
   });
}
function saveData(){

    alert("El formulario es valido y guardado");
}
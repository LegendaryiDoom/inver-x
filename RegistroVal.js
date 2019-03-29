$(init)
function init(){
    $("#btn").on("click", function()  {
        $("#formulario").validate
        ({
        rules:
        {
        nombre:{required:true},
        apellidos:{required:true},
        sex:{required:true},
        fecha:{required:true, date:true},
        rfc:{required:true,minlength:16,maxlength:16},
        correo:{required:true, email:true, minlength:8, maxlength:80},
        pwd:{required:true, maxlength:25},
        mun:{required:true},
        cp:{required:true,number:true,minlength:5,maxlength:5},
        }, 
        messages:
        {
        nombre:{required:'El nombre es requerido'},
        apellidos:{required:'El apellido es requerido'},
        sex:{required:"El Campo es requerido"},
        fecha:{required:'La fecha es requerida'},
        rfc:{required:"El campo es requerido",minlength:"Campos insuficientes solo se aceptan 16 caracteres",maxlength:"Numero de campos exedido solo se aceptan 16 caracteres"},
        correo: {required:'El correo es requerido', email:'El formato de correo es incorrecto', minlength:'Escriba minimo 8 caracteres', maxlength:'Solo se permiten 80 caracteres'},
        pwd:{required:'La contraseña es requerida', minlength:'Se necesitan minimo 8 caracteres', maxlength:'Se necesitan maximo 25 caracteres'},
        mun:{required:"El campo requerido"},
        cp:{required:"El campo es requerido",number:"Tipo de dato invalido",minlength:"Este campo solo requiere 5 caracteres",maxlength:"Este campo solo requiere 5 caracteres "},
        }, 
        
           errorElement:"div",
           errorClass:"invalid",
           errorPlacement:function(error, element){
               error.insertAfter(element)
           },
           submitHandler:function(form){

            Savedata();
           }
        });
        
   });
}
function saveData(){

    alert("El formulario es valido y guardado");
}
/* Para hacer que al aplastar registrarse aparesca el formulario de registro*/
/* TonggleClass: Si la clase está presente, se elimina/ Si la clase no está presente, se agrega. */
/* Show: se utiliza para mostrar un elemento que ha sido ocultado previamente.*/
$('#show').click(function(){
 $('.background-black').tonggleClass('display');
});

$('.background-black').click(function(){
    $('.background-black').tonggleClass('display');
});

/* Para que cuando el cursor lo aplaste cambide de color celeste despues de 3 milisegundos */
/* Focus: para enfocar un elemento.*/
$('#one').focus(function(){
 $('.content-one').css({
    "border-bottom": "2px solid rgb(29, 161, 242)",
    "transition": "all .3s"
 })

 $('.content-one label').css({
    "color":  "rgb(29, 161, 242)",
    "transition": "all .3s"
 })
});

$('#two').focus(function(){
    $('.content-two').css({
       "border-bottom": "2px solid rgb(29, 161, 242)",
       "transition": "all .3s"
    })
   
    $('.content-two label').css({
       "color":  "rgb(29, 161, 242)",
       "transition": "all .3s"
    })
});

$('#three').focus(function(){
    $('.content-three').css({
       "border-bottom": "2px solid rgb(29, 161, 242)",
       "transition": "all .3s"
    })
   
    $('.content-three label').css({
       "color":  "rgb(29, 161, 242)",
       "transition": "all .3s"
    })
});


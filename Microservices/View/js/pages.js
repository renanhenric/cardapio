// Adicionar e remover classes HIDDEN, SELECTED e AlturaAuto
// BARRA LATERAL FIXA -
$(function(){

    $('#i-sobre').click(function(i){
      $(this).toggleClass('selected')
      $('#i-lan').removeClass('selected')
      $('#i-bebidas').removeClass('selected')
      $('#i-pedidos').removeClass('selected')
      
      
      $("#lanches").addClass("hidden")
      $("#bebidas").addClass("hidden")
      $("#pedido").addClass("hidden")
      $("#adicionais").addClass("hidden")
 
      $('#sobre').removeClass('hidden');
      $(this).addClass('active');
 
    });
 }); 

 
 $(function(){
    $('#i-lan').click(function(i){
      $(this).toggleClass('selected')
      $('#i-sobre').removeClass('selected')
      $('#i-bebidas').removeClass('selected')
      $('#i-pedidos').removeClass('selected')

       $("#sobre").addClass("hidden")
       $("#bebidas").addClass("hidden")
       $("#pedido").addClass("hidden")
       $("#adicionais").addClass("hidden")
 
        $('#lanches').removeClass('hidden');
        $(this).addClass('active');

 
    });
 });     
 
 $(function(){
 $('#i-bebidas').click(function(i){
   $(this).toggleClass('selected')
   $('#i-sobre').removeClass('selected')
   $('#i-lan').removeClass('selected')
   $('#i-pedidos').removeClass('selected')

    $("#lanches").addClass("hidden")
    $("#sobre").addClass("hidden")
    $("#pedido").addClass("hidden")
    $("#adicionais").addClass("hidden")
 
     $('#bebidas').removeClass('hidden');
     $(this).addClass('active');
 
 });
 }); 
 
 
 $(function(){
 $('#i-pedidos').click(function(i){
    $(this).toggleClass('selected')
    $('#i-sobre').removeClass('selected')
    $('#i-lan').removeClass('selected')
    $('#i-bebidas').removeClass('selected')

    $("#lanches").addClass("hidden")
    $("#sobre").addClass("hidden")
    $("#adicionais").addClass("hidden")
    $("#bebidas").addClass("hidden")
 
     $('#pedido').removeClass('hidden');
     $(this).addClass('active');
 
 });
 }); 
 
// BOTÃO + DE ADICIONAIS -


   $(".btnAdd1").click(function(i){
     $('#adicionais1').toggleClass('hidden')
     $('.item-info-1').toggleClass('alturaAuto')
    })

    $(".btnAdd2").click(function(i){
      $('#adicionais-2').toggleClass('hidden')
      $('#item-info-2').toggleClass('alturaAuto')
     })

     $(".btnAdd3").click(function(i){
      $('#adicionais-3').toggleClass('hidden')
      $('.item-info-3').toggleClass('alturaAuto')
      
     })

     $(".btnAdd4").click(function(i){
      $('#adicionais-4').toggleClass('hidden')
      $('.item-info-4').toggleClass('alturaAuto')
 
     })

     $(".btnAdd5").click(function(i){
      $('#adicionais-5').toggleClass('hidden')
      $('.item-info-5').toggleClass('alturaAuto')

     })

     $(".btnAdd6").click(function(i){
      $('#adicionais-6').toggleClass('hidden')
      $('.item-info-6').toggleClass('alturaAuto')

     })

     




 



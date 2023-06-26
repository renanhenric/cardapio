    //Validações

    $(document).ready(function () {
      $.ajax({
        url: '/View/cardapio',
        method: 'GET',
        success: function (data) {
          console.log(data); 
   
          valida();
        },
        error: function (error) {
          console.log(error);
        }
      });
    });


    function Vnome(){
        var nome =form_pedido.nome.value
        if(nome==""){
        alert("Por favor, informe seu nome completo.")
        return false
     }
     var regex=/[0-9]/
        if(regex.test(nome)==true){
           alert("Seu nome não pode ter números.")
           return false
        }
  
     var regex=/[!-@]/
     if(regex.test(nome)==true){
        alert("nao pode")
     }
  
     if(nome.length>=30){
        alert("Por favor, digite até 30 caracteres!")
     }
  
     if(nome.length<=2){
        alert("Digite seu nome.")
     }
  
     }
     function Vendereco(){
        var endereco =form_pedido.endereco.value
        if(endereco==""){
        alert("Por favor, informe seu endereço.")
     }
        var regex=/[0-9]/
        if(regex.test(endereco)==true){
           alert("Seu endereço não pode ter numeros.")
        }
     }
  
     function Vnumero(){
        var numero =form_pedido.numero.value
        if(numero==""){
           alert("Informe o número da sua casa ou apartamento.")
        }
        var regex=/[A-za-z]/
        if(regex.test(numero)==true){
           alert("Coloque apenas números.")
        }
        if(numero.length>=5){
           alert("digite um numero válido")
        }
     }
     function Vbairros(){
        const Bairros = document.querySelectorAll("option")
        if(Bairros[0].selected==true){
           alert("Selecione um bairro, por favor!")
     }
         
     } 
     function radio(){
     var radios= document.getElementsByName("pagamento")
      if(radios[0].checked== false && radios[1].checked==false&&radios[2].checked==false){
        alert("Escolha uma forma de pagamento.")
        radios.focus()
        return false
     }
  }     
  
  function valida(){
     this.Vnome()
     this.Vbairros()
     this.Vendereco()
     this.Vnumero()
     this.radio()
  }


  
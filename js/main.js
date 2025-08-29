// Tudo só inicia quando o HTML estiver pronto
$(function () {
  // Carousel
  $('#carousel-imagens').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true
  });

  // Máscaras
  $('#telefone').mask('(00) 00000-0000', { placeholder: '(00) 00000-0000' });
  $('#cpf').mask('000.000.000-00', { placeholder: '000.000.000-00' });
  $('#cep').mask('00000-000', { placeholder: '00000-000' });

  // Validação
  $('#form').validate({
    // mensagens_pt_BR já traduz as mensagens padrão
    rules: {
      nome: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true,
        minlength: 15 // (00) 00000-0000
      },
      cpf: {
        required: true,
        minlength: 14 // 000.000.000-00
      },
      endereco: {
        required: true,
        minlength: 5
      },
      cep: {
        required: true,
        minlength: 9 // 00000-000
      }
    },
    submitHandler: function (form) {
      alert('Sua requisição foi enviada para análise. Parabéns pela aquisição!');
      form.reset();
      return false; // evita recarregar a página
    },
    invalidHandler: function (event, validator) {
      if (validator.numberOfInvalids() > 0) {
        alert('Por favor, preencha os campos corretamente para prosseguir com a compra.');
      }
    },
    errorElement: 'label',
    errorClass: 'error'
  });
});

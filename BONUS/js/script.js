// Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

$(document).ready(function() {

crezioneQuadrati(36);


  $(document).on('click', '.quadrato', function() {
    var quadratoSelezionato = $(this);

    if (quadratoSelezionato.hasClass("giallo") == false && quadratoSelezionato.hasClass("verde") == false) {
      $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function(data, stato) {
          console.log(data);
          $(quadratoSelezionato).html(data.response);
          if (data.response <= 5) {
            $(quadratoSelezionato).addClass("giallo");


          } else if (data.response > 5) {
            $(quadratoSelezionato).addClass("verde");
          }


        },
        error: function(richiesta, stato, errore) {
          alert("E' avvenuto un errore. " + errore);
        }
      });
    } else {
      alert("hai già cliccato su questo quadrato, scegline uno vuoto");
    }

  });
});


function crezioneQuadrati(numeroQuadrati) {
  for (var i = 0; i < numeroQuadrati; i++) {

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var contenuto = {};

    var html = template(contenuto);
    $("#cont").append(html);
  }
}

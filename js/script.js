jQuery(function($) {
  $('.save-as-pdf').click(function () {
    var doc = new jsPDF();
    var file_name = $('title').text();


    var specialElementHandlers = {
      '#ignorePDF': function (element, renderer) {
        return true;
      }
    };

    doc.fromHTML($('.container').html(), 15, 15, {
      'width': 170,
      'elementHandlers': specialElementHandlers
    });

    doc.save(file_name + ".pdf");
  });
});
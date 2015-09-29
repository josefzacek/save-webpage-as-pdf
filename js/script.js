jQuery(function($) {
  $(".save-as-pdf").on('click', function(){
    var file_name = $('title').text();
    var doc = new jsPDF();
    doc.fromHTML($('body').get(0), 15, 15, {
        'width': 170
    });
    doc.save(file_name + ".pdf");
});
});
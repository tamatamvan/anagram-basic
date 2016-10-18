$('#newmemo').val('New Text');
$('#newmemo').trigger('autoresize');
$(document).ready(function() {
   $('input#input_text, textarea#newmemo').characterCounter();
 });

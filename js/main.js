if (typeof Storage != 'undefined' && !!localStorage.getItem('phase') && !!localStorage.getItem('app')) {
  $('#phase').val(localStorage.getItem('phase'));
  $('#app').val(localStorage.getItem('app'));
}

$('#formCours').submit(function(e) {
  e.preventDefault();
  var lien = 'http://etsmtl.ca/Etudiants-actuels/Baccalaureat/Cours-horaires-1er-cycle/Fiche-de-cours?Sigle=' + $('#sigleCours').val();
  window.location = lien;
});

$('#formBandwidth').submit(function(e) {
  e.preventDefault();
  var residence = {
    phase: $('#phase').val(),
    app: $('#app').val()
  };

  if (typeof Storage != 'undefined') {
    localStorage.setItem('phase', residence.phase);
    localStorage.setItem('app', residence.app);
  }

  window.location = 'http://bw.etsmtl.me/' + residence.phase + '/' + residence.app;
});

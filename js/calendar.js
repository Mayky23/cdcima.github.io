
// download calendar

  document.getElementById('calendarLink').addEventListener('click', openPDF);

  function openPDF() {
      var pdfWindow = window.open('', '_blank');
      pdfWindow.document.write("<iframe width='100%' height='100%' src='calendario_2025_CIMA.pdf'></iframe>");
  }


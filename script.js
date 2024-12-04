function toggleDetails(id) {
    const detailElement = document.getElementById(id);
  
    if (detailElement.classList.contains('hidden')) {
      detailElement.classList.remove('hidden');
      detailElement.classList.add('visible');
    } else {
      detailElement.classList.remove('visible');
      detailElement.classList.add('hidden');
    }
  }
  
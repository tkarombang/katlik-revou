const sectionLuas = document.getElementById('luas-segitiga');
const sectionKeliling = document.getElementById('keliling-segitiga');

function ubahText() {
  const change = document.querySelector('.change');

  if (change.innerHTML === 'Luas Segitiga') {
    change.innerHTML = 'Keliling Segitiga';
    sectionKeliling.style.display = 'none';
    sectionLuas.style.display = 'flex';
  } else {
    change.innerHTML = 'Luas Segitiga'
    sectionKeliling.style.display = 'flex';
    sectionLuas.style.display = 'none';
  }
}
const sectionLuas = document.getElementById('luas-segitiga');
const sectionKeliling = document.getElementById('keliling-segitiga');
const change = document.querySelector('.change');
const btnKeliling = document.getElementById('btn-keliling');
const resultKeliling = document.querySelector('.result-kel');
const btnLuas = document.getElementById('btn-luas');
const resultLuas = document.querySelector('.result-l');
const btnReset = document.querySelectorAll('#reset');

// Button Reset
btnReset.forEach((btn) => {
  btn.onclick = (e) => {
    resultKeliling.innerHTML = '';
    resultLuas.innerHTML = '';
  }
})

// event when click button calculate Keliling Segitiga
btnKeliling.onclick = (e) => {
  e.preventDefault();
  // form input
  let sisiKe1 = parseFloat(document.getElementById('sisiKe-1').value);
  let sisiKe2 = parseFloat(document.getElementById('sisiKe-2').value);
  let sisiKe3 = parseFloat(document.getElementById('sisiKe-3').value);
  const keliling = sisiKe1 + sisiKe2 + sisiKe3;
  resultKeliling.innerHTML = keliling;
}

// event when click button calculate Luas Segitiga
btnLuas.onclick = (e) => {
  e.preventDefault();
  let alas = parseFloat(document.getElementById('alas').value);
  let tinggi = parseFloat(document.getElementById('tinggi').value);
  const luas = 0.5 * alas * tinggi;
  resultLuas.innerHTML = luas;
}

change.onclick = (e) => {
  e.preventDefault();
  ubahText();
}

function ubahText() {
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
// ============================================================
//  ✏️  WACHTWOORD AANPASSEN — ALLEEN DIT HOEF JE TE WIJZIGEN
// ============================================================

const WACHTWOORD = "oranjestad2025";

// ============================================================
//  LOGICA — NIET AANPASSEN
// ============================================================

function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  const error = document.getElementById('errorMsg');

  if (input === WACHTWOORD) {
    sessionStorage.setItem('orpAccess', 'true');
    window.location.href = 'dashboard.html';
  } else {
    error.classList.add('visible');
    document.getElementById('passwordInput').value = '';
    document.getElementById('passwordInput').focus();
  }
}

// Enter-toets werkt ook
document.getElementById('passwordInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') checkPassword();
});

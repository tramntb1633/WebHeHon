function scrollToRegister() {
  document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
}

function handleSubmit(e) {
  e.preventDefault();
  alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm.");
}

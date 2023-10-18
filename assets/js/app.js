var password = document.getElementById('fakePassword');
      var icon = document.getElementById('icon');
      var hide = document.getElementById("hide")

      showHidePassword = () => {
        if (password.type == 'password') {
          password.setAttribute('type', 'text');
            hide.src="/assets/image/view.png"
        } else {
            hide.src="/assets/image/hide.png"
          password.setAttribute('type', 'password');
        }
      };
      icon.addEventListener('click', showHidePassword);
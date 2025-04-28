// File: js/auth.js

// Function to update UI after login
function updateUIAfterLogin(username) {
  // Get the container that holds login/register buttons
  const authButtonsContainer = document.querySelector('.d-flex.gap-2')

  if (authButtonsContainer) {
    // Replace login/register buttons with a dropdown button showing username
    authButtonsContainer.innerHTML = `
      <div class="dropdown">
        <button class="btn btn-yellow dropdown-toggle" type="button" id="userDropdown" 
                data-bs-toggle="dropdown" aria-expanded="false">
          ${username}
        </button>
        <ul class="dropdown-menu" aria-labelledby="userDropdown">
          <li><a class="dropdown-item" href="./profile.html">My Profile</a></li>
          <li><a class="dropdown-item" href="./notes.html">My Notes</a></li>
          <li><a class="dropdown-item" href="./teams.html">My Teams</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#" onclick="logoutUser(); return false;">Logout</a></li>
        </ul>
      </div>
    `

    // Ensure Bootstrap dropdown is initialized if using Bootstrap 5
    if (typeof bootstrap !== 'undefined') {
      const dropdownElementList = [].slice.call(
        document.querySelectorAll('.dropdown-toggle')
      )
      dropdownElementList.map(function (dropdownToggleEl) {
        return new bootstrap.Dropdown(dropdownToggleEl)
      })
    }
  }
}

// Function to handle logout
function logoutUser() {
  // Clear session/local storage
  sessionStorage.removeItem('isLoggedIn')
  sessionStorage.removeItem('userName')
  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('userName')

  // Restore the original login/register buttons
  const authButtonsContainer = document.querySelector('.d-flex.gap-2')
  if (authButtonsContainer) {
    authButtonsContainer.innerHTML = `
      <button class="btn btn-purple" id="login-btn">Login</button>
      <button class="btn btn-yellow" id="register-btn">Register</button>
    `

    // Re-attach event listeners to the new buttons
    attachModalEventListeners()
  }

  // Optional: redirect to homepage if needed
  // window.location.href = "index.html";
}

// Function to check login status
function checkLoginStatus() {
  // Check if user is logged in from session or local storage
  const isLoggedIn =
    sessionStorage.getItem('isLoggedIn') || localStorage.getItem('isLoggedIn')
  const userName =
    sessionStorage.getItem('userName') ||
    localStorage.getItem('userName') ||
    'User'

  if (isLoggedIn === 'true') {
    // Update UI to show username instead of login/register buttons
    updateUIAfterLogin(userName)
  } else {
    // Make sure modal event listeners are attached
    attachModalEventListeners()
  }
}

// Function to attach event listeners to modal buttons
function attachModalEventListeners() {
  // Get button elements
  const loginBtn = document.getElementById('login-btn')
  const registerBtn = document.getElementById('register-btn')
  const getStartedBtn = document.getElementById('get-started-btn')

  // Only attach if the buttons exist
  if (loginBtn) loginBtn.addEventListener('click', openLoginModal)
  if (registerBtn) registerBtn.addEventListener('click', openRegisterModal)
  if (getStartedBtn) getStartedBtn.addEventListener('click', openRegisterModal)
}

// Function to open login modal with fallback
function openLoginModal() {
  const loginModal = document.getElementById('login-modal')
  if (loginModal) {
    loginModal.classList.add('show')
  } else if (typeof window.openLoginModal === 'function') {
    window.openLoginModal()
  } else {
    console.error('Login modal not found')
  }
}

// Function to open register modal with fallback
function openRegisterModal() {
  const registerModal = document.getElementById('register-modal')
  if (registerModal) {
    registerModal.classList.add('show')
  } else if (typeof window.openRegisterModal === 'function') {
    window.openRegisterModal()
  } else {
    console.error('Register modal not found')
  }
}

// Setup form submission handlers
function setupFormHandlers() {
  // Add login form submission handler
  const loginForm = document.querySelector('#login-modal form')
  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault()

      // Get form values
      const emailInput = document.getElementById('email')
      const passwordInput = document.getElementById('password')
      const rememberCheckbox = document.getElementById('remember')

      if (!emailInput || !passwordInput) {
        console.error('Login form inputs not found')
        return
      }

      const email = emailInput.value
      const password = passwordInput.value
      const rememberMe = rememberCheckbox ? rememberCheckbox.checked : false

      // For demo purposes, assume login is successful
      // Close modal using the available method
      if (typeof window.closeLoginModal === 'function') {
        window.closeLoginModal()
      } else {
        const loginModal = document.getElementById('login-modal')
        if (loginModal) loginModal.classList.remove('show')
      }

      // Store login information
      if (rememberMe) {
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('userName', email.split('@')[0]) // Using part of email as username
      } else {
        sessionStorage.setItem('isLoggedIn', 'true')
        sessionStorage.setItem('userName', email.split('@')[0])
      }

      // Update UI
      updateUIAfterLogin(email.split('@')[0])
    })
  }

  // Add registration form submission handler
  const registerForm = document.querySelector('#register-modal form')
  if (registerForm) {
    registerForm.addEventListener('submit', function (event) {
      event.preventDefault()

      // Get form values safely
      const firstNameInput = document.getElementById('first-name')
      const lastNameInput = document.getElementById('last-name')
      const emailInput = document.getElementById('reg-email')
      const passwordInput = document.getElementById('reg-password')

      if (!firstNameInput || !emailInput || !passwordInput) {
        console.error('Registration form inputs not found')
        return
      }

      const firstName = firstNameInput.value
      const lastName = lastNameInput ? lastNameInput.value : ''
      const email = emailInput.value
      const password = passwordInput.value

      // For demo purposes, assume registration is successful
      // Close modal using the available method
      if (typeof window.closeRegisterModal === 'function') {
        window.closeRegisterModal()
      } else {
        const registerModal = document.getElementById('register-modal')
        if (registerModal) registerModal.classList.remove('show')
      }

      // Store login information
      sessionStorage.setItem('isLoggedIn', 'true')
      sessionStorage.setItem('userName', firstName)

      // Update UI
      updateUIAfterLogin(firstName)
    })
  }
}

// Call this function when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Check if we should delay the execution slightly to ensure all elements are loaded
  setTimeout(function () {
    checkLoginStatus()
    setupFormHandlers()
  }, 100) // Small delay to ensure DOM elements are fully loaded
})

// Make functions available globally
window.logoutUser = logoutUser
window.updateUIAfterLogin = updateUIAfterLogin
window.checkLoginStatus = checkLoginStatus

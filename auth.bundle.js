webpackJsonp([4],{10:function(module,exports,__webpack_require__){"use strict";eval('\n\n//preloader (import "./modules/preloader"; выдает ошибку)\nvar preloaderContainer = document.querySelector(".preloader"),\n    preloaderAnim = document.querySelector(".preloader__icon");\n\nwindow.onload = function () {\n  preloaderAnim.addEventListener("animationiteration", function (e) {\n    preloaderAnim.classList.remove("preloader__animation");\n    addAnimFinish();\n  }, false);\n};\n\nfunction addAnimFinish() {\n  setTimeout(function () {\n    preloaderAnim.classList.add("preloader--done");\n    preloaderContainer.style.opacity = 0;\n  }, 100);\n  setTimeout(function () {\n    preloaderContainer.style.display = "none";\n  }, 1100);\n}\n//finish preloader\n\nvar authBtn = document.querySelector("#welcome__btn-auth");\nvar welcomeWrapper = document.querySelector(".welcome");\nvar welcomeBtn = document.querySelector("#welcome__btn");\n\nauthBtn.addEventListener("click", function (ev) {\n  ev.preventDefault();\n  welcomeBtn.style.display = "block";\n  setTimeout(function () {\n    welcomeWrapper.classList.toggle("welcome__card--flipped");\n  }, 1);\n});\n\nwelcomeBtn.addEventListener("click", function (ev) {\n  var _this = this;\n\n  event.preventDefault();\n  welcomeWrapper.classList.toggle("welcome__card--flipped");\n  setTimeout(function () {\n    _this.style.display = "none";\n  }, 400);\n});\n\n// adsf asdf asdf asd fasd fasdf\n\nvar container;\nvar camera, scene, renderer;\nvar uniforms;\nvar mouse = { x: 0, y: 0 };\nvar loader = new THREE.TextureLoader();\n\ninit();\nanimate();\n\nfunction init() {\n  container = document.getElementById("container");\n\n  camera = new THREE.Camera();\n  //camera = new THREE.PerspectiveCamera(145, window.innerWidth / window.innerHeight, 1, 5000 );\n  camera.position.z = 1;\n  scene = new THREE.Scene();\n  var geometry = new THREE.PlaneBufferGeometry(2, 2);\n\n  var MyTexture = loader.load("./assets/images/water.jpg");\n  var mapTexture = loader.load("./assets/images/water-maps.jpg");\n  MyTexture.minFilter = THREE.LinearFilter;\n\n  uniforms = {\n    u_time: { type: "f", value: 1.0 },\n    u_animation: { type: "f", value: 0.0 },\n    u_mouse: { type: "v2", value: new THREE.Vector2() },\n    u_resolution: { type: "v2", value: new THREE.Vector2() },\n    u_size: {\n      type: "v2",\n      value: new THREE.Vector2(MyTexture.width, MyTexture.height)\n    },\n    u_image: { value: MyTexture },\n    u_maps: { value: mapTexture }\n  };\n  var material = new THREE.ShaderMaterial({\n    uniforms: uniforms,\n    vertexShader: document.getElementById("vertexShader").textContent,\n    fragmentShader: document.getElementById("fragmentShader").textContent\n  });\n  var mesh = new THREE.Mesh(geometry, material);\n  scene.add(mesh);\n  renderer = new THREE.WebGLRenderer();\n  renderer.setPixelRatio(window.devicePixelRatio);\n\n  container.appendChild(renderer.domElement);\n  onWindowResize();\n  window.addEventListener("resize", onWindowResize, false);\n}\nfunction onWindowResize(event) {\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  uniforms.u_resolution.value.x = renderer.domElement.width;\n  uniforms.u_resolution.value.y = renderer.domElement.height;\n  uniforms.u_mouse.value.x = mouse.x;\n  uniforms.u_mouse.value.y = mouse.y;\n}\nfunction animate() {\n  requestAnimationFrame(animate);\n  render();\n}\nfunction render() {\n  uniforms.u_time.value += 1.0;\n  renderer.render(scene, camera);\n}\n\ndocument.addEventListener("mousemove", function (event) {\n  TweenLite.to(uniforms.u_mouse.value, 1, {\n    x: (event.pageX / window.innerWidth - 0.5) * 1.5,\n    y: (event.pageY / window.innerHeight - 0.5) * 1.5\n  });\n});\n\n// Validate\n\nvar loginForm = document.querySelector(".login-form");\n\nloginForm.addEventListener("submit", function (ev) {\n  ev.preventDefault();\n  var authLogin = document.querySelector("#auth-login");\n  var authPass = document.querySelector("#auth-pass");\n  var captchaCheckbox = document.querySelector("#captcha-checkbox");\n  var captchaLabel = document.querySelector(".welcome__checkbox");\n\n  if (!captchaCheckbox.checked) {\n    captchaLabel.classList.add("color-red");\n  }\n\n  validateInput(authLogin);\n  validateInput(authPass);\n});\n\nfunction validateInput(input) {\n  if (!input.value) {\n    var authLabel = input.parentElement;\n    var authError = authLabel.querySelector(".input__error");\n\n    authLabel.classList.add("welcome__label--error");\n  }\n  input.onfocus = function () {\n    if (input.parentNode.classList.contains("welcome__label--error")) {\n      input.parentNode.classList.remove("welcome__label--error");\n    }\n  };\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz84MWYyIl0sIm5hbWVzIjpbInByZWxvYWRlckNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByZWxvYWRlckFuaW0iLCJ3aW5kb3ciLCJvbmxvYWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZEFuaW1GaW5pc2giLCJzZXRUaW1lb3V0IiwiYWRkIiwic3R5bGUiLCJvcGFjaXR5IiwiZGlzcGxheSIsImF1dGhCdG4iLCJ3ZWxjb21lV3JhcHBlciIsIndlbGNvbWVCdG4iLCJldiIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlIiwiZXZlbnQiLCJjb250YWluZXIiLCJjYW1lcmEiLCJzY2VuZSIsInJlbmRlcmVyIiwidW5pZm9ybXMiLCJtb3VzZSIsIngiLCJ5IiwibG9hZGVyIiwiVEhSRUUiLCJUZXh0dXJlTG9hZGVyIiwiaW5pdCIsImFuaW1hdGUiLCJnZXRFbGVtZW50QnlJZCIsIkNhbWVyYSIsInBvc2l0aW9uIiwieiIsIlNjZW5lIiwiZ2VvbWV0cnkiLCJQbGFuZUJ1ZmZlckdlb21ldHJ5IiwiTXlUZXh0dXJlIiwibG9hZCIsIm1hcFRleHR1cmUiLCJtaW5GaWx0ZXIiLCJMaW5lYXJGaWx0ZXIiLCJ1X3RpbWUiLCJ0eXBlIiwidmFsdWUiLCJ1X2FuaW1hdGlvbiIsInVfbW91c2UiLCJWZWN0b3IyIiwidV9yZXNvbHV0aW9uIiwidV9zaXplIiwid2lkdGgiLCJoZWlnaHQiLCJ1X2ltYWdlIiwidV9tYXBzIiwibWF0ZXJpYWwiLCJTaGFkZXJNYXRlcmlhbCIsInZlcnRleFNoYWRlciIsInRleHRDb250ZW50IiwiZnJhZ21lbnRTaGFkZXIiLCJtZXNoIiwiTWVzaCIsIldlYkdMUmVuZGVyZXIiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIm9uV2luZG93UmVzaXplIiwic2V0U2l6ZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsIlR3ZWVuTGl0ZSIsInRvIiwicGFnZVgiLCJwYWdlWSIsImxvZ2luRm9ybSIsImF1dGhMb2dpbiIsImF1dGhQYXNzIiwiY2FwdGNoYUNoZWNrYm94IiwiY2FwdGNoYUxhYmVsIiwiY2hlY2tlZCIsInZhbGlkYXRlSW5wdXQiLCJpbnB1dCIsImF1dGhMYWJlbCIsInBhcmVudEVsZW1lbnQiLCJhdXRoRXJyb3IiLCJvbmZvY3VzIiwicGFyZW50Tm9kZSIsImNvbnRhaW5zIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBTUEscUJBQXFCQyxTQUFTQyxhQUFULENBQXVCLFlBQXZCLENBQTNCO0FBQUEsSUFDRUMsZ0JBQWdCRixTQUFTQyxhQUFULENBQXVCLGtCQUF2QixDQURsQjs7QUFHQUUsT0FBT0MsTUFBUCxHQUFnQixZQUFNO0FBQ3BCRixnQkFBY0csZ0JBQWQsQ0FDRSxvQkFERixFQUVFLFVBQVNDLENBQVQsRUFBWTtBQUNWSixrQkFBY0ssU0FBZCxDQUF3QkMsTUFBeEIsQ0FBK0Isc0JBQS9CO0FBQ0FDO0FBQ0QsR0FMSCxFQU1FLEtBTkY7QUFRRCxDQVREOztBQVdBLFNBQVNBLGFBQVQsR0FBeUI7QUFDdkJDLGFBQVcsWUFBTTtBQUNmUixrQkFBY0ssU0FBZCxDQUF3QkksR0FBeEIsQ0FBNEIsaUJBQTVCO0FBQ0FaLHVCQUFtQmEsS0FBbkIsQ0FBeUJDLE9BQXpCLEdBQW1DLENBQW5DO0FBQ0QsR0FIRCxFQUdHLEdBSEg7QUFJQUgsYUFBVyxZQUFNO0FBQ2ZYLHVCQUFtQmEsS0FBbkIsQ0FBeUJFLE9BQXpCLEdBQW1DLE1BQW5DO0FBQ0QsR0FGRCxFQUVHLElBRkg7QUFHRDtBQUNEOztBQUVBLElBQU1DLFVBQVVmLFNBQVNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWhCO0FBQ0EsSUFBTWUsaUJBQWlCaEIsU0FBU0MsYUFBVCxDQUF1QixVQUF2QixDQUF2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IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9wcmVsb2FkZXIgKGltcG9ydCBcIi4vbW9kdWxlcy9wcmVsb2FkZXJcIjsg0LLRi9C00LDQtdGCINC+0YjQuNCx0LrRgylcbmNvbnN0IHByZWxvYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlbG9hZGVyXCIpLFxuICBwcmVsb2FkZXJBbmltID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVsb2FkZXJfX2ljb25cIik7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIHByZWxvYWRlckFuaW0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImFuaW1hdGlvbml0ZXJhdGlvblwiLFxuICAgIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHByZWxvYWRlckFuaW0uY2xhc3NMaXN0LnJlbW92ZShcInByZWxvYWRlcl9fYW5pbWF0aW9uXCIpO1xuICAgICAgYWRkQW5pbUZpbmlzaCgpO1xuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGFkZEFuaW1GaW5pc2goKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHByZWxvYWRlckFuaW0uY2xhc3NMaXN0LmFkZChcInByZWxvYWRlci0tZG9uZVwiKTtcbiAgICBwcmVsb2FkZXJDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gIH0sIDEwMCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHByZWxvYWRlckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0sIDExMDApO1xufVxuLy9maW5pc2ggcHJlbG9hZGVyXG5cbmNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlbGNvbWVfX2J0bi1hdXRoXCIpO1xuY29uc3Qgd2VsY29tZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlbGNvbWVcIik7XG5jb25zdCB3ZWxjb21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWxjb21lX19idG5cIik7XG5cbmF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2KSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIHdlbGNvbWVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgd2VsY29tZVdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcIndlbGNvbWVfX2NhcmQtLWZsaXBwZWRcIik7XG4gIH0sIDEpO1xufSk7XG5cbndlbGNvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHdlbGNvbWVXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJ3ZWxjb21lX19jYXJkLS1mbGlwcGVkXCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSwgNDAwKTtcbn0pO1xuXG4vLyBhZHNmIGFzZGYgYXNkZiBhc2QgZmFzZCBmYXNkZlxuXG52YXIgY29udGFpbmVyO1xudmFyIGNhbWVyYSwgc2NlbmUsIHJlbmRlcmVyO1xudmFyIHVuaWZvcm1zO1xudmFyIG1vdXNlID0geyB4OiAwLCB5OiAwIH07XG52YXIgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcblxuaW5pdCgpO1xuYW5pbWF0ZSgpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcblxuICBjYW1lcmEgPSBuZXcgVEhSRUUuQ2FtZXJhKCk7XG4gIC8vY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDE0NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDEsIDUwMDAgKTtcbiAgY2FtZXJhLnBvc2l0aW9uLnogPSAxO1xuICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICB2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgyLCAyKTtcblxuICB2YXIgTXlUZXh0dXJlID0gbG9hZGVyLmxvYWQoXCIuL2Fzc2V0cy9pbWFnZXMvd2F0ZXIuanBnXCIpO1xuICB2YXIgbWFwVGV4dHVyZSA9IGxvYWRlci5sb2FkKFwiLi9hc3NldHMvaW1hZ2VzL3dhdGVyLW1hcHMuanBnXCIpO1xuICBNeVRleHR1cmUubWluRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xuXG4gIHVuaWZvcm1zID0ge1xuICAgIHVfdGltZTogeyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxuICAgIHVfYW5pbWF0aW9uOiB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC4wIH0sXG4gICAgdV9tb3VzZTogeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMigpIH0sXG4gICAgdV9yZXNvbHV0aW9uOiB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCkgfSxcbiAgICB1X3NpemU6IHtcbiAgICAgIHR5cGU6IFwidjJcIixcbiAgICAgIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMihNeVRleHR1cmUud2lkdGgsIE15VGV4dHVyZS5oZWlnaHQpXG4gICAgfSxcbiAgICB1X2ltYWdlOiB7IHZhbHVlOiBNeVRleHR1cmUgfSxcbiAgICB1X21hcHM6IHsgdmFsdWU6IG1hcFRleHR1cmUgfVxuICB9O1xuICB2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgIHVuaWZvcm1zOiB1bmlmb3JtcyxcbiAgICB2ZXJ0ZXhTaGFkZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVydGV4U2hhZGVyXCIpLnRleHRDb250ZW50LFxuICAgIGZyYWdtZW50U2hhZGVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyYWdtZW50U2hhZGVyXCIpLnRleHRDb250ZW50XG4gIH0pO1xuICB2YXIgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gIHNjZW5lLmFkZChtZXNoKTtcbiAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gIG9uV2luZG93UmVzaXplKCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uV2luZG93UmVzaXplLCBmYWxzZSk7XG59XG5mdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZShldmVudCkge1xuICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB1bmlmb3Jtcy51X3Jlc29sdXRpb24udmFsdWUueCA9IHJlbmRlcmVyLmRvbUVsZW1lbnQud2lkdGg7XG4gIHVuaWZvcm1zLnVfcmVzb2x1dGlvbi52YWx1ZS55ID0gcmVuZGVyZXIuZG9tRWxlbWVudC5oZWlnaHQ7XG4gIHVuaWZvcm1zLnVfbW91c2UudmFsdWUueCA9IG1vdXNlLng7XG4gIHVuaWZvcm1zLnVfbW91c2UudmFsdWUueSA9IG1vdXNlLnk7XG59XG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIHJlbmRlcigpO1xufVxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICB1bmlmb3Jtcy51X3RpbWUudmFsdWUgKz0gMS4wO1xuICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgVHdlZW5MaXRlLnRvKHVuaWZvcm1zLnVfbW91c2UudmFsdWUsIDEsIHtcbiAgICB4OiAoZXZlbnQucGFnZVggLyB3aW5kb3cuaW5uZXJXaWR0aCAtIDAuNSkgKiAxLjUsXG4gICAgeTogKGV2ZW50LnBhZ2VZIC8gd2luZG93LmlubmVySGVpZ2h0IC0gMC41KSAqIDEuNVxuICB9KTtcbn0pO1xuXG4vLyBWYWxpZGF0ZVxuXG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLWZvcm1cIik7XG5cbmxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGV2KSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGF1dGhMb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXV0aC1sb2dpblwiKTtcbiAgY29uc3QgYXV0aFBhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1dGgtcGFzc1wiKTtcbiAgY29uc3QgY2FwdGNoYUNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXB0Y2hhLWNoZWNrYm94XCIpO1xuICBjb25zdCBjYXB0Y2hhTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlbGNvbWVfX2NoZWNrYm94XCIpO1xuXG4gIGlmICghY2FwdGNoYUNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICBjYXB0Y2hhTGFiZWwuY2xhc3NMaXN0LmFkZChcImNvbG9yLXJlZFwiKTtcbiAgfVxuXG4gIHZhbGlkYXRlSW5wdXQoYXV0aExvZ2luKTtcbiAgdmFsaWRhdGVJbnB1dChhdXRoUGFzcyk7XG59KTtcblxuZnVuY3Rpb24gdmFsaWRhdGVJbnB1dChpbnB1dCkge1xuICBpZiAoIWlucHV0LnZhbHVlKSB7XG4gICAgY29uc3QgYXV0aExhYmVsID0gaW5wdXQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBhdXRoRXJyb3IgPSBhdXRoTGFiZWwucXVlcnlTZWxlY3RvcihcIi5pbnB1dF9fZXJyb3JcIik7XG5cbiAgICBhdXRoTGFiZWwuY2xhc3NMaXN0LmFkZChcIndlbGNvbWVfX2xhYmVsLS1lcnJvclwiKTtcbiAgfVxuICBpbnB1dC5vbmZvY3VzID0gKCkgPT4ge1xuICAgIGlmIChpbnB1dC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIndlbGNvbWVfX2xhYmVsLS1lcnJvclwiKSkge1xuICAgICAgaW5wdXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwid2VsY29tZV9fbGFiZWwtLWVycm9yXCIpO1xuICAgIH1cbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9hdXRoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n')}},[10]);
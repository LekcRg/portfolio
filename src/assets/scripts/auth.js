import "./modules/preloader";
import Vue from "vue";
import axios from "axios";

new Vue({
  el: "#login-form",
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      const authLogin = document.querySelector("#auth-login");
      const authPass = document.querySelector("#auth-pass");
      const captchaCheckbox = document.querySelector("#captcha-checkbox");
      const captchaRadio = document.querySelector(".welcome__input-radio");
      if (
        authLogin.value &&
        authPass.value &&
        captchaCheckbox.checked &&
        captchaRadio.checked
      ) {
        axios
          .post("http://webdev-api.loftschool.com/login", this.user)
          .then(response => {
            if (response.status === 200) {
              const ttl = Math.floor(Date.now() / 1000 + response.data.ttl);
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("ttl", ttl);

              window.location.href = "/admin";
            }
          });
      }
    }
  },
  template: "#login-template"
});

///////////////////////////////////////

const authBtn = document.querySelector("#welcome__btn-auth");
const welcomeWrapper = document.querySelector(".welcome");
const welcomeBtn = document.querySelector("#welcome__btn");

authBtn.addEventListener("click", function(ev) {
  ev.preventDefault();
  welcomeBtn.style.display = "block";
  setTimeout(() => {
    welcomeWrapper.classList.toggle("welcome__card--flipped");
  }, 1);
});

welcomeBtn.addEventListener("click", function(ev) {
  event.preventDefault();
  welcomeWrapper.classList.toggle("welcome__card--flipped");
  setTimeout(() => {
    this.style.display = "none";
  }, 400);
});

// adsf asdf asdf asd fasd fasdf

var container;
var camera, scene, renderer;
var uniforms;
var mouse = { x: 0, y: 0 };
var loader = new THREE.TextureLoader();

init();
animate();

function init() {
  container = document.getElementById("container");

  camera = new THREE.Camera();
  //camera = new THREE.PerspectiveCamera(145, window.innerWidth / window.innerHeight, 1, 5000 );
  camera.position.z = 1;
  scene = new THREE.Scene();
  var geometry = new THREE.PlaneBufferGeometry(2, 2);

  var MyTexture = loader.load("./assets/images/water.jpg");
  var mapTexture = loader.load("./assets/images/water-maps.jpg");
  MyTexture.minFilter = THREE.LinearFilter;

  uniforms = {
    u_time: { type: "f", value: 1.0 },
    u_animation: { type: "f", value: 0.0 },
    u_mouse: { type: "v2", value: new THREE.Vector2() },
    u_resolution: { type: "v2", value: new THREE.Vector2() },
    u_size: {
      type: "v2",
      value: new THREE.Vector2(MyTexture.width, MyTexture.height)
    },
    u_image: { value: MyTexture },
    u_maps: { value: mapTexture }
  };
  var material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: document.getElementById("vertexShader").textContent,
    fragmentShader: document.getElementById("fragmentShader").textContent
  });
  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);
  onWindowResize();
  window.addEventListener("resize", onWindowResize, false);
}
function onWindowResize(event) {
  renderer.setSize(window.innerWidth, window.innerHeight);
  uniforms.u_resolution.value.x = renderer.domElement.width;
  uniforms.u_resolution.value.y = renderer.domElement.height;
  uniforms.u_mouse.value.x = mouse.x;
  uniforms.u_mouse.value.y = mouse.y;
}
function animate() {
  requestAnimationFrame(animate);
  render();
}
function render() {
  uniforms.u_time.value += 1.0;
  renderer.render(scene, camera);
}

document.addEventListener("mousemove", function(event) {
  TweenLite.to(uniforms.u_mouse.value, 1, {
    x: (event.pageX / window.innerWidth - 0.5) * 1.5,
    y: (event.pageY / window.innerHeight - 0.5) * 1.5
  });
});

// Validate

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function(ev) {
  ev.preventDefault();
  const authLogin = document.querySelector("#auth-login");
  const authPass = document.querySelector("#auth-pass");
  const captchaCheckbox = document.querySelector("#captcha-checkbox");
  const captchaLabel = document.querySelector(".welcome__checkbox");
  const captchaRadio = document.querySelector(".welcome__input-radio");
  const captchaError = document.querySelector("#auth-captcha-error");
  console.log(captchaError);

  if (!captchaCheckbox.checked || !captchaRadio.checked) {
    captchaError.classList.add("input__error--on");
  }

  captchaCheckbox.addEventListener("click", ev => {
    if (captchaCheckbox.checked && captchaRadio.checked) {
      captchaError.classList.remove("input__error--on");
    }
  });

  captchaRadio.addEventListener("click", ev => {
    if (captchaCheckbox.checked && captchaRadio.checked) {
      captchaError.classList.remove("input__error--on");
    }
  });

  validateInput(authLogin);
  validateInput(authPass);
});

function validateInput(input) {
  if (!input.value) {
    const authLabel = input.parentElement;
    const authError = authLabel.querySelector(".input__error");

    authLabel.classList.add("welcome__label--error");
  }
  input.onfocus = () => {
    if (input.parentNode.classList.contains("welcome__label--error")) {
      input.parentNode.classList.remove("welcome__label--error");
    }
  };
}

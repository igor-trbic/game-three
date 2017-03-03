$(window).on('load', function() {
  console.log('Hello World!');
  console.log('Test!!!!!!!!!');
  var scene, camera, renderer;
  var geometry, material, mesh;

  init();
  animate();

  function init() {

    var enemies = [];
    i = 0;

    var createEnemy = window.setInterval(makeEnemy, 5000);
    var moveEnemy = window.setInterval(doMoveEnemy, 1000);

    var coneGeometry = new THREE.ConeGeometry(5, 20, 32);
    var coneMaterial = new THREE.MeshBasicMaterial({
      color: 0x9900FF,
      wireframe: false
    });

    function makeEnemy() {
      enemies[i] = new THREE.Mesh(coneGeometry, coneMaterial);
      enemies[i].rotateX(180);
      scene.add(enemies[i]);
      enemies[i].position.x = getRandomX();
      enemies[i].position.y = 250;
      i++;
    }

    function doMoveEnemy() {
      enemies.forEach(function (enemy) {
        enemy.position.y -= 10;
      });
    }

    function getRandomX() {
      min = Math.ceil(-350);
      max = Math.floor(350);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomY() {
      min = Math.ceil(-250);
      max = Math.floor(250);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, 1, 1, 10000);
    camera.position.z = 500;

    geometry = new THREE.BoxGeometry(50, 20, 50);
    material = new THREE.MeshBasicMaterial({
      color: 0xfff,
      wireframe: true
    });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);


    renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 600);

    document.body.appendChild(renderer.domElement);

    mesh.position.y = -200;
    console.log(mesh.position);
  }

  function animate() {

    requestAnimationFrame(animate);

    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.02;

    renderer.render(scene, camera);

  }

  function onKeyDown(event) {
    console.log(mesh.position);
    event.stopPropagation();
    switch (event.keyCode) {
      case 38:
      case 87:
        console.log('UP');
        mesh.translateY(10);
        break;
        // case 40:
        // case 83:
        //   mesh.translateY(-10);
        //   console.log('DOWN');
        //   break;
      case 37:
      case 65:
        console.log('LEFT');
        if (mesh.position.x < -300) {
          mesh.position.x = 300;
        } else {
          mesh.translateX(-10);
        }
        break;
      case 39:
      case 68:
        ;
        if (mesh.position.x > 300) {
          mesh.position.x = -300;
        } else {
          mesh.translateX(10);
        }
        console.log('RIGHT');
        break;
    }
  }

  function onKeyUp(event) {
    console.log(mesh.position);
    event.stopPropagation();
    switch (event.keyCode) {
      case 38:
      case 87:
        console.log('UP');
        mesh.translateY(-10);
        break;
      case 40:
      case 83:
        mesh.translateY(-10);
        console.log('DOWN');
        break;
      case 37:
      case 65:
        console.log('LEFT');
        mesh.translateX(-10);
        break;
      case 39:
      case 68:
        ;
        mesh.translateX(10);
        console.log('RIGHT');
        break;
    }
  }
});

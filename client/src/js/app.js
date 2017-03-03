$(window).on('load', function() {
  console.log('Hello World!');
  console.log('Test!!!!!!!!!');
  var scene, camera, renderer;
  var geometry, material, mesh;

  init();
  animate();

  function init() {

    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, 1, 1, 10000);
    camera.position.z = 500;

    geometry = new THREE.BoxGeometry(50, 50, 50);
    material = new THREE.MeshBasicMaterial({
      color: 0xfff,
      wireframe: true
    });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 600);

    document.body.appendChild(renderer.domElement);

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
      case 68:;
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
      case 68:;
        mesh.translateX(10);
        console.log('RIGHT');
        break;
    }
  }
});

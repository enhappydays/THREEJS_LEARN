import * as THREE from 'three'
// 导入轨道控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// 导入lil.gui
import {GUI} from 'three/examples/jsm/libs/lil-gui.module.min.js'



// 创建场景
const scene =new THREE.Scene()

// 创建相机
const camera= new THREE.PerspectiveCamera(
    45,//视角
    window.innerWidth/window.innerHeight,//宽高比
    0.1,//进平面
    1000//远平面
)
// 创建渲染器
const renderer=new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)


// // 创建几何体
// const geometry =new THREE.BoxGeometry(1,1,1)

// // 创建材质
// const material =new THREE.MeshBasicMaterial({
//   color:0x00ff00,
//   wireframe:true
// })
// const parentmaterial =new THREE.MeshBasicMaterial({color:0xff0000})

// // 创建网格

// let parentCube=new THREE.Mesh(geometry,parentmaterial)
// const cube =new THREE.Mesh(geometry,material)
// parentCube.add(cube)
// parentCube.position.set(-3,0,0)
// // cube.position.z=2
// cube.position.set(3,0,0)
// // 设置立方体的缩放比例
// cube.scale.set(2,2,2)
// // parentCube.scale.set(2,2,2)

// // 将网格添加到场景
// scene.add(parentCube)
// 创建几何体
/**
 * 几何体
 */
// const geometry =new THREE.BufferGeometry()
// // 创建顶点数据
// const vertices=new Float32Array([
//   -1.0,-1.0,0.0,1.0,-1.0,0.0,1.0,1.0,0.0,-1.0,1.0,0
// ])
// // c创建顶点属性
// geometry.setAttribute('position',new THREE.BufferAttribute(vertices,3))
// // 创建索引】
// const indices=new Uint16Array([0,1,2,2,3,0])
// // 创建索引属性
// geometry.setIndex(new THREE.BufferAttribute(indices,1))
// // 设置2个顶点组，形成2个材质
// geometry.addGroup(0,3,0)
// geometry.addGroup(3,3,1)
// // 创建材质
// const material =new THREE.MeshBasicMaterial({
//   color:0x00ff00,
//   side:THREE.DoubleSide
//   // wireframe:true
// })
// const material1 =new THREE.MeshBasicMaterial({
//   color:0xff0000,

// })
// const cube =new THREE.Mesh(geometry,[material,material1])

// // // 将网格添加到场景
// scene.add(cube)
// 设置相机位置
camera.position.z=5
camera.position.y=2
camera.position.x=2
camera.lookAt(0,0,0)//相机看向原点
  // 添加世界坐标辅助器
  const axesHelper=new THREE.AxesHelper(5)
  scene.add(axesHelper)
// 添加轨道控制器
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();
controls.enableDamping=true
//渲染函数
function animate(){
    requestAnimationFrame(animate)
    //旋转
    // cube.rotation.x+=0.01
    // cube.rotation.y+=0.01
// 渲染
renderer.render(scene,camera)
}
animate()
// 监听窗口变化
window.addEventListener('resize',()=>{
  // 重置渲染器宽高比
  renderer.setSize(window.innerWidth,window.innerHeight)
  // 重置相机宽高比
  camera.aspect= window.innerWidth/window.innerHeight;
  // 更新相机投影矩阵
  camera.updateProjectionMatrix()
})
// 控制器
let enventObj={
  Fullscreen:function(){
    document.body.requestFullscreen()
  },
  ExitFullscreen:function(){
    document.exitFullscreen()
  }
}
const gui=new GUI()
gui.add(enventObj,'Fullscreen').name('全屏')
gui.add(enventObj,'ExitFullscreen')
let folder=gui.addFolder('立方体')
// 控制立方体位置
// gui.add(cube.position,'x',-5,5).name('x轴位置')
// folder.add(cube.position,'x').min(-5).max(5).step(1).name('x轴位置').onChange(x=>{
//   console.log(x);
// })
// folder.add(cube.position,'y').min(-5).max(5).step(1).name('y轴位置').onFinishChange(x=>{
//   console.log(x);
// })
let colorParams={
  cubeColor:0x00ff00
}
gui.addColor(colorParams,'cubeColor').name('cubeColor').onChange(x=>{
  console.log(x);
  cube.material.color.set(x)
})
// 创建纹理加载器
let textureLoader=new THREE.TextureLoader()
let planeGeometry=new THREE.PlaneGeometry(1,1)
let planeMaterial=new THREE.MeshBasicMaterial({
  color:0xffffff
})
let plane =new THREE.Mesh(planeGeometry,planeMaterial)
scene.add(plane)


































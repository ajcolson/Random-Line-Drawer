const FPS = 60
const INTRATE = 1000 / FPS

let ctx = document.querySelector("#draw-frame").getContext('2d')
ctx.save()

var frameCount = 0
var startTime = Date.now()
var frameStartTime = null

var frameRunner = setInterval(()=>{
  frameStartTime = Date.now()
  frameCount++

  var x = rand(1280),
      y = rand(720),
      dx = rand(1280),
      dy = rand(720),
      r = rand(255),
      g = rand(255),
      b = rand(255),
      a = Math.random()
  
  ctx.beginPath()
  ctx.moveTo( x, y )
  ctx.lineTo( dx, dy )
  ctx.strokeStyle = `rgba(${r},${g},${b},${a})`
  ctx.stroke()
  ctx.restore()
  
  var frameTimeElapsed = Date.now() - frameStartTime
  var timeElapsed = Date.now() - startTime
  console.log( `Frame #${frameCount}, with render time of ${frameTimeElapsed}, with total elapsed time of ${timeElapsed}` )
  
}, INTRATE )


function rand(max) {
  max = Math.floor(max)
  return Math.floor(Math.random() * (max + 1))
}


function stop(){
  clearInterval(frameRunner)
}

document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelector("#stopbtn").onclick = (e)=>{
    stop()
  }
})

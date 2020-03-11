import './styles/main.css'
import p5 from 'p5'

const s = p5 => {
  p5.setup = () => {
    let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)
  }

  p5.draw = () => {
    p5.background('#111')
  }
}

new p5(s)

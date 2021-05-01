import './styles/main.css'
import p5 from 'p5'

const s = p5 => {
  p5.setup = () => {
    let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)
  }

  p5.draw = () => {
    p5.background('#111')
    p5.rect(p5.width / 2, p5.height / 2, 10, 10)
  }
}

new p5(s)

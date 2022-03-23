///////////////
// Functions //
///////////////

// duplicate element by x quantity
const duplicateHtml = (element, quantity) => {
  const newContent = new Array(quantity).fill(element.innerHTML).join('')
  element.innerHTML = newContent
}

////////////////
// Animations //
////////////////

// conveyor animation
anime({
  targets: '.conveyor',
  translateX: '-50%',
  duration: 1500,
  loop: true,
  easing: 'linear',
  autoplay: true,
})

// wave animation
const wavePath = document.querySelector('#wave path')
// setDashoffset figures out how long the path is
const waveOffset = anime.setDashoffset(wavePath)
// offset is then set back onto the path element
wavePath.setAttribute('stroke-dashoffset', waveOffset)
anime({
  targets: wavePath,
  strokeDashoffset: [0, waveOffset],
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
})

// crosses animation
const crosses = document.querySelector('#crosses')
// duplicate crosses 10x
duplicateHtml(crosses, 10)

anime({
  targets: '#crosses path',
  rotate: '1turn',
  delay: (el, i, l) => i * 100,
  duration: 1200,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
})

// duplicate squared dots
duplicateHtml(document.querySelector('#dots'), 40)
const dots = document.querySelectorAll('#dots .dot')
// dots individual random animation
dots.forEach((dot) => {
  anime({
    targets: dot,
    rotate: (el, i) => anime.random(90, 360),
    duration: (el, i) => anime.random(250, 750),
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
  })
})

// circle tunnel animation
anime({
  targets: '#tunnel circle',
  scale: 1.1,
  direction: 'alternate',
  loop: true,
  duration: 250,
  easing: 'easeInOutSine',
  delay: (el, i) => i * 50,
})

// zigzag animation
const zigZagPath = document.querySelector('#zigzag path')
// setDashoffset figures out how long the path is
const zigZagOffset = anime.setDashoffset(zigZagPath)
// offset is then set back onto the path element
zigZagPath.setAttribute('stroke-dashoffset', zigZagOffset)

anime({
  targets: zigZagPath,
  strokeDashoffset: [zigZagOffset, 0],
  duration: 3000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
  autoplay: true,
})


// flashes animation
anime({
  targets: '#flashes .flash',
  backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
  direction: 'alternate',
  loop: true,
  duration: 500,
  easing: 'easeInOutSine',
  delay: (el, i) => anime.random (50,100)
})


// duplicate round dots
duplicateHtml(document.querySelector('#circles'), 20)
const circles = document.querySelectorAll('#circles .circle')
// circles individual animation in order (anime does it automatically in order)
circles.forEach((circle) => {
  anime({
    targets: ('#circles .circle'),
    scale: [0,1.2],
    delay: (el, i) => i * 100,
    duration: 250,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
  })
})

// squares tunnel animation
anime({
  targets: '#squares rect',
  translateX: ['-50%', '-50%'],
  translateY: ['-50%', '-50%'],
  rotate: [45, 0, -45],
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine',
  delay: (el, i) => 100 * i,
  duration: (el, i) => 750
})
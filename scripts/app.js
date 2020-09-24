const tl = gsap.timeline({defaults: {ease: 'power1.out'}})

tl.to('.text', {x:'0%', duration: '1.5', stagger: '0.5'})
tl.to('.slider', {x: '-100%', duration: '1.5', delay: '0.5'})
tl.to('.slider2', {x: '-100%', duration: '1.5', delay: '0.5'}, '-=1.5')
tl.to('.slider3', {x: '-100%', duration: '1.5', delay: '0.5'}, '-=1.7')
tl.to('.intro-slider', {x: '-100%', duration: '2.0'}, '-=1')
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: '1.1'})
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: '1.5'}, '-=1.1')
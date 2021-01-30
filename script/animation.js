const button = document.querySelector('button');
const svg = document.querySelector('svg');
const frame = document.querySelector('#frame');
const block1 = document.querySelector('#block-1');
const text2 = document.querySelector('#text-2');
const text1 = document.querySelector('#text-1');
const text4 = document.querySelector('#text-4');
const block2 = document.querySelector('#block-2');
const block3 = document.querySelector('#block-3');
const subFrame2 = document.querySelector('#sub-frame-2');
const subFrame1 = document.querySelector('#sub-frame-1');
const guy1 = document.querySelector('#guy-1');
const guy2 = document.querySelector('#guy-2');
const guy3 = document.querySelector('#guy-3');
const guy4 = document.querySelector('#guy-4');
const rule = CSSRulePlugin.getRule('button:after');

const tl = gsap.timeline();

tl.to(rule, {duration: .2, zIndex: -10, transform: 'translate(8%, 8%)', filter: 'blur(.4em)', ease: 'easeInOut'});
tl.reversed(true);      

const buttonHoverAnimation = () => {
    tl.reversed(!tl.reversed());
}

const startImgAnimation = () => {
    const baseY = 300;
    const baseX = 100;

    gsap.set([frame, 
        block1, 
        block2, 
        block3, 
        text1, 
        text2, 
        text4, 
        subFrame1, 
        subFrame2, 
        guy1, 
        guy2, 
        guy3, 
        guy4], { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: Back.easeOut.config(2) } });
    
    tl.to(button, { opacity: 0, display: 'none', ease: 'ease'});
    tl.to(svg, { display: 'block' });
    [frame, block1, block2, block3].forEach(element => {
        tl.fromTo(element, { y: `+=${baseY}` }, { autoAlpha: 1, y: `-=${baseY}`});
    });
    [text1, text2, text4].forEach(element => {
        tl.fromTo(element, { x: `+=${baseX}` }, { autoAlpha: 1, x: `-=${baseX}`}, '-=.3');
    })
    tl.fromTo(guy2, { scale: 0 }, { scale: 1, autoAlpha: 1})
        .fromTo(subFrame1, { y: `-=${baseY}` }, { autoAlpha: 1, y: `+=${baseY }`, ease: 'elastic', duration: 1})
        
}

button.addEventListener('mouseenter', buttonHoverAnimation);
button.addEventListener('mouseout', buttonHoverAnimation);
button.addEventListener('click', startImgAnimation);
const button = document.querySelector('button');
const svg = document.querySelector('svg');
const rule = CSSRulePlugin.getRule('button:after');

const tl = gsap.timeline();

tl.to(rule, {duration: .2, zIndex: -10, transform: 'translate(8%, 8%)', filter: 'blur(.4em)', ease: 'easeInOut'})
tl.reversed(true);      

const buttonHoverAnimation = () => {
    tl.reversed(!tl.reversed());
}

const startImgAnimation = () => {
    const tl = gsap.timeline();

    tl.to('button', { opacity: 0, ease: 'ease'});
    tl.to('svg', { visibility: 'visible', ease: 'ease'});
}

button.addEventListener('mouseenter', buttonHoverAnimation);
button.addEventListener('mouseout', buttonHoverAnimation);
button.addEventListener('click', startImgAnimation)
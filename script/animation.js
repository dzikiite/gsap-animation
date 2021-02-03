const button = document.querySelector('button');
const svg1 = document.querySelector('#svg1');
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
const svg2 = document.querySelector('#svg2');
const boxContainer = document.querySelector('.box-container');
const rule = CSSRulePlugin.getRule('button:after');

const tl = gsap.timeline();

tl.to(rule, {
  duration: 0.2,
  zIndex: -10,
  transform: 'translate(8%, 8%)',
  filter: 'blur(.4em)',
  ease: 'easeInOut',
});
tl.reversed(true);

const buttonHoverAnimation = () => {
  tl.reversed(!tl.reversed());
};

const startImgAnimation = () => {
  const baseY = 300;
  const baseX = 100;
  const boxElements = boxContainer.children;

  gsap.set(
    [
      frame,
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
      guy4,
    ],
    { autoAlpha: 0 },
  );

  const tl = gsap.timeline({ defaults: { ease: Back.easeOut.config(2) } });

  tl.to(button, { opacity: 0, display: 'none', ease: 'ease' });
  tl.to(svg1, { display: 'block', opacity: 1 });
  [frame, block1, block2, block3].forEach(element => {
    tl.fromTo(element, { y: `+=${baseY}` }, { autoAlpha: 1, y: `-=${baseY}` });
  });
  [text1, text2, text4].forEach(element => {
    tl.fromTo(
      element,
      { x: `+=${baseX}` },
      { autoAlpha: 1, x: `-=${baseX}` },
      '-=.3',
    );
  });
  tl.fromTo(guy2, { scale: 0 }, { scale: 1, autoAlpha: 1 })
    .fromTo(
      subFrame1,
      { y: `-=${baseY}` },
      { autoAlpha: 1, y: `+=${baseY}`, ease: 'elastic', duration: 1 },
    )
    .to(guy4, { autoAlpha: 1, ease: 'ease', duration: 1 })
    .fromTo(guy1, { y: `+=${baseY}` }, { y: `-=${baseY}`, autoAlpha: 1 })
    .fromTo(guy3, { y: `-=${baseY}` }, { y: `+=${baseY}`, autoAlpha: 1 })
    .to([guy1, guy3], { x: `-=${baseX}` })
    .to([guy1, guy3], { x: `+=${baseX}` })
    .fromTo(
      subFrame2,
      { y: `-=${baseY}` },
      { autoAlpha: 1, y: `+=${baseY}`, ease: 'elastic', duration: 1 },
    )
    .to(svg1, { opacity: 0, ease: 'ease', duration: 0.3 })
    .to(svg1, { display: 'none', duration: 0.1 });

  gsap.set([...boxElements], {
    transformOrigin: 'left',
    backgroundColor: 'transparent',
  });
  gsap.set(boxContainer, { skewX: '0 0', scale: 1, y: 0, x: 0 });

  const tl2 = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
  tl2.delay(tl.totalDuration());

  tl2.to(boxContainer, { visibility: 'inherit', display: 'grid' });
  [...boxElements].forEach(element => {
    tl2.fromTo(
      element,
      { scaleX: 0 },
      { scaleX: 1, backgroundColor: '#f2f2f2', duration: 0.2 },
    );
  });
  tl2
    .to(document.body, { backgroundColor: '#11121B' })
    .to([...boxElements], { backgroundColor: '#1A1C29' })
    .to([...boxElements], { scaleX: 0.5, transformOrigin: 'center' })
    .to(boxContainer, { skewX: '-20deg -20deg' })
    .to(boxContainer, { scale: 0, y: `-=500`, x: `+=1000`, duration: 1.2 })
    .to(boxContainer, { display: 'none', duration: 0.1 });
  tl2.to(document.body, { backgroundColor: '#FFFFFF' });

  tl2.to(button, { opacity: 1, display: 'block' });
  setTimeout(() => {
    button.textContent = 'Again?';
  }, tl.totalDuration() * 1000);
};

button.addEventListener('mouseenter', buttonHoverAnimation);
button.addEventListener('mouseout', buttonHoverAnimation);
button.addEventListener('click', startImgAnimation);

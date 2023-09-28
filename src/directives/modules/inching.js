export default {
  mounted(el, binding) {
    const speed = binding.value;
    const target = document.querySelector(`.${binding.arg}`);

    if(target) {
      target.addEventListener('mousemove', (e) => {
        const x = (target.getBoundingClientRect().width - e.pageX * speed) / 150;
        const y = (target.getBoundingClientRect().height - e.pageY * speed) / 150;
        el.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    } else {
      document.body.addEventListener('mousemove', (e) => {
        const x = (document.body.clientWidth - e.pageX * speed) / 150;
        const y = (document.body.clientHeight - e.pageY * speed) / 150;
        el.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }
  },
  unmounted(el) {
    
  }
}
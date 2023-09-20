const map = new WeakMap();
const ob = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const handle = map.get(entry.target);
    if(handle) {
      handle({
        width: entry.contentRect.width,
        height: entry.contentRect.height
      });
    }
  }
});

export default {
  mounted(el, binding) {
    map.set(el, binding.value);
    ob.observe(el);
  },
  unmounted(el) {
    ob.unobserve(el);
  }
}
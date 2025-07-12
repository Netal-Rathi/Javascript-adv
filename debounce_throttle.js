// Debounce & Throttle in JavaScript
// ----------------------------------
// These are two important techniques for controlling the rate at which a function is executed, often used in scenarios like handling scroll, resize, or input events.

// --- Debounce ---
// Debounce ensures that a function is only called after a certain amount of time has passed since it was last called.
// Useful for input validation, search suggestions, etc.

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Example usage:
// window.addEventListener('resize', debounce(() => {
//   console.log('Resized!');
// }, 300));

// --- Throttle ---
// Throttle ensures that a function is only called at most once every specified interval.
// Useful for scroll events, window resizing, etc.

function throttle(fn, interval) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

// Example usage:
// window.addEventListener('scroll', throttle(() => {
//   console.log('Scrolled!');
// }, 200));

/*
Explanation:
- Debounce: Delays execution until after the event stops firing for 'delay' ms. Only the last event triggers the function.
- Throttle: Guarantees the function runs at most once every 'interval' ms, regardless of how many times the event fires.

Interview Tip:
- Be ready to explain use-cases and differences. Debounce for input fields, throttle for scroll/resize.
*/ 
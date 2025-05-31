// Create floating cat element
const cat = document.createElement('div');
cat.id = 'floating-cat';

// Animated cat faces
const catActions = [
  // Sleeping
  '( - . - ) zzz',
  '( - . - )~',
  // Waking up
  '(=｀ω´=)',
  '(=^･ω･^=)',
  // Licking paw
  '(=^･ω･^=)~~~',
  '(=^･ω･^=)~~~(=^･ω･^=)',
  '(=^･ω･^=)~~~(=^･ω･^=)~~~',
  // Stretching
  '(=^‥^=)~~~~',
  '(=ＴェＴ=)~~~~',
  // Playing
  '(=｀ェ´=)~~(=｀ェ´=)',
  '(=｀Д´=)~~(=｀Д´=)',
  '(=^･ｪ･^=)~~(=^･ｪ･^=)'
];

// Smoothly animate cat faces with CSS transitions
cat.style.transition = 'all 0.3s ease';

// Animate cat faces continuously
let currentFace = 0;
const animateCat = () => {
  cat.innerHTML = catActions[currentFace];
  currentFace = (currentFace + 1) % catActions.length;
  
  // Vary animation speed based on action
  const speed = currentFace > 2 && currentFace < 6 ? 800 : 
               currentFace > 6 && currentFace < 9 ? 1200 : 1000;
  setTimeout(animateCat, speed);
};
animateCat();

// Style the cat (will be moved to CSS)
cat.style.position = 'fixed';
cat.style.bottom = '20px';
cat.style.right = '20px';
cat.style.zIndex = '9999';
cat.style.cursor = 'move';
cat.style.fontSize = '24px';

// Make it draggable
let isDragging = false;
let offsetX, offsetY;

cat.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - cat.getBoundingClientRect().left;
  offsetY = e.clientY - cat.getBoundingClientRect().top;
  cat.style.opacity = '0.7';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  
  cat.style.left = (e.clientX - offsetX) + 'px';
  cat.style.top = (e.clientY - offsetY) + 'px';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  cat.style.opacity = '1';
  cat.style.pointerEvents = 'none';
  setTimeout(() => {
    cat.style.pointerEvents = 'auto';
  }, 100);
});

// Add to page
document.body.appendChild(cat);
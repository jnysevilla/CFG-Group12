// Javascript Code will go here 

const draggableImage = document.getElementById('draggableImage');

draggableImage.addEventListener('mousedown', (e) => {
  const rect = draggableImage.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

  draggableImage.style.cursor = 'grabbing';
  draggableImage.style.zIndex = 1000;

  document.addEventListener('mousemove', onMouseMove);

  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onMouseMove);
    draggableImage.style.cursor = 'grab';
    draggableImage.style.zIndex = 1;
  });

  function onMouseMove(event) {
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;
    draggableImage.style.transform = `translate(${x}px, ${y}px)`;
  }
});

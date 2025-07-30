/*fetch('pixels.json')
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById('grid');

    data.forEach(pixel => {
      const img = document.createElement('img');
      img.src = pixel.image;
      img.title = pixel.tooltip;
      img.classList.add('pixel');
      img.style.left = pixel.x + 'px';
      img.style.top = pixel.y + 'px';

      const link = document.createElement('a');
      link.href = pixel.link;
      link.target = '_blank';
      link.appendChild(img);

      grid.appendChild(link);
    });
  })
  .catch(error => {
    console.error('Error loading pixels:', error);
  });
*/

fetch("https://helpyourfather.onrender.com/api/pixels")
  .then(res => res.json())
  .then(pixels => {
    console.log("🧠 Pixels received:", pixels);
    pixels.forEach(pixel => {
      console.log(`➡️ Drawing pixel at (${pixel.x}, ${pixel.y}) with image: ${pixel.image}`);

      const a = document.createElement('a');
      a.href = pixel.link;
      a.target = '_blank';
      a.title = pixel.tooltip;
      a.style.position = 'absolute';
      a.style.left = `${pixel.x * 10}px`;
      a.style.top = `${pixel.y * 10}px`;
      a.style.width = '10px';
      a.style.height = '10px';
      a.style.display = 'block';

      const img = document.createElement('img');
      img.src = `${pixel.image}`;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      img.style.pointerEvents = 'none';

      console.log("🖼️ Image source:", img.src);

      a.appendChild(img);
      grid.appendChild(a);
    });
  })
  .catch(err => {
    console.error("Failed to load pixels:", err);
  });




// an attempt at preloading.  
// Ultimately lazy loading, caching or a CDN would be more appropriate 

function preloadImages(imageUrls) {
  // iterate through each image URL
  imageUrls.forEach(function (url) {
    // new image object
    let img = new Image();
    // set source URL
    img.src = url;
  });
}

let imageUrls = [
  "https://source.unsplash.com/random/600x1200/?norway",
  "https://source.unsplash.com/random/900x600/?italy",
  "https://source.unsplash.com/random/600x600/?greece"
];

preloadImages(imageUrls);

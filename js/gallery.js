// create a document named gallery linked to the div with the id gallery in the home page.html
var gallery = document.getElementById('gallery');
//fetch fonction access the document in parameter
fetch('js/gallery.json')
// then take the response
.then(function(res) {
  // Get the JSON representation of the response object
  res.json().then(function(json) {

    // Loop over each object in our JSON object (array)
    json.forEach(function(el) {

      //for each image, create a object that will contain the information of the image (link, display, etc)
      var galleryItem = document.createElement('a');
      
      // Give it the class name "gallery-item" which will be the "background of each image on the gallery"
      galleryItem.setAttribute('class', 'gallery-item');
      
      // Set the link to the image
      galleryItem.setAttribute('href', el.url);
      
      // Open the image in a new tab when we click on the link set earlier
      galleryItem.setAttribute('target', '_blank');
      
      // Create an image element
      var image = document.createElement('img');

      // Set some attributes
      image.setAttribute('src', el.url);        // The url of the image
      image.setAttribute('alt', el.caption);    // The alternative text
      image.setAttribute('title', el.caption);  // The tooltip which is the same then the previous attribute
      
      // Create the caption element
      var caption = document.createElement('caption');
      
      // Add the text content to the caption
      caption.innerText = el.caption;

      // Append (link) the image and caption to our gallery item container
      galleryItem.appendChild(image);
      galleryItem.appendChild(caption);
      
      // Append the gallery item to our gallery element
      gallery.appendChild(galleryItem);
    });
  });
});
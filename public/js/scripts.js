var preview = document.querySelector('img');

// The recommended way from within the init configuration:
Dropzone.options.myDropzone = {
  init: function() {
    this.on("success", function(file) {
      alert("Added file.");

      var reader  = new FileReader();

      reader.onloadend = function () {
        preview.src = reader.result;
      }

      if (file) {
        reader.readAsDataURL(file);
      } else {
        preview.src = "";
      }

    });
  }
};

var mydata;
Dropzone.options.autoProcessQueue = true;
var myDropzone = new Dropzone("#my-dropzone", { url: "/file/post"});


// This example uses jQuery so it creates the Dropzone, only when the DOM has
// loaded.

// // Disabling autoDiscover, otherwise Dropzone will try to attach twice.
// Dropzone.autoDiscover = false;
// // or disable for specific dropzone:
// // Dropzone.options.myDropzone = false;
// Dropzone.options.autoProcessQueue = true;


// var myfile;

// var drop = $(function() {
//   // Now that the DOM is fully loaded, create the dropzone, and setup the
//   // event listeners
//   var myDropzone = new Dropzone("#my-dropzone", { url: "/file/post"});
//   myDropzone.on("addedfile", function(file) {
//     /* Maybe display some more file information on your page */
//     myfile = file;

//     console.log(myfile);
//   });
//   return myDropzone;
// }


// This example uses jQuery so it creates the Dropzone, only when the DOM has
// loaded.

// // Disabling autoDiscover, otherwise Dropzone will try to attach twice.
// Dropzone.autoDiscover = false;
// Dropzone.options.autoProcessQueue = true;
// var myfile;
// $(function() {
//   // Now that the DOM is fully loaded, create the dropzone, and setup the
//   // event listeners
//   var myDropzone = new Dropzone("#my-dropzone", { url: "/file/post"});
//   $("#my-dropzone").dropzone({ url: "/file/post" });
//   myDropzone.on("addedfile", function(file) {
//     /* Maybe display some more file information on your page */
//     var myfile = file
    
//     var img = document.createElement('img');
//     img.setAttribute('src', 'file/post')
//     myfile = myDropzone.files[0]
//     console.log(img);
//   });

// })

// function getPalette(img){
      
//     var vibrant = new Vibrant(img);
//     var swatches = vibrant.swatches();
//     for (swatch in swatches) {  
//         if (swatches.hasOwnProperty(swatch) && swatches[swatch]){
//             console.log(swatch, swatches[swatch].getHex());
//           };
//         };

//     /*
//      * Results into:
//      * Vibrant #7a4426
//      * Muted #7b9eae
//      * DarkVibrant #348945
//      * DarkMuted #141414
//      * LightVibrant #f3ccb4
//      */


// };
Dropzone.autoDiscover = false;

// The recommended way from within the init configuration:
Dropzone.options.myDropzone = {
  thumbnailWidth: null,
  thumbnailHeight: 600,  
  init: function() {
    this.on("success", function(file) {
      $('.dz-message span').hide();
      // var preview = document.querySelector('img');
      var reader  = new FileReader();

      // reader.onloadend = function () {
      //   preview.src = reader.result;
      //   preview.crossOrigin = "Anonymous";
      // }

      // if (file) {
      //   reader.readAsDataURL(file);
      // } else {
      //   preview.src = "";
      // }
      getImage();
    });
  },

};

var myDropzone = new Dropzone("#my-dropzone", {
  url: "/file/post",
});

function getImage(){
  $('.dz-image img').load(function(){
    imagesrc = $('.dz-image img').attr('src');
    getPalette(imagesrc);
  });
};

function getPalette(imgsrc){
  var img = document.createElement('img');
  img.setAttribute('src', imgsrc);
      
    var vibrant = new Vibrant(img);
    var swatches = vibrant.swatches();
    for (swatch in swatches) {  
        if (swatches.hasOwnProperty(swatch) && swatches[swatch]){
            console.log(swatch, swatches[swatch].getHex());
            $('<div style="color: #FFFFFF; background-color:'+swatches[swatch].getHex()+'">'+swatch+'</div>').appendTo('#vibrant-results');
          };
        };

    /*
     * Results into:
     * Vibrant #7a4426
     * Muted #7b9eae
     * DarkVibrant #348945
     * DarkMuted #141414
     * LightVibrant #f3ccb4
     */


};
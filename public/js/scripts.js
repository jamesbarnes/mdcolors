all_colors = buildFlatPalette()

Dropzone.autoDiscover = false;
Dropzone.options.myDropzone = {
  thumbnailWidth: null,
  thumbnailHeight: 600,  
  init: function() {
    this.on("success", function(file) {
      $('.dz-message span').hide();
      var reader  = new FileReader();
      getImage();
    });
  },
};

var myDropzone = new Dropzone("#my-dropzone", {
  url: "/file/post",
});

function getImage(){
  console.log("getImage");
  
    imagesrc = $('.dz-image img').attr('src');
    getPalette(imagesrc);
  
};

function getPalette(imgsrc){
  console.log("getPalette");
  var img = document.createElement('img');
  img.setAttribute('src', imgsrc);
    my_swatches = {}
    i = 0;
    var vibrant = new Vibrant(img);
    var swatches = vibrant.swatches();
    for (swatch in swatches) {  
        if (swatches.hasOwnProperty(swatch) && swatches[swatch]){
            console.log(swatch, swatches[swatch].getHex());
            $('<div style="color: #FFFFFF; background-color:'+swatches[swatch].getHex()+'">'+swatch+' '+swatches[swatch].getHex()+'</div>').appendTo('#vibrant-results');
            rgb_color = hexToRgb(swatches[swatch].getHex());
            my_swatches[i] = { 'hex': swatches[swatch].getHex(), 'name':swatch, 'rgb': rgb_color}
            nearest_color = findNearestColors(my_swatches[i]);
            $('<div style="color: #FFFFFF; background-color:'+nearest_color['hex']+'">'+nearest_color["name"]+' '+nearest_color["hex"]+'</div>').appendTo('#material-results');
            i++;
          };
        };
  return my_swatches
};

function findNearestColors(color){
  console.log("findNearestColors");
  var rgb = color['rgb']
  var difference = []
  $.each(all_colors,function(key,value){
    difference.push(Math.sqrt((rgb['r']-value['rgb']['r'])*(rgb['r']-value['rgb']['r'])+(rgb['g']-value['rgb']['g'])*(rgb['g']-value['rgb']['g'])+(rgb['b']-value['rgb']['b'])*(rgb['b']-value['rgb']['b'])));
  });
  material_index = getMaterialColor(difference);
  return (all_colors[material_index]);
}

function getMaterialColor(difference_array){
  console.log("getMaterialColor");
  value = _.min(difference_array);
  console.log("value = "+value );
  var key = difference_array.indexOf(value);
  console.log("key = "+ key);
  return key;
}

function buildFlatPalette(){

  var all_colors = {};
  i=0;
  $.each(palette['palette'], function(key, value) {
    topkey = key;
    $.each(palette['palette'][topkey], function(key, value){
      md_name = topkey + ' ' + key;
      rgb_color = hexToRgb(value);
      all_colors[i] = { 'hex': value, 'name':md_name, 'rgb':rgb_color }
      i++;
    });
  });
  return all_colors;
}


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
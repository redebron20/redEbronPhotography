// collage
const $grid = $('.grid').masonry({
 
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
});

layout Masonry after each image loads
$grid.imagesLoaded( function() {
  $grid.masonry();
});  

// $(function(){
 
//     const $container = $('.grid.masonry-gal');
  
//     $container.imagesLoaded( function(){
//       $container.masonry({
//         itemSelector : '.masonryImage'
//       });
//     });
  
//   });
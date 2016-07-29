$(function(){
  'use strict';
  var $body    = $('html, body'), // Define jQuery collection 
  var $page = $('.cont'),
      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        forms: 'form',
        onStart: {
          duration: 500, // Duration of our animation
          render: function ($container) {
            // Add your CSS animation reversing class
            $container.addClass('is-exiting');
            // Restart your animation
            smoothState.restartCSSAnimations();
            // Scroll user to the top
            $body.animate({ 'scrollTop': 0 });
          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-exiting');
            // Inject the new content
            $container.html($newContent);
            
          }
        }
      },
      smoothState = $page.smoothState(options).data('smoothState');


});
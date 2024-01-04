    /*-----------------------------------------------------------------
      Show/hide additional info
    -------------------------------------------------------------------*/

    $('.js-btn-toggle').on('click', function(e) {     
        $('.js-show').toggle('slow');
        e.preventDefault();
    });
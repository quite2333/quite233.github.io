(function( $ ) {
  $.fn.camRollSlider = function() {
    var wrapper      = this;
    var screenRoll   = this.find('.crs-screen-roll');
    var screenItems  = this.find('.crs-screen-item');
    var barRollWrap  = this.find('.crs-bar-roll-wrap');
    var barRoll      = this.find('.crs-bar-roll');
    var barItem      = this.find('.crs-bar-roll-item');
    var barFirstItem = this.find('.crs-bar-roll-item:first-child');
    var current;

    var swidth;


    function moveScreenTo(index) {
      screenRoll.css('left', -wrapper.width() * index);
    }

    function moveBarTo(index) {

      var barRollPos = (barRollWrap.width() / 2) 
        - (barItem.width() / 2)
        - $(barItem[index]).position().left;

      barRoll.css('left', barRollPos);
    }

    function moveToItem(target) {
      var index;

      if(typeof target  === 'number') {
        index = target;
      } else {
        index = $(target).index();
      }

      current = index;

      moveScreenTo(index, null);
      moveBarTo(index, null);
    }

    function setSizePos() {
      swidth=$(document).width();
      if(swidth<550){
        barItem.css('width', 30);
      }
      else if(swidth>=550){
        barItem.css('width', 60);
      }

      // set screen roll width
      screenRoll.css('width', screenRoll.children().length * wrapper.width() );
      
      // set screen items width
      screenItems.css('width', wrapper.width() );
      
      // set bar roll width
      barRoll.css('width', (barRoll.children().length * barFirstItem.width())
       + ((barRoll.children().length-1) * parseInt(barFirstItem.css('margin-right'))) );

      //set bar roll pos
      barRoll.css('transition', 'all');
      screenRoll.css('transition', 'all');

      moveToItem(current, null);
      
      setTimeout(function() {
        barRoll.css('transition', '');
        screenRoll.css('transition', '');
      }, 0);


    }
    var flag;
    function barinit(){
      flag=document.getElementById("my-slider");
      
      if(flag==null){
        setTimeout(function() {
          barFirstItem=document.getElementsByClassName("");
          wrapper=document.getElementsByClassName("");
          screenRoll   = document.getElementsByClassName("crs-screen-roll");
          screenItems = document.getElementsByClassName("crs-screen-item");
          barRollWrap = document.getElementsByClassName("crs-bar-roll-wrap");
          barRoll= document.getElementsByClassName("crs-bar-roll");
          barItem= document.getElementsByClassName("crs-bar-roll-item");
          barFirstItem= document.getElementsByClassName("crs-bar-roll-item:first-child");
          barinit();
        }, 150);
      }
      else{
        setSizePos();
      }
  }
    // initial
    current = 0;

    barinit();


    barItem.click(function() {
      moveToItem(this);
    });

    $( window ).resize(function() {
        setSizePos();
    });

    // return jQuery chain
    return this;
  };
}( jQuery ));

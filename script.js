$(document).ready(function(){
    
    $("#banner").css({"font-size": "300%", "visibility": "visible"});
    $(".card-img-overlay").css({"border": "5px solid green"});
    $(".card-title").css({"text-shadow": " 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black", "color": "yellow", "font-size": "200%"});
    $(".card-text, #catalog").css({"text-shadow": " 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black"});

    $('#submitBtn').css({"background-color": "purple", "color": "white", "border":"2px solid yellow"})

    
    $("#banner").css({"font-size": "300%", "visibility": "visible"});
    $('.card-text').not(".banner").css({"visibility":"hidden"});

    $('#commentHelpInline').hide();
    $('#userHelpInline').hide();
    $('#titleHelpInline').hide();


        
    
    $( ".card-img-overlay" ).hover(
        function() {
        //   $(".card-title").css({'visibility': 'visible'});
          $(this).children(".card-text").not(".banner").css({'visibility': 'visible'});

            console.log("hover");
            $( this).children(".card-text").css({'visibility': 'visible'});},
            function() {
                $(".card-text").not(".banner").css({'visibility': 'hidden'});
                console.log("hover out");
                $( this).children(".card-text").not(".banner").css({'visibility': 'hidden'});
              }
      ); 

      $("#banner").css({"font-size": "300%", "visibility": "visible"});


    function buttonEnable(){
        let user = $('#inputUser').val();
        let title = $('#inputTitle').val();
        let comment = $('#inputComment').val();
        if(user.length >= 6 && comment !== '' && title !=='') {
            $('#submitBtn').prop('disabled', false);
        }
    }

    // $("img").hover(function(){
    //     var $x = $(".card-title");
    //     $x.prop("visibility", "visible");
    //   });

    let user = $('#inputUser').val();
    let title = $('#inputTitle').val();
    let comment = $('#inputComment').val();


    $('#inputUser').focusin(function(){
        buttonEnable();
    $('#userHelpInline').show();
         });

    $('#inputUser').focusout(function(){
        buttonEnable();
        let user = $('#inputUser').val();
        if (user.length >= 6){
    $('#userHelpInline').hide();
        }else { $('#userHelpInline').show();}
        });

        $('#inputUser').focusin(function(){
            buttonEnable();
            let user = $('#inputUser').val();
            if (user.length >= 6){
        $('#userHelpInline').hide();
            }else { $('#userHelpInline').show();}
            });

    $('#inputTitle').focusin(function(){
    $('#titleHelpInline').show();
        });
    
    $('#inputTitle').focusout(function(){
        buttonEnable();
        if ($('#inputTitle').val() === ''){
    
    $('#titleHelpInline').show();
        }else { $('#titleHelpInline').hide();}
        });    

        $('#inputComment').focusin(function(){
            $('#commentHelpInline').show();
                 });
        
            $('#inputComment').focusout(function(){
                if ($('#inputComment').val() === ''){
            $('#commentHelpInline').show();
                }else { $('#commentHelpInline').hide();}
                });    
    
    $('#inputComment').change(function(){
        buttonEnable();

});

    // $('#inputUser').change(function(){
    //     alert("The text has been changed.");
    //         $('#submitBtn').prop('disabled', false);
    //     });

    

    });

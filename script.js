$(document).ready(function(){
    $(".card-img-overlay").css({"border": "5px solid green"});
    $(".card-title").css({"text-shadow": " 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black", "color": "yellow", "font-size": "200%"});
    $(".card-text").css({"text-shadow": " 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black"});

    
    $("#banner").css({"font-size": "300%"});

    $('#commentHelpInline').hide();
    $('#userHelpInline').hide();
    $('#titleHelpInline').hide();

        
    
    $( "img" ).hover(
        function() {
          $(".card-text").append( $( "<span>***</span>" ) );
        }, function() {
        $( this ).find( "span" ).last().remove();
        }
      ); 

    function buttonEnable(){
        let user = $('#inputUser').val();
        let title = $('#inputTitle').val();
        let comment = $('#inputComment').val();
        if(user.length >= 6 && comment !== '' && title !=='') {
            $('#submitBtn').prop('disabled', false);
        }
    }

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

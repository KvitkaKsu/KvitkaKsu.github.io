    
    /*mob-menu*/

    function openbox(id) {
        if (document.getElementById(id).style.display == "none")
           {document.getElementById(id).style.display = "block"}
        else
           {document.getElementById(id).style.display = "none"}
        }

    function closebox(id) {
        if (document.getElementById(id).style.display == "none")
            {document.getElementById(id).style.display = "block"}
        else
            {document.getElementById(id).style.display = "none"}
        }

    /*mob-menu*/

    /*team*/

    var $team_item = $('.team-acco__item');
    
    $team_item.on('click', function team_acco() {
        var item = $(this);
        item.toggleClass('team-acco__item--active')
            .siblings()
            .removeClass('team-acco__item--active')
    })

    /*team*/

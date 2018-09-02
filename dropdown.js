var menu= document.querySelectorAll('#drop >li');

    for (var i=0; i<menu.length; i++){
        menu[i].addEventListener('click',function(){
            var menulist = document.querySelectorAll('#drop >li >ul');
            for (var j=0; j<menulist.length; j++){
                menulist[j].style.display = "none";
            }
            this.children[1].style.display = "block";
        })

    }
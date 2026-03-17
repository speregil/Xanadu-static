const BASE_PATH = "../assets/comic/comic-";
const COMIC_PAGE = document.getElementById('comic-page');
const MAX_PAGE = 45;

var current_page = 1;
update();

function update()
{
    COMIC_PAGE.src = BASE_PATH + current_page + ".jpg";
}

function next(){
    if(current_page < MAX_PAGE){
        current_page++;
        update();
    }
}

function prev(){
    if(current_page > 1){
        current_page--;
        update();
    }
}
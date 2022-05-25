getCategories();

function getCategoryTitle(url){
    var titleCategories = []
    var idCategories = []
    var template = {}

    fetch('https://elearning-aueb.herokuapp.com/categories', {
    method : 'GET',
    headers : {
        'Accept': 'application/json'
    }
    })
    .then(res => res.json())
    .then(data => {
        for (i = 0; i < data.length; i++){
            if (data[i].id == url){
                titleCategories[i] = data[i].title;
                idCategories[i] = data[i].id;
            }
        }
        let categoriesTitleScript = document.getElementById("categoryTitle-template");
        template.categoryTitleDetails = Handlebars.compile(categoriesTitleScript.textContent);

        for (i = 0; i < data.length; i++){
            var categoryTitleShow = template.categoryTitleDetails({
                categoryTitle : [
                    { title : titleCategories[i],
                      id : idCategories[i]
                    }
                ]
            });
            document.getElementById("categoryTitle").innerHTML += categoryTitleShow;   
        }
    });
}

function showCourses(url){
    var titleData = []
    var objectivesData = []
    var descriptionData = []
    var imgData = []
    var data=getCategories()
    
    var templates = {}
    fetch("https://elearning-aueb.herokuapp.com/courses/search?category=" + url,{
    method : 'GET',
    headers : {
        'Accept': 'application/json'

    }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for (i = 0; i < data.length; i++){
            titleData[i] = data[i].title;
            objectivesData[i] = data[i].objectives;
            descriptionData[i] = data[i].description;
            imgData[i] = data[i].img;
        }
        let lessonsScript = document.getElementById("lessons-template");
        templates.lessonsDetails = Handlebars.compile(lessonsScript.textContent);

        for (i = 0; i < titleData.length; i++){
            var lessonShow = templates.lessonsDetails({
                course : [
                    {   title : titleData[i],
                        objectives : objectivesData[i],
                        description : descriptionData[i],
                        img : imgData[i]
                    }
                ]
            });
            document.getElementById("lessons").innerHTML += lessonShow;   
        }
    });
}

window.addEventListener('load', function(){

    var url = window.location.search;
    url = url.replace("?category=", '');
    getCategoryTitle(url);
    showCourses(url);

})
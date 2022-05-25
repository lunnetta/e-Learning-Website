let myHeaders = new Headers();
myHeaders.append('Accept', 'application/json');

/* initialize object */
let init = { method: "GET", headers: myHeaders }

/* Fuction for get all Categories */
function getCategories(){

    fetch('https://elearning-aueb.herokuapp.com/categories', init)
    .then((response) =>{
        return response.json()
    })
    .then(function(obj){
        console.log('Received object', obj)
    })
    .catch(function(error){
        console.log('Received error', error)
    })
}

function searchForCourse(){
    var idData = []
    var titleData = []
    var categoryData = []
    var objectivesData = []
    var descriptionData = []
    var imgData = []
    var data=getCategories()
    
    document.getElementById("searchCourses").innerHTML = ""; // adeiazoume th selida wste na mpoun ta nea dedomena se periptwsh 2hs anazhthshs kai panw.
    var templates = {}
    var keyword = document.getElementById("searchInput").value;
    fetch("https://elearning-aueb.herokuapp.com/courses/search?title=" + keyword,{
    method : 'GET',
    headers : {
        'Accept': 'application/json'

    }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for (i = 0; i < data.length; i++){
            idData[i] = data[i].id;
            titleData[i] = data[i].title;
            categoryData[i] = data[i].category;
            objectivesData[i] = data[i].objectives;
            descriptionData[i] = data[i].description;
            imgData[i] = data[i].img;
        }
        let courseDetailsScript = document.getElementById("course-details-template");
        templates.courseDetails = Handlebars.compile(courseDetailsScript.textContent);

        for (i = 0; i < titleData.length; i++){
            var courseShow = templates.courseDetails({
                course : [
                    {   id : idData[i],
                        title : titleData[i],
                        category : categoryData[i],
                        objectives : objectivesData[i],
                        description : descriptionData[i],
                        img : imgData[i]
                    }
                ]
            });
            document.getElementById("searchCourses").innerHTML += courseShow;   
        }
    });
}

function showCategories(){
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
            titleCategories[i] = data[i].title;
            idCategories[i] = data[i].id;
        }
        let categoriesScript = document.getElementById("categories-template");
        template.categoryDetails = Handlebars.compile(categoriesScript.textContent);

        for (i = 0; i < data.length; i++){
            var categoryShow = template.categoryDetails({
                category : [
                    { title : titleCategories[i],
                      id : idCategories[i]
                    }
                ]
            });
            document.getElementById("categories").innerHTML += categoryShow;   
        }
    });
}

window.addEventListener('load', function(){

    showCategories();

})
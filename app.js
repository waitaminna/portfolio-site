// so I want to make a class for Project with an image, a link, and a description.
class Project {
    constructor(title, url, imageSrc, description) {
        this.title = title;
        this.url = url;
        this.imageSrc = imageSrc;
        this.description = description;
    }
}
var projList = []; // this to be an array of project objects
projList.unshift(new Project('Cat Clicker', 'https://silly-wing-1ed25f.netlify.app/', 'mini-images/cat_clicker.png', 
                "A take on the classic simple cat-clicker game! This project was completed as part of RMIT's website developer course."));


// Below is a messy way of creating a transition onto the page by altering classes for CSS to alter! transitions bb
const aboutButton = $('.about')[0];
const projButton = $('.projects')[0];
const enquireButton = $('.enquire')[0];
const aboutPage = $('#about-page');
const projPage = $('#projects-page');
const enquirePage = $('#enquire-page');

aboutButton.addEventListener('click', function() {
    aboutPage.toggleClass('active');
    $('.container').css('z-index', '1');
    console.log(`about-page has 'active' class: ${aboutPage.hasClass('active')}`);
    
});
projButton.addEventListener('click', function() {
    projPage.toggleClass('active');
    $('.container').css('z-index', '1');
    console.log(`about-page has 'active' class: ${projPage.hasClass('active')}`);
    
});
enquireButton.addEventListener('click', function() {
    enquirePage.toggleClass('active');
    $('.container').css('z-index', '1');
    console.log(`about-page has 'active' class: ${enquirePage.hasClass('active')}`);
    
});

const back = $('.back');

for (let i=0; i<back.length; i++) {
    back[i].addEventListener('click', function() {
        const activePage = $('.active');
        console.log(activePage);
        activePage.toggleClass('active');
        setTimeout( () => { $('.container').css('z-index', '-1'); }, 500);
    })
}

// okay now that's over, let's do something else: create our projects page!! woohoo!
// projPage 

let template = $('script[data-template="project"]').html();
console.log(template);
for (let i=0; i<projList.length; i++) {
    let proj = projList[i];
    var thisTemplate = template.replace(/{{title}}/g, proj.title);
    thisTemplate = thisTemplate.replace(/{{url}}/g, proj.url);
    thisTemplate = thisTemplate.replace(/{{imageSrc}}/g, proj.imageSrc);
    thisTemplate = thisTemplate.replace(/{{description}}/g, proj.description);

    projPage.append(thisTemplate);
}
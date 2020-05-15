// var course = new Object();
//
// course.title = "Intro to JavaScript"
// course.instructor = "LinkedIn"
// course.level = 1;
// course.published = true;
// course.views = 0;
// // OR
// var course = {
//   title = "Intro to JavaScript"
//   instructor = "LinkedIn"
//   level = 1;
//   published = true;
//   views = 0;
// }

function Course(title,instructor,level,published,views){
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function(){
    return ++this.views;
  };
}

var courses = [
  new Course("Intro to JavaScript","LinkedIn", 1, true, 0),
  new Course("Intro to HTML","LinkedIn", 1, true, 0)
];

console.log(courses);

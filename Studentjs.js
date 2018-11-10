var model = {
  Students: {
    "firstName": ["Joe", "Bob"],
    "lastName": ["Montana", "Montana"],
    "Grades": {
    "Courses": ["Biology", "Chemistry", "Calculus"],
    "GPA": ["A", "B", "D"]}
    }
};

var controller = {
  init: function() {
    studentView.init();
  },
  getStudents: function() {
    return model.Students;
  }
};


var studentView = {

  init: function() {
    this.student = document.getElementById('a').value;
    this.render();
  },

  render: function() {
    var students = controller.getStudents();
    var str = ""
    for (var i = 0; i <= students.lastName.length; i++) {
      if (students.lastName[i] == this.student) {
        str += "<li>" + students.firstName[i] + " " + students.lastName[i] + "</li>";
        console.log(str)
      }
      for (var i=0; i<= students.lastName.length; i++) {
        document.getElementById("studentList").addEventListener("click", function(){
        console.log("hey");
      });
  }
    document.getElementById('studentList').innerHTML = str;
  //  var htmlStr = '';
  //  htmlStr += '<span>' + model.farm.cow + '</span> <span>' + model.farm.pig + '</span>';

    //this.barn.insertAdjacentHTML('beforeend', htmlStr);
  }
}
}

document.getElementById("searchButton").addEventListener("click", function(){
controller.init();
});

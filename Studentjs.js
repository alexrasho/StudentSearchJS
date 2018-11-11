var model = { //model
  Students: {
    "firstName": ["Joe", "Bob", "Burt", "John"],
    "lastName": ["Montana", "Smith", "Williams", "Doe"],
    "Grades": {
      "Courses": ["Biology", "Chemistry", "Calculus", "History", "Physics", "Astronomy",
        "Psychology", "Physics", "Chemistry", "Art Appreciation", "Geometry", "Giology", "Health", "Writing", "Biology",
        "History"
      ],
      "Grade": ["A", "B", "D", "D", "B", "C", "A", "F", "C", "A", "B", "B", "A", "C", "A", "D"]
    }
  }
};

var controller = { //controller
  init: function() {
    studentView.init();
  },
  getStudents: function() {
    return model.Students;
  },
  initView2: function() {
    studentView2.render();
  }
};


var studentView = { //view for the search action

  init: function() {
    this.student = document.getElementById('a').value;
    this.render();
  },

  render: function() { //output function
    var students = controller.getStudents();
    var str = ""
    for (var i = 0; i <= students.lastName.length; i++) {
      if (students.lastName[i] == this.student) {
        str += "<li>" + students.firstName[i] + " " + students.lastName[i] + "</li>";
        //      console.log(this.student)
      }
    }
    document.getElementById("studentList").addEventListener("click", function() {
      controller.initView2();

      var studentOutput = document.getElementById("studentList").value
    });
    document.getElementById('studentList').innerHTML = str;
    //  var htmlStr = '';
    //  htmlStr += '<span>' + model.farm.cow + '</span> <span>' + model.farm.pig + '</span>';

    //this.barn.insertAdjacentHTML('beforeend', htmlStr);
  }
}

var studentView2 = { //view for the student table
  render: function() { //output function 2
    var students = controller.getStudents();
    var selectedStudent = document.getElementById('a').value;
    var str = ""

    for (var i = 0; i <= students.lastName.length; i++) { //display the student
      if (students.lastName[i] == selectedStudent) {
        str += students.firstName[i] + " " + students.lastName[i];
      }
    }
    document.getElementById('student').innerHTML = str;

    var table = document.getElementById("studentTable");

    for (var i = 0; i < students.lastName.length; i++) { //output to left columns
      if (selectedStudent == students.lastName[i]) {
        i *= 3 //to get the correct course
        for (var r = 1, n = table.rows.length; r < n; r++) {
          for (var c = 0, m = table.rows[r].cells.length; c < m; c += 2) {
            table.rows[r].cells[c].innerHTML = students.Grades.Courses[i];
            i++;
            //                console.log(students.Grades.Courses[i])
          }
        }
        for (var r = 1, n = table.rows.length; r < n; r++) { //output to right columns
          for (var c = 1, m = table.rows[r].cells.length; c < m; c += 2) {
            table.rows[r].cells[c].innerHTML = students.Grades.Grade[i];
            i++;
          }
        }
      }
    }
  }
}

document.getElementById("searchButton").addEventListener("click", function() {
  controller.init(); //first function
});

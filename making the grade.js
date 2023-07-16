<!DOCTYPE html>
<html>
<head>
    <title>Student Data</title>
</head>
<body>
    <h1>Student Data</h1>
    <div id="output"></div>

    <script>
        var grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        function displayStudentData() {
            var students = grades.split(", ");
            var totalStudents = students.length;
            var totalGrades = 0;
            var highestGrade = -Infinity;
            var lowestGrade = Infinity;

            var studentData = "";

            for (var i = 0; i < totalStudents; i++) {
                var [name, grade] = students[i].split("|");
                var formattedName = capitalizeFirstLetter(name);
                var parsedGrade = parseInt(grade);
                totalGrades += parsedGrade;
                highestGrade = Math.max(highestGrade, parsedGrade);
                lowestGrade = Math.min(lowestGrade, parsedGrade);

                studentData += formattedName + " - " + parsedGrade + "<br>";
            }

            var averageGrade = totalGrades / totalStudents;
            studentData += "<br>";
            studentData += "Total Students: " + totalStudents + "<br>";
            studentData += "Highest Grade: " + highestGrade + "<br>";
            studentData += "Lowest Grade: " + lowestGrade + "<br>";
            studentData += "Average Grade: " + averageGrade.toFixed(2) + "<br>";

            document.getElementById("output").innerHTML = studentData;
        }

        displayStudentData();
    </script>
</body>
</html>

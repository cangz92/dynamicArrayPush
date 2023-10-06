// Aufgabe

/* Erstelle einen Array mit 5 Studenten jeder Student besteht aus 'Name', 'Matrikelnummer'. 'NC' */

/* Erstelle eine Funktion, die mit Hilfe einer Schleife, jeden Studenten in die Konsole ausgibt und den NC aller Studenten summiert um einen Durchschnitt zu erhalten (Durschnitt = Totale Summe / Anzahl) */

// Hinweis : Funktion aufrufen !

var students = [
    {name:"Caner", id:1, NC:3.3},
    {name:"Hegel", id:2, NC:4.2},
    {name:"Knecht", id:3, NC:1.2},
    {name:"Hänger", id:4, NC:5.1},
    {name:"Knabe", id:5, NC:2.0}
]
function studentsNC() {
var student;
var totalNC = 0;

for (let i = 0; i < students.length; i++) {

    student = students[i];

    console.log (student)

    

    totalNC += student.NC 
    var avrgNC = totalNC / students.length

    console.log ("total :" + totalNC)

}
    console.log("durschnitt: " + avrgNC.toFixed(2))
}

function addStudent(){

    var name = document.getElementById('inputName').value;
    var id = parseInt(document.getElementById('inputId').value);
    var nc = parseFloat(document.getElementById('inputNC').value);
    
    var student = {
        name: name,
        id:id,
        NC:nc
    };

    students.push(student);
    console.log(students)

}
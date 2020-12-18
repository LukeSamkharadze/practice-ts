namespace School {
    export class Pupil {
        askQuestion() {
            console.log('asks questions to a ', new Teacher())
        }
    }
}

import Teacher = School.Teacher;
import Pupil = School.Pupil;
import GradeBook = School.GradeBook;

new Teacher().writeGrade(new Pupil(), new GradeBook());
{
    type name = string;

    interface Teacher {
        name: name
    }

    interface Pupil {
        name: name
    }

    const teacher: Teacher = {
        name: 'Oliver'
    }
}
{
    interface teacher {
        email: string
    }

    interface pupil {
        group: number
    }

    const n: teacher | pupil = {
        group: 2
        // compatible to at least one of them
    }
}
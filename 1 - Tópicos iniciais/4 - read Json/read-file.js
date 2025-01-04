const { jsonData } = require('./file.js');

const parseTimestamp = (timestamp) => {
    return new Date(timestamp)
}

for(const course of jsonData) {
    console.log(`Curso: ${course.id} - ${course.title}`)

    for(const lesson of course.lessons) {
        console.log(`   Aula ${lesson.id}: ${lesson.title}`)
        console.log(`       Média: ${lesson.media}`)
        console.log(`       Timestemp: ${parseTimestamp(lesson.timestamp)}`)
    }
}
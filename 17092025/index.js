console.log(notasPorAlumnoYMateria)

// 1. Registrar los datos de los estudiantes en estructuras adecuadas.

/*alumno = {
    padron: 545454,
    nombre_apellido: "Juan Perez",
    edad: 25,
    materias: [
        {
            nombre: "Ética y Datos",
            parcial1: 5,
            parcial2: 10
        },
        {
            nombre: "Programación I (Python)",
            parcial1: 8,
            parcial2: 9
        },
    ]
}*/

const cargarAlumnosFormateados = () => {


    const nuevaListaFormateadaAlumnos = []
    
    for(let indice = 0; indice < notasPorAlumnoYMateria.length; indice++){
    
        const alumno = notasPorAlumnoYMateria[indice]
        const padron = alumno.padron
        const nombreApellido =  alumno.nombre_apellido
        const edad =  alumno.edad
        const materia = {nombre: alumno.materia, parcial1: alumno.parcial1, parcial2: alumno.parcial2}
        const materias = [materia]
    
        const alumnoFormateado = {
            padron: padron, 
            nombreApellido: nombreApellido, 
            edad: edad, 
            materias: materias
        }

        if(!existeAlumnoEnLista(nuevaListaFormateadaAlumnos, padron)){
            nuevaListaFormateadaAlumnos.push(alumnoFormateado)
        } else {
            const alumnoEncontrado = obtenerAlumnoPorPadron(nuevaListaFormateadaAlumnos, padron)
            alumnoEncontrado.materias.push(materia)
        }
        
    }

    console.log("Nueva lista: ", nuevaListaFormateadaAlumnos)
    return nuevaListaFormateadaAlumnos
}

const existeAlumnoEnLista = (listaAProcesar, padron) => {

    let existe = false

    for (let index = 0; index < listaAProcesar.length; index++) {
        const itemListaAProcesar = listaAProcesar[index];

        if(padron === itemListaAProcesar.padron){
            existe = true
            break
        }
    }
    return existe
}

const obtenerAlumnoPorPadron = (listaAProcesar, padron) => {

    let alumnoEncontrado = null

    for (let index = 0; index < listaAProcesar.length; index++) {
        const itemListaAProcesar = listaAProcesar[index];

        if(padron === itemListaAProcesar.padron){
            alumnoEncontrado = itemListaAProcesar
            break
        }
    }

    return alumnoEncontrado
}

const alumnos = cargarAlumnosFormateados()

// 2. Calcular y mostrar el promedio de cada estudiante

mostrarPromedioDeCadaEstudiante = (alumnos) => {

    for (let index = 0; index < alumnos.length; index++) {
        const alumno = alumnos[index];
        const promedio = promedioPorAlumno(alumno)
        console.log("El alumno " + alumno.nombreApellido + ", tiene un promedio de: " + promedio)
    }
}

promedioPorAlumno = (alumno) => {

    let sumaNotas = 0
    for (let index = 0; index < alumno.materias.length; index++) {
        const materia = alumno.materias[index];
        sumaNotas += materia.parcial1 + materia.parcial2
    }

    return sumaNotas / (2 * alumno.materias.length)
}

mostrarPromedioDeCadaEstudiante(alumnos)

/**
 * Armar los datos de 4 alumnos
 */

// Alumno 1
const nombreCompleto1 = "Carolina Gomez"
const fechaNacimiento1 = new Date(1988, 5, 21)
const notaObtenidaEnUltimoFinal1 = 6
const cantidadFinalesAprobados1 = 20

// Alumno 2
const nombreCompleto2 = "Juan Perez"
const fechaNacimiento2 = new Date(1980, 2, 12)
const notaObtenidaEnUltimoFinal2 = 9
const cantidadFinalesAprobados2 = 15

// Alumno 3
const nombreCompleto3 = "Mariela Gimenez"
const fechaNacimiento3 = new Date(1999, 1, 29)
const notaObtenidaEnUltimoFinal3 = 1
const cantidadFinalesAprobados3 = 17

// Alumno 4
const nombreCompleto4 = "Santiago Ramirez"
const fechaNacimiento4 = new Date(2015, 6, 15)
const notaObtenidaEnUltimoFinal4 = 4
const cantidadFinalesAprobados4 = 22

/**
 * Hacer un saludo personalizado para cada estudiante
 */

console.log(`Bienvenida ${nombreCompleto1}, que nacio en ${fechaNacimiento1}
    , que obtuvo la nota ${notaObtenidaEnUltimoFinal1} y aprobo ${cantidadFinalesAprobados1} materias`)
console.log("Bienvenido " +  nombreCompleto2 + ", que nacio en " + fechaNacimiento2 + 
    ", que obtuvo la nota " + notaObtenidaEnUltimoFinal2 + " y aprobo" + cantidadFinalesAprobados2 + " materias")
console.log('Bienvenida ' +  nombreCompleto3 + ', que nacio en ' + fechaNacimiento3 + 
    ', que obtuvo la nota ' + notaObtenidaEnUltimoFinal3 + ' y aprobo' + cantidadFinalesAprobados3 + ' materias')
    console.log('Bienvenido ' +  nombreCompleto4 + ', que nacio en ' + fechaNacimiento4 + 
    ', que obtuvo la nota ' + notaObtenidaEnUltimoFinal4 + ' y aprobo' + cantidadFinalesAprobados4 + ' materias')

/**
 * Clasificación por edad: Analizar si es mayor o menor de edad y mostrarlo en el resultado.
 */

const edadPersona1 = 2025 - fechaNacimiento1.getFullYear()
const edadPersona2 = 2025 - fechaNacimiento2.getFullYear()
const edadPersona3 = 2025 - fechaNacimiento3.getFullYear()
const edadPersona4 = 2025 - fechaNacimiento4.getFullYear()

if(edadPersona1 >= 18){
    console.log(nombreCompleto1 + " es mayor de edad")
} else {
    console.log(nombreCompleto1 + " es menor de edad")
}

if(edadPersona2 >= 18){
    console.log(nombreCompleto2 + " es mayor de edad")
} else {
    console.log(nombreCompleto2 + " es menor de edad")
}

if(edadPersona3 >= 18){
    console.log(nombreCompleto3 + " es mayor de edad")
} else {
    console.log(nombreCompleto3 + " es menor de edad")
}

if(edadPersona4 >= 18){
    console.log(nombreCompleto4 + " es mayor de edad")
} else {
    console.log(nombreCompleto4 + " es menor de edad")
}

/**
 * Evaluación del examen:
 * 
 * Dependiendo de la nota obtenida:
        Menor a 4: “Debe reforzar mucho sus conocimientos”
        Entre 4 y 6: “Nivel básico”
        Entre 7 y 8: “Nivel intermedio”
        9 o 10: “Nivel avanzado”
 */

// Probamos para el alumno 1
if(notaObtenidaEnUltimoFinal1 > 0 && notaObtenidaEnUltimoFinal1 < 4){
    console.log("Debe reforzar mucho sus conocimientos")
} else if(notaObtenidaEnUltimoFinal1 >= 4 && notaObtenidaEnUltimoFinal1 <= 6){
    console.log("Nivel básico")
} else if(notaObtenidaEnUltimoFinal1 >= 7 && notaObtenidaEnUltimoFinal1 <= 8){
    console.log("Nivel intermedio")
} else if(notaObtenidaEnUltimoFinal1 >= 9 && notaObtenidaEnUltimoFinal1 <= 10) {
    console.log("Nivel avanzado")
} else {
    console.log("Nota invalida")
}

/**
 * Cálculo de faltantes para la carrera
    Considerando que la carrera tiene un total de 40 materias, 
    y que cada estudiante comienza con 0 materias aprobadas, 
    calcular cuántas materias le faltan para recibirse.
 */

const faltantesAlumno1 = 40 - cantidadFinalesAprobados1
const faltantesAlumno2 = 40 - cantidadFinalesAprobados2
const faltantesAlumno3 = 40 - cantidadFinalesAprobados3
const faltantesAlumno4 = 40 - cantidadFinalesAprobados4

console.log("Cantidad de materias faltantes alumno 1: " + faltantesAlumno1)
console.log("Cantidad de materias faltantes alumno 2: " + faltantesAlumno2)
console.log("Cantidad de materias faltantes alumno 3: " + faltantesAlumno3)
console.log("Cantidad de materias faltantes alumno 4: " + faltantesAlumno4)

/**
 * Procesamiento grupal
 * 
 * Calcular el promedio de las notas.
 */
const sumatoriaNotasAlumnos = notaObtenidaEnUltimoFinal1 + notaObtenidaEnUltimoFinal2 
    + notaObtenidaEnUltimoFinal3 + notaObtenidaEnUltimoFinal4
console.log("El prmedio de notas es " + sumatoriaNotasAlumnos)

/**
 * Calcular cuántos son mayores de edad.
 */
cantidadMayorEdad = 0
if(edadPersona1 >= 18 && edadPersona2 < 18 && edadPersona3 < 18 && edadPersona4 < 18){
    cantidadMayorEdad = 1
} else if(edadPersona1 >= 18 && edadPersona2 >= 18 && edadPersona3 < 18 && edadPersona4 < 18){
    cantidadMayorEdad = 2
} else if(edadPersona1 >= 18 && edadPersona2 >= 18 && edadPersona3 >= 18 && edadPersona4 < 18){
    cantidadMayorEdad = 3
} else {
    cantidadMayorEdad = 4
}

console.log("Cantidad de alumnos mayores de edad: " + cantidadMayorEdad)
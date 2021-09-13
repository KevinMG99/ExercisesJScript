const numeros = [20,40,20,80,100]
let alumnos = [
    {nombre:"Federico",n1:20,n2:30},
    {nombre:"Fernando",n1:50,n2:40},
    {nombre:"Alexander",n1:10,n2:30},
    {nombre:"Steven",n1:40,n2:50},
    {nombre:"Josue",n1:50,n2:10},
    {nombre:"Elena",n1:30,n2:20}
]
console.clear()
//console.log(numeros,alumnos)

for (let index = 0; index < alumnos.length; index++)
    //console.log("alumnos -->",alumnos[index].nombre)

alumnos.forEach(alumno => {
    prom = alumno.n1+alumno.n2
    //console.log(alumno.nombre,prom)
});
alumnos.map(alumno => {
    prom = alumno.n1+alumno.n2
    //console.log(alumno.nombre,prom)
});

const item = alumnos.map(alumno => {
    prom = (alumno.n1+alumno.n2)/2
    return [alumno.nombre,prom]
});

//console.log(item)

const items = alumnos.filter(alumno => alumno.nombre!="Alexander");

alumnos=[...items]
console.log(items)
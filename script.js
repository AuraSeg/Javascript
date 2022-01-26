const ejercicio1 = [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24,
  ];

const ejercicio2 = [
   {
     nombre: "Gabriel",
     edad: 22,
     esFamiliar: false,
   },
   {
     nombre: "Jaime",
     edad: 15,
     esFamiliar: true,
   },
   {
     nombre: "María",
     edad: 18,
     esFamiliar: true,
   },
   {
     nombre: "Angel",
     edad: 19,
     esFamiliar: true,
   },
   {
     nombre: "Fer",
     edad: 18,
     esFamiliar: true,
   },
   {
     nombre: "Rachel",
     edad: 30,
     esFamiliar: true,
   },
];

console.log("-----------")
console.log("Ejercicio 1")
function numPrimo(num){
    for(let i=2; i<=num; i++){
        if(num%i==0){
            break;
        }
        else{
            console.log(`${num} es número primo`)}
        }
} 

ejercicio1.forEach((num) =>{
    numPrimo(num);
});

console.log("-----------")
console.log("Ejercicio 2")
const admitirPaso = (persona) => {
    if(persona.edad >=18 && persona.esFamiliar==true){
        console.log(`Edad: ${persona.edad} Familiar: ${persona.esFamiliar} Puedes pasar ${persona.nombre}`)
    } else{
        console.log(`Edad: ${persona.edad} Familiar: ${persona.esFamiliar} No puedes pasar ${persona.nombre}`)
    }
};

ejercicio2.forEach((persona) =>{
    admitirPaso(persona);
});

console.log("-----------")
console.log("Ejercicio 3")
function fibonacci(){
    let n1=0;
    let n2=1;
    console.log(`${n2},`)
    for(let i=2; i<=50; i++){
        n3=n1+n2;
        n1=n2;
        n2=n3;
        console.log(`${n3},`)}
} 

fibonacci();
function alerta() {
    alert("Bienvenido a la página");
}
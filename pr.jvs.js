function rifa() {
var listado = ["Maria", "Santi", "Johana", "Aliona", "Laura", "Diana", "Jason", "Rodri", "Hanna", "Gemma", "Erik", "Dani", "Jaime", "Belén", "Marilyn", "Karen", "Maelly", "Ernesto", "Elena", "Yesid", "Magda", "Juana", "Victor", "Esther"]
while (listado.length >=1) {
    var rand =  Math.random() * (listado.length);
    var randChar =""+rand;
    var res1 = randChar.substring(0,1); 
    var res = Number(res1);
    
    document.write(listado[res] + "<br/>")
    
    alert("El ganador es: " + listado[res]);
    listado.splice(res, 1);}
}
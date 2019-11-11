function spin(s, resultado){
    var alumns = ["Aliona", "Belén", "Daniel", "Diana", "Elena", "Erick", "Ernesto", "Esther", "Gema", "Hanna", "Jaime", "Yoana", "Juana", "Karen", "Lali", "Maelly", "Magda", "María", "Marilyn", "Rodri", "Santiago", "Víctor", "Yeison", "Yesid"];
    
    var randomItem = alumns[Math.floor(Math.random()*alumns.length)]; 
    
    document.getElementById(randomItem)
    
    if (randomItem.length<24){
            switch (randomItem){
        case "Aliona":
            document.getElementById(s).style.animation = "rotarAliona 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards";
            break;
        case "Belén":
            document.getElementById(s).style.animation = "rotarBelen 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Daniel":
            document.getElementById(s).style.animation = "rotarDaniel 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Diana":
            document.getElementById(s).style.animation = "rotarDiana 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Elena":
            document.getElementById(s).style.animation = "rotarElena 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Erick":
            document.getElementById(s).style.animation = "rotarErick 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Ernesto":
            document.getElementById(s).style.animation = "rotarErnesto 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Esther":
            document.getElementById(s).style.animation = "rotarEsther 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Gema":
            document.getElementById(s).style.animation = "rotarGema 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Hanna":
            document.getElementById(s).style.animation = "rotarHanna 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Jaime":
            document.getElementById(s).style.animation = "rotarJaime 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Yoana":
            document.getElementById(s).style.animation = "rotarJoana 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Juana":
            document.getElementById(s).style.animation = "rotarJuana 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Karen":
            document.getElementById(s).style.animation = "rotarKaren 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Lali":
            document.getElementById(s).style.animation = "rotarLali 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Maelly":
            document.getElementById(s).style.animation = "rotarMaelly 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Magda":
            document.getElementById(s).style.animation = "rotarMagda 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "María":
            document.getElementById(s).style.animation = "rotarMaria 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Marilyn":
            document.getElementById(s).style.animation = "rotarMarilyn 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Rodri":
            document.getElementById(s).style.animation = "rotarRodri 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Santiago":
            document.getElementById(s).style.animation = "rotarSantiago 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Víctor":
            document.getElementById(s).style.animation = "rotarVictor 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Yeison":
            document.getElementById(s).style.animation = "rotarYeison 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
        case "Yesid":
            document.getElementById(s).style.animation = "rotarYesid 4s ease";
            document.getElementById(s).style.animationFillMode = "forwards"
            break;
    }
        //setTimeout.function retardo(){
    document.getElementById(resultado).innerHTML= randomItem;
    }
    //alumns.splice (randomItem, 1)
    //var carcel = alumns.splice 
    else { 
    }
   // var carcel = 
}
            //para escribir el nombre random
           // var randomItem = alumns[Math.floor(Math.random()*nombres.length)];
            //alert( randomItem + "<br>" + "<br>");

           /* //para comprobar que carcel es igual a random y que añade carcel al final de la lista
            var carcel = new Array(randomItem);  
            nombres.push(randomItem)
            document.write(alumns[24] + "<br>" + "<br>");
            
            //para escribir todos los nombres
            for (i=0; i<alumns.length; i++)
                document.write(alumns[i]+"<br>") */
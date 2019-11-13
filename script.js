function reset(){
    localStorage.clear();
}
function spin(s, resultado){
    var alumns = ["Aliona", "Belén", "Daniel", "Diana", "Elena", "Erick", "Ernesto", "Esther", "Gema", "Hanna", "Jaime", "Yoana", "Juana", "Karen", "Lali", "Maelly", "Magda", "María", "Marilyn", "Rodri", "Santiago", "Víctor", "Yeison", "Yesid"];
    var randomItem = alumns[Math.floor(Math.random()*alumns.length)]; 
    var todas = Object.keys(localStorage);
    
    if (todas.length < alumns.length){
        var check = true;
        volver:
        while (check==true){
            for (var i=0; i < todas.length+1; i++){
                if (randomItem == todas[i]){
                    var randomItem = alumns[Math.floor(Math.random()*alumns.length)];
                    check = true;
                    continue volver;
                }
                else {
                    check = false;
                    switch (randomItem){
                        case "Aliona":
                            document.getElementById(s).style.animation = "rotarAliona 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Aliona", randomItem);
                            break;
                        case "Belén":
                            document.getElementById(s).style.animation = "rotarBelen 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Belén", randomItem);
                            break;
                        case "Daniel":
                            document.getElementById(s).style.animation = "rotarDaniel 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Daniel", randomItem);
                            break;
                        case "Diana":
                            document.getElementById(s).style.animation = "rotarDiana 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Diana", randomItem);
                            break;
                        case "Elena":
                            document.getElementById(s).style.animation = "rotarElena 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Elena", randomItem);
                            break;
                        case "Erick":
                            document.getElementById(s).style.animation = "rotarErick 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Erick", randomItem);
                            break;
                        case "Ernesto":
                            document.getElementById(s).style.animation = "rotarErnesto 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Ernesto", randomItem);
                            break;
                        case "Esther":
                            document.getElementById(s).style.animation = "rotarEsther 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Esther", randomItem);
                            break;
                        case "Gema":
                            document.getElementById(s).style.animation = "rotarGema 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Gema", randomItem);
                            break;
                        case "Hanna":
                            document.getElementById(s).style.animation = "rotarHanna 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Hanna", randomItem);
                            break;
                        case "Jaime":
                            document.getElementById(s).style.animation = "rotarJaime 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Jaime", randomItem);
                            break;
                        case "Yoana":
                            document.getElementById(s).style.animation = "rotarJoana 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Yoana", randomItem);
                            break;
                        case "Juana":
                            document.getElementById(s).style.animation = "rotarJuana 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Juana", randomItem);
                            break;
                        case "Karen":
                            document.getElementById(s).style.animation = "rotarKaren 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Karen", randomItem);
                            break;
                        case "Lali":
                            document.getElementById(s).style.animation = "rotarLali 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Lali", randomItem);
                            break;
                        case "Maelly":
                            document.getElementById(s).style.animation = "rotarMaelly 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Maelly", randomItem);
                            break;
                        case "Magda":
                            document.getElementById(s).style.animation = "rotarMagda 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Magda", randomItem)
                            break;
                        case "María":
                            document.getElementById(s).style.animation = "rotarMaria 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("María", randomItem);
                            break;
                        case "Marilyn":
                            document.getElementById(s).style.animation = "rotarMarilyn 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Marilyn", randomItem);
                            break;
                        case "Rodri":
                            document.getElementById(s).style.animation = "rotarRodri 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Rodri", randomItem);
                            break;
                        case "Santiago":
                            document.getElementById(s).style.animation = "rotarSantiago 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Santiago", randomItem);
                            break;
                        case "Víctor":
                            document.getElementById(s).style.animation = "rotarVictor 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Víctor", randomItem);
                            break;
                        case "Yeison":
                            document.getElementById(s).style.animation = "rotarYeison 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Yeison", randomItem);
                            break;
                        case "Yesid":
                            document.getElementById(s).style.animation = "rotarYesid 4s ease";
                            document.getElementById(s).style.animationFillMode = "forwards";
                            localStorage.setItem("Yesid", randomItem);
                            break;
                    }
                }
            }
        }
        document.getElementById(resultado).innerHTML= randomItem + "<br>" + todas;
    }
    else {
        alert("TODOS MUERTOS :D");
    }    
}
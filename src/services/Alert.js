import Swal from 'sweetalert2';


class Alert{
    error({title,message}){
        Swal.fire({
            title: title??'Oops!',
            text: message??'Hay un problema.',
            icon: 'error',
        })
    }
    tryAgain(){
        Swal.fire({
            title: 'Casi intentalo de nuevo!',
            imageUrl: 'https://i.pinimg.com/originals/a4/38/4c/a4384c5d86fa696a392ab216bc09a3d3.gif',
            imageWidth: 400,
            imageHeight: 400,
        }).then(v=>{
            window.location.reload();
        });
    }

    finishLevel({level,route,back,puntaje}){
        let configAlert = {
            title:'Muy Bien!',
            width: 600,
            padding: '3em',
            imageUrl: 'https://i.pinimg.com/originals/df/0f/83/df0f83a027eac58c02548f8e3d63d9f1.gif',
            imageWidth: 400,
            imageHeight: 400,
            background: '#fff url(/media/trees.png)',
            cancelButtonText: "Regresar",
            showCancelButton:true,
            reverseButtons:true,
            backdrop: `
                rgba(0,0,123,0.4)
                url("/media/nyan-cat.gif")
                left top
                no-repeat
            `
        };
        let finishLevel = level==3;
        if(!finishLevel){
            configAlert.confirmButtonText =  `<b>Proximo Nivel <i class="fa fa-arrow-right"></i></b>`;
            configAlert.text = 'Tu puntaje es '+puntaje;
            configAlert.confirmButtonColor = "#4CAF50";

        }else{
            configAlert.title = 'Terminaste el juego!';
            configAlert.text = 'Tu puntaje es '+puntaje;
            configAlert.confirmButtonText =  `<b>Volver a jugar</b>`;
            configAlert.confirmButtonColor = "#4CAF50";
        }
        Swal.fire(configAlert).then((result) => {
            if (result.value) {
                if(!finishLevel){
                    localStorage.setItem('idLvl',level++);
                    window.location.href = "/"+route;
                }else{
                    localStorage.setItem('idLvl',1);
                    window.location.href = "/"+route;
                }
            }else{
                window.location.href = "/"+(back??"juegos");
            }
        })
    }

    score(){
        var scoresKeys = [
            "pointsGame1Lvl3","pointsGame1Lvl1","pointsGame1Lvl2",
            "pointsGame2Lvl3","pointsGame2Lvl1","pointsGame2Lvl2",
            "pointsGame3Lvl3","pointsGame3Lvl1","pointsGame3Lvl2"
        ];
        var keys = Object.keys(localStorage);
        var total= 0;
        keys.forEach(v=>{
            if(scoresKeys.indexOf(v)){
                total+=window.Number.parseInt(localStorage.getItem(v));
            }
        });
        let html = "";
        function getHtml(game,level){
            console.log(`pointsGame${game}Lvl${level}`,localStorage.getItem(`pointsGame${game}Lvl${level}`));
            if(localStorage.getItem(`pointsGame${game}Lvl${level}`)){
                console.log("---------");
                let title = ["Resuelve y Elige","Hora de Comer!","Hora de Pintar"];
                return `
                <tr>
                <td>${title[game-1]}</td>
                <td>Nivel ${level}</td>
                <td>${localStorage.getItem(`pointsGame${game}Lvl${level}`)}</td>
                </tr>
                `
            }else{
                return "";
            }
        }
        
        html+=getHtml(1,1);
        html+=getHtml(1,2);
        html+=getHtml(1,3);

        html+=getHtml(2,1);
        html+=getHtml(2,2);
        html+=getHtml(2,3);

        html+= getHtml(3,1);
        html+= getHtml(3,2);
        html+= getHtml(3,3);


        console.log(html);
        Swal.fire({
            title: 'Mi Puntaje!',
            html: `
            <table style="width:100%">
            <tr>
              <th></th>
              <th>Nivel</th>
              <th>Puntaje</th>
            </tr>
            ${html}
          </table>
            `,
            icon: 'success',
        })

    }

}

export default new Alert();
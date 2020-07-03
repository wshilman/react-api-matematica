import Swal from 'sweetalert2';


class Alert{
    error({title,message}){
        Swal.fire({
            title: title??'Oops!',
            text: message??'Hay un problema.',
            icon: 'error',
        })
    }

    finishLevel({title, message,next,back,puntaje,level}){
        let configAlert = {
            title:'Muy Bien!',
            width: 600,
            padding: '3em',
            icon: "success",
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
        if(next){
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
                if(next){
                    localStorage.setItem('idLvl',level);
                    window.location.href = "/"+next;
                }else{
                    window.location.href = "/"+level;
                }
                
            }else{
                window.location.href = "/"+(back??"juegos");
            }
        })
    }

}

export default new Alert();
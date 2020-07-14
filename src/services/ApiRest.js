import http from "./http-common";

class ApiRest {
    login({name,lastname,classroom}) {
        return http.post("/session/login",{name,lastname,classroom});
    }
    logout({nickname}) {
        return http.post("/session/logout",{nickname});
    }
    saveScore({game,id,points,level}){
        return new Promise((resolve,reject)=>{
            let data = {game,id,points,level};
            http.post('/player/score',data)
            .then((result)=>{
                resolve({data:result.data});
            }).catch(reject)
        })
    }

    getEatingGame(level){
        return new Promise((resolve,reject)=>{
            http.get('/game/eat/level/'+level)
            .then((result)=>{
                resolve({data:result.data});
            }).catch(reject)
        })
    }
    getPaintingGame(level){
        return new Promise((resolve,reject)=>{
            http.get('/game/painting/level/'+level)
            .then((result)=>{
                let rtas = [];
                let data = result.data.map((v,index)=>{
                    v.id = index;
                    if(rtas.indexOf(v.rta)==-1) rtas.push(v.rta);
                    return v;
                });
                resolve({data,rtas});
            }).catch(reject)
        })
    }
    getMultipleGame(level){
        return new Promise((resolve,reject)=>{
            http.get('/game/multiple/level/'+level)
            .then((result)=>{
                console.warn(result);
                result.data = result.data.map((v,index)=>{
                    v.id = index;
                    return v;
                });
                resolve(result.data);
            }).catch(reject)
        })
    }
}

export default new ApiRest();
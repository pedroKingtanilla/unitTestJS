let consultaMSG = async (bandera)=>{
    return new Promise( async (resuelve, rechaza) => {
        if(bandera){
            rechaza('ERROR')
            return;
        }
        resuelve('Peter')
    });
}

module.exports = {
    consultaMSG
}
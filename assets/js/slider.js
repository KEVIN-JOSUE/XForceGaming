let slider = document.querySelector('.contenedor_slider');
let cantidad_diapositivas = document.querySelectorAll('.contenedor_slider ul li').length;
let inicio = 1;
let direccion = 'siguiente';


const siguiente = () => {
    slider.style.marginLeft = '';
};


const anterior = () => {
    slider.style.marginLeft = '';
};


const mover = () => {
    slider.style.marginLeft = `-${inicio * 100}%`;
};


const automatico = () => {
    console.log(inicio);

    if(inicio === cantidad_diapositivas - 1){
        direccion = 'anterior';
    }
    
    if(inicio === 0){
        direccion = 'siguiente';
    }

    if(direccion === 'siguiente'){
        mover();
        inicio++;
    }else{
        mover();
        inicio--;
    }
};


setInterval(automatico, 5000);
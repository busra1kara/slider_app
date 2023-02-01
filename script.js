var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe',
        information : 'Bmw Information Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/yeni-mazda-cx-3',
        information : 'Mazda Information Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance',
        information : 'Volvo Information Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2022/1-5-tsi-crystal-dsg',
        information : 'Skoda Information Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2021/1-6-elegance-cvt',
        information : 'Honda Information Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    },
]


var index = 0;
var slaytCount = models.length;
var settings = {
    duration : '2000',
    random : false,
    
}
var interval;

init(settings);

document.querySelector('.fa-arrow-left').addEventListener('click', function(){

    index--;
    if(index == -1){
        index = 4;
    }
    showSlide(index);

})

document.querySelector('.fa-arrow-right').addEventListener('click', function(){

    index++;
    if(index == 5){
        index = 0;
    }
    showSlide(index);
    
})

document.querySelectorAll('.arrow, .card-link').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
    })
})

document.querySelectorAll('#button').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
        document.querySelector('#car-information').textContent = models[index].information;
    })
})

document.querySelectorAll('.arrow, .card-link').forEach(function(item){
    item.addEventListener('mouseleave', function(){
        init(settings);
    })
})

document.querySelectorAll('#button').forEach(function(item){
    item.addEventListener('mouseleave', function(){
        init(settings);
        document.querySelector('#car-information').textContent = '';
    })
})

function showCarInformation(){
    document.querySelector('#car-information').textContent = models[index].information;
}

function showSlide(i){
    
    document.querySelector('.card-title').textContent = models[i].name;

    document.querySelector('.card-img-top').setAttribute('src', models[i].image);

    document.querySelector('.card-link').setAttribute('href', models[i].link);

}


function init(settings){

    var prev = index;
    interval = setInterval(function(){

        if(settings.random){
            // random index
            while(index == prev){
                index = Math.floor(Math.random() * slaytCount)
            }
            prev = index;
            console.log(index);
        } else{
            // artan index
            index++;
            if(index === slaytCount){
                index = 0;
            } 
        }
        showSlide(index);

    }, settings.duration)
}




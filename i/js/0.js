const flex_item = document.querySelectorAll('.flex-item');
let translate ='';
let pronunciation = '';
flex_item.forEach((word)=>{
    word.addEventListener("click", function (){
        switch (word.children[0].textContent) {
            case 'Through':
                translate = "Через";
                pronunciation = "Сру";
                break;
            case 'Though':
                translate = "Хотя";
                pronunciation = "Зоу";
                break;
            case 'Thought':
                translate = "Подумал";
                pronunciation = "Сот";
                break;
            case 'Probably':
                translate = "Наверное";
                pronunciation = "ПрОбабли";
                break;
            case 'Literally':
                translate = "Буквально";
                pronunciation = "Личели";
                break;
            case 'Perhaps':
                translate = "Возможно";
                pronunciation = "Пе:Хапс";
                break;
            case 'Imagine':
                translate = "Представить, представь";
                pronunciation = "Имэджин";
                break;
            case 'According':
                translate = "В соответствии";
                pronunciation = "əˈkɔːrdɪŋ";
                break;
            case 'Appropriate':
                translate = "Подходящее";
                pronunciation = "əˈprəʊprɪət";
                break;
            case 'Convenience':
                translate = "Удобство";
                pronunciation = "kənˈviːnɪəns";
                break;
            case 'Tricky':
                translate = "Сложный";
                pronunciation = "Трики";
                break;
            case 'Representation':
                translate = "Представление";
                pronunciation = "reprɪzenˈteɪʃn";
                break;
            case 'Thus':
                translate = "Таким образом";
                pronunciation = "ðʌs";
                break;
            case 'Measurement':
                translate = "Измерение";
                pronunciation = "ˈmeʒərmənt";
                break;
            case 'Overestimate':
                translate = "Переоценивать";
                pronunciation = "ˌəʊvərˈestɪmeɪt";
                break;
            case 'Weird':
                translate = "Странный";
                pronunciation = "Wиерд";
                break;
            case 'Behavior':
                translate = "Поведение";
                pronunciation = "bɪˈheɪvjər";
                break;
            case 'Roughly':
                translate = "Грубо";
                pronunciation = "Рафли";
                break;
            case 'Approaches':
                translate = "Подходы";
                pronunciation = "əˈprəʊtʃɪz";
                break;
            case 'Complicated':
                translate = "Сложно";
                pronunciation = "ˈkɒmplɪkeɪtɪd";
                break;
            default:
                console.log(word.children[0].textContent);
                console.log(translate);
                console.log(pronunciation);
        }
        document.getElementById('translate').innerHTML = 'перевод: '+ translate+'<br>произношение: '+pronunciation;
        document.getElementById('src').attributes.src.value = 'https://wooordhunt.ru/data/sound/sow/us/'+word.children[0].textContent.toLowerCase()+'.mp3';
        document.querySelector('.sound_pic').style.display = 'block';
        document.querySelector('.sound_pic').addEventListener("click", function (){
            let audio = document.getElementById('audio_us');
            audio.load();
            audio.play();
        });
    });
});
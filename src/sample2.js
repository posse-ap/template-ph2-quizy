let question_list= [['たかなわ', 'こうわ', 'たかわ'],
                ['かめいど', 'かめと', 'かめど'],
                ['こうじまち', 'おかとまち', 'かゆまち'],
                ['おなりもん','おかどもん','ごせいもん'],
                ['とどろき','たたらき','たたら'],
                ['しゃくじい','せきこうい','いじい'],
                ['ぞうしき','ざっしき','ざっしょく'],
                ['おかちまち','みとちょう','ごしろちょう'],
                ['ししぼね','ろっこつ','しこね'],
                ['こぐれ','こばく','こしゃく'],
                ['しののめ', 'とううん', 'ひがしくも']]

let correct_list=['たかなわ','かめいど','こうじまち','おなりもん','とどろき','しゃくじい','ぞうしき','おかちまち','ししぼね','こぐれ','しののめ']                

// quizCode=question_listの配列番号+1=>問題番号
// selectCode=option_listの配列番号=>選択肢番号
// correctCode=option_list[0](ask[0])をランダム配列から検索する=>正解番号

function choice(quizCode, selectCode, correctCode) {

    let select = document.getElementById('answer_' + quizCode + '_' + selectCode);
    let correct = document.getElementById('answer_' + quizCode+ '_' + correctCode);
    
    select.className = 'answer_incorrect';
    select.style.backgroundColor="#FF3333"
    select.style.color="#fff"
    correct.className = 'answer_correct';
    correct.style.backgroundColor="#1E90FF"
    correct.style.color="#fff"
    // 正解・不正解の表示
    let answerarea = document.getElementById('answerarea_' + quizCode);
    answerarea.style.display = 'block';

    let answerbox = document.getElementById('answertext_' + quizCode);
    if (selectCode == correctCode) {
        answerbox.className = 'answerarea_correct';
        answerbox.innerHTML = '正解！';
    } else {
        answerbox.className = 'answerarea_incorrect';
        answerbox.innerHTML = '不正解！';
    }
    
    // クリック無効化
    let option = document.getElementsByName('answer_' + quizCode);
    $.each(option,function(number,answerlist){
        answerlist.style.pointerEvents="none"
    })
}


function getquestion(quizCode, option_list, correctCode) {
    
    let quiz = `<div class="issue">`
        + `    <h1>${quizCode}. この地名はなんて読む？</h1>`
        + `    <img src="img/${quizCode}.png" >`
        + `    <ul>`;
    $.each(option_list,function(number, select) {
        quiz += `        <li id="answer_${quizCode}_${(number)}" name="answer_${quizCode}" `
            + `class="answer" onclick="choice(${quizCode}, ${(number)}, ${correctCode}),scrollToTop();" >${select}</li>`;
            console.log(number);
    });
    quiz +=  `    </ul>`
    +` <p id="answerarea_${quizCode}" class="answerarea" >`
        + `            <span id="answertext_${quizCode}"></span><br>`
        + `            <span id=result>正解は「${option_list[correctCode]}」です！</span>`
        + `        </p>`
        + `</div >`;

    document.getElementById('main').insertAdjacentHTML('beforeend', quiz);
}


function gethtml() {
    $.each(question_list,function(figure,ask){   
        let correct = ask[0];


        for (let i = 0; i < 3; i++) {
            let ramdom = Math.floor(Math.random()*3);
            let shuffle = ask[i];
            ask[i]=ask[ramdom]
            ask[ramdom] = shuffle;
            // let mix=ask[i]=ask[ramdom]
            // mix
        }
    
        getquestion(figure + 1, ask, ask.findIndex(item=>item===correct));
    })

    };

    gethtml()






$(function(){

$("ul.menu li").mouseenter(function(){
    $(this).siblings().find("ul").hide();  
    $(this).children().slideDown(150);     
});

$('html').click(function() {
    $('ul.menu ul').slideUp(150);
});
});

$(function(){

$("ul.menuSub li").mouseenter(function(){
    $(this).siblings().find("ul").hide();  
    $(this).children().slideDown(150);     
});

$('html').click(function() {
$('ul.menuSub ul').slideUp(150);
});
});



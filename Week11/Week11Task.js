var button = document.getElementById('button').addEventListener
('click', buttonClick);

var colors = ['red', 'green', 'blue', 'orange', 'yellow'];

var quotes = ['Aye Baba \t - Farzam', 'Zeshde - Nozhan', 
                'Say hello to my little friend - Tony Montana',
            'If you\'re late, take your time. You can\'t be late twice - Roll safe',
            '             -Teller',
            '谢谢 - MinMin',
            'It\'s better to be a warrior in a garden than a gardener in a war']



function buttonClick(){
    document.querySelector('.background').style.backgroundColor = 
    '#ffff4d';

    document.querySelector('.background').style.backgroundColor = 
    colors[Math.floor(Math.random() * colors.length)];

    document.querySelector('h2').textContent = 
    quotes[Math.floor(Math.random() * quotes.length)];
    
}
document.addEventListener('DOMContentLoaded', () => {
    var togl = false
    document.getElementById('loggan').addEventListener('click', () => {
        if (togl) {
            document.querySelectorAll('div').forEach(div => {
                div.style.color = '';
                div.style.backgroundColor = '';
                div.style.border = '';
            });
            document.body.style.backgroundColor = '';
            document.querySelectorAll('nav').forEach(p => {
                p.style.color = '';
                p.style.backgroundColor = '';
                p.style.borderColor = '';
            });
            document.getElementById('loggan').style.color = '';
            document.getElementById('loggan').style.backgroundColor = '';
            document.getElementById('loggan').style.borderColor = '';
            document.getElementById('loggan').style.textShadow = '';
            document.getElementById('modeviewer').textContent = "good mode :D";
            togl= false
            return
        }
        else
        document.querySelectorAll('div').forEach(div => {
            div.style.color = 'red';
            div.style.backgroundColor = 'black';
            div.style.border = '2px solid red';
        });
        document.body.style.backgroundColor = 'black';
        document.querySelectorAll('nav').forEach(p => {
            p.style.color = 'red';
            p.style.backgroundColor = 'black';
            p.style.borderColor = 'red';
        });
        document.getElementById('loggan').style.color = 'red';
        document.getElementById('loggan').style.backgroundColor = 'black';
        document.getElementById('loggan').style.borderColor = 'red';
        document.getElementById('loggan').style.textShadow = '2px 2px 4px #FF0000';
        document.getElementById('modeviewer').textContent = "evil mode >:)";
        document.getElementById('modeviewer').style.border = 'none';
        togl= true
        
    });
});
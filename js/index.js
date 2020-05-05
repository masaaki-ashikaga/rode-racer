
var dels = document.querySelectorAll('button');

dels.forEach((del) =>{
    del.addEventListener('click', () =>{
        window.confirm('削除してよろしいですか？');
    });
});

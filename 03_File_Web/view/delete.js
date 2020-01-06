module.exports.delete = function(list, navBar, title) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>File Web-CRU</title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1><a href="/">WEB 프로그래밍 기술</a></h1>
            <h3>${list}</h3>
            <hr>
            <h4>${navBar}</h4>
            <hr>
            <h2>글 삭제하기</h2>
            <form action="/delete_proc" method="post">
                <input type="hidden" name="title" value="${title}">
                <p>${title} 글을 삭제하시겠습니까?</p>
                <p><input type="submit" value="확인"></p>
            </form>
        </body>
        </html>    
    `;
}
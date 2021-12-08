let comments = [];

fetch('https://jordan.ashton.fashion/api/goods/30/comments', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
}).then((response) => {
    if (response.ok) {
        return response.json();
    }
}).then((data) => {
    let commentsArray = data.data;


    commentsArray.forEach(comment => {
        console.log(comment.name);
        console.log(comment.text);
        console.log(comment.created_at);
    })
})

let formData = {
    name: '23123',
    text: 'text12234 text12123123'
};

fetch('https://jordan.ashton.fashion/api/goods/30/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
}).then((response => {
    console.log(response.ok)
}))



document.getElementById('comment-add').onclick = function(){
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');

    let comment = {
        name : commentName.value,
        body : commentBody.value,
        time : Math.floor(Date.now() / 1000)
    }

    commentName.value = '';
    commentBody.value = '';

    comments.push(comment);
    saveComments();
    showComments();
}

function showComments (){
    let commentField = document.getElementById('comment-sections');
    let out = '';
    comments.forEach(function(item){
        out += `<p class="text-right small">${timeConverter(item.time)}</p>`;
        out += `<p class="alert alert-primary" role="alert">${item.name}</p>`;
        out += `<p class="alert alert-success" role="alert">${item.body}</p>`;
    });
    commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
  
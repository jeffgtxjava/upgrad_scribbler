let allPosts = document.getElementById('allPosts-btn');
let createPost = document.getElementById('createPost-btn');
let createPostClose = document.getElementById('createPostClose');
let createPostModal = document.getElementById('modal-createPost');


allPosts.addEventListener('click',redirectToBlogList);
createPost.addEventListener('click',displayCreatePostModal);
createPostClose.addEventListener('click',closeCreatePostModal);




function redirectToBlogList(){
    window.location.href='bloglist.html';
}

function closeCreatePostModal(){
    createPostModal.style.display='none';
}


function displayCreatePostModal(){
    createPostModal.style.display='block';
}
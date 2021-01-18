let allPosts = document.getElementById('allPosts-btn');

allPosts.addEventListener('click',redirectToBlogList);

function redirectToBlogList(){
    window.location.href='bloglist.html';
}
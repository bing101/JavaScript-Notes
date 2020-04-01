const posts = [
    {
        id: 0,
        title: 'Post Number One',
        body: 'This is the body of post one.',
    },
    {
        id: 1,
        title: 'Post Number Two',
        body: 'This is the body of post two.',
    },
    {
        id: 2,
        title: 'Post Number Three',
        body: 'This is the body of post three.',
    },
    {
        id: 3,
        title: 'Post Number Four',
        body: 'This is the body of post four.',
    },
]


// We will memic a real server here
function getPosts(){
    let output = '';
    setTimeout(() => {
        console.log('Get post method is called')
        posts.forEach( p =>  {output += `<li>${p.title}</li>` });
        document.body.innerHTML = `<ul>${output}</ul>`;
    }, 1000);    
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post)
        callback();         // Function will execute after above process
    },1500);
}



createPost({id: 4, title: 'This is the new post', body: 'This is the body of the new post'}, getPosts);

console.log('End')







console.log('Async await')

const posts = [
    {
        title: 'Post Number One',
        body: 'This is the body of post one.',
    },
    {
        title: 'Post Number Two',
        body: 'This is the body of post two.',
    },
    {
        title: 'Post Number Three',
        body: 'This is the body of post three.',
    },
    {
        title: 'Post Number Four',
        body: 'This is the body of post four.',
    },
]

function getPost(){
    output = '';
    posts.forEach( p => output += `<li>${p.title}</li>`);
    document.write( `<ul>${output}</ul>`);
}

function createPost(post){
    return new Promise( resolve => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1500);
    })
}


let display = async () => { 
    await createPost({title: 'New Post', body: 'New Post body' });
    getPost() 
};

display();
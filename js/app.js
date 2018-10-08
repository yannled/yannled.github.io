var fs = require('fs');

function getUserCOntributors(username){
    return fetch(`http://localhost:3000/collaborateurs/${username}`)
        .then(res => res.json());
}

var sampleObject = {
    a: 1,
    b: 2,
    c: {
        x: 11,
        y: 22
    }
};


function requestData() {

    fs.writeFile("sample.txt", JSON.stringify(sampleObject, null, 4), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("File has been created");
    })
    /*

    var username=document.getElementById('name').value;
    getUserCOntributors(username)
    .then(value => fs.writeFile("sample.txt", value, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("File has been created");
    }))
    */
}



// async await GET
async function getData() {
    try {
            const response = await fetch('https://api-to-call/endpoint');
            if (response.ok) {
                const jsonResponse = await response.json();
                // Execute code with jsonResponse
         
            } 
            else {
                throw new Error('Request Failed.');
            }
        }
        catch(error) {
        // Code to handle error
        }
}

// async await POST
async function postData() {
    try {
            const response = await fetch('https://api-to-call/endpoint', {
                method = 'POST',
                body: JSON.stringify({id: '200'})
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                // Execute code with jsonResponse
            } 
            else {
                throw new Error('Request Failed.');
            }
        }
        catch(error) {
        // Code to handle error
        }
}

// fetch POST
fetch('https://api-to-call/endpoint', {
    method = 'POST',
    body: JSON.stringify({id: '200'})
    }).then(response => {
        if (response.ok) {
            return response.json();
        } 
        else {
            throw new Error('Request Failed.');
            // Code to handle error
        }
    }, networkError => console.log(networkError.message) // Code to handle error
    ).then(jsonResponse => {
    // Execute code with jsonResponse
});


// fetch GET
fetch('https://api-to-call/endpoint').then(response => {
    if (response.ok) {
        return response.json();
        
    } 
    else {
        throw new Error('Request Failed.');
        // Code to handle error
    }
    }, networkError => console.log(networkError.message) // Code to handle error
).then(jsonResponse => {
    // Execute code with jsonResponse
});


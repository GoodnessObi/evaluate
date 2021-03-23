function handleSubmit(event) {
    event.preventDefault()
    Client.clearUI();

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if (!Client.checkForName(formText)) {
        document.querySelector('.error').style.display = 'inline-block';
        return;
    }

    console.log("::: Form Submitted :::", formText) 
    fetch(`http://localhost:${process.env.PORT}/addData`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ formText }),
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        if (res.error) {
            throw new Error(res.error);
        }
        
        Client.clearUI();
        document.getElementById('name').value = '';
        document.querySelector('.results').classList.add("fadeIn");
        document.getElementById('url').innerHTML = formText;
        document.getElementById('confidence').innerHTML = res.confidence.toLowerCase();
        document.getElementById('agreement').innerHTML = res.agreement.toLowerCase();
        document.getElementById('irony').innerHTML = res.irony.toLowerCase();
        document.getElementById('subjective').innerHTML = res.subjectivity.toLowerCase();
    })
    .catch(error => {
        console.log(error)
        Client.clearUI();
        document.querySelector('#error').classList.add("fadeIn");
    })
}

export { handleSubmit }

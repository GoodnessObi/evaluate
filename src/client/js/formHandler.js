function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // Client.checkForName(formText)

    console.log("::: Form Submitted :::", formText)
    fetch('http://localhost:8081/addData', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ formText }),
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        
        document.querySelector('.results').classList.add("fadeIn");
        document.getElementById('confidence').innerHTML = res.confidence.toLowerCase();
        document.getElementById('agreement').innerHTML = res.agreement.toLowerCase();
        document.getElementById('irony').innerHTML = res.irony.toLowerCase();
        document.getElementById('subjective').innerHTML = res.subjectivity.toLowerCase();
    })
    .catch(error => {
        console.log(error)
        document.querySelector('.error').style.diaplay = 'inline-block';
    })
}

export { handleSubmit }

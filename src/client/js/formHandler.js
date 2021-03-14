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
        let message = `${res.irony}, ${res.subjectivity}, ${res.agreement}, ${res.confidence}`
        document.getElementById('results').innerHTML = message
    })
    .catch(error => {
        console.log(error)
    })
}

export { handleSubmit }

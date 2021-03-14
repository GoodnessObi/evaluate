function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/addData', {
        method: 'POST',
        body: { formText, isUrl }
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

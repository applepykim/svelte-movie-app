exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'HEROPY',
            age: 85,
            email: 'abc@gmail.com'
        })
    }
}


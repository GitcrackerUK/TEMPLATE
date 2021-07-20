module.exports = async function (context, req) {

    let responseMessage = {
        format: 'ebm-api-response',
        version: 1,
        responses: [],
        userVariables: []
    };

    for (let key in req.body) {
        responseMessage.userVariables.push({
            name: key,
            value: req.body[key]
        });
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
export function makeResponse(data, sucess = true) {
    let result = { sucess }

    if (sucess)
        result['data'] = data
    else
        result['message'] = data    
    
    return result
}

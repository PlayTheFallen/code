// [START]Challenge
const validateFields = (fields, requiredFields) => {
    let invalidFields = []

    Object.keys(fields).forEach(key => {
        if(!!requiredFields[key]){
            if(fields[key] === ''){
                invalidFields.push(requiredFields[key])
            }
        }
    })

    return invalidFields
}
// [END]Challenge

validateFields({'name': ''}, {'name': 'name'})

// Solution (ES6)

// empty string check only
const validateES6 = (fields, required) => Object.keys(fields).reduce((invalid, key) => (!!required[key] && fields[key] === '' ? [...invalid, required[key]] : invalid), [])
// undefined, null and empty string check
const validateES6 = (fields, required) => Object.keys(fields).reduce((invalid, key) => (!!required[key] && [undefined, null, ""].includes(fields[key]) ? [...invalid, required[key]] : invalid), [])

// Solution (ES6 & Min)

// empty string check only
const validateMin = (f, r) => Object.keys(f).reduce((i, k) => (!!r[k] && f[k] === '' ? [...i, r[k]] : i), [])
// undefined, null and empty string check
const validateMin = (f, r) => Object.keys(f).reduce((i, k) => (!!r[k] && [undefined, null, ""].includes(f[k]) ? [...i, r[k]] : i), [])

/** Notes
 * Challenge set by @Sven65
 * Changes appended to 1 times
 */

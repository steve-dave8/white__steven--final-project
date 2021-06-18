const isEmpty = field => field === "" ? true : false;

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

/*A function to check if the object sent in a request is missing any of the required properties and if the values are empty or incorrect.
It takes three parameters:
-fields: an array of required fields as specified in functions below
-obj: the object sent in the request
-msg: an array of error messages that can be sent in the response
*/
const checkProps = (fields, obj, msg) => {
    fields.forEach(field => {
        if (!obj.hasOwnProperty(field)) {
            msg.push(field);
        } else {
            switch (field) {
                case "name":
                    if (isEmpty(obj.name)) {
                        msg.push(field);
                    }; 
                    break;  
                case "email":
                    if (isEmpty(obj.email) || !validateEmail(obj.email)) {
                        msg.push(field);
                    };
                    break;
                case "phoneNumber":
                    if (isEmpty(obj.phoneNumber) || !obj.phoneNumber.match(/^[0-9]{10}$/)) {
                        msg.push(field);
                    };
                    break;
                case "content":
                    if (isEmpty(obj.content)) {
                        msg.push(field);
                    };
                    break;
                case "password":
                    if (isEmpty(obj.password) || obj.password.length < 8 || obj.password.includes(" ")) {
                        msg.push(field);
                    };
                    break;              
            };
        };
    });
};

const validateCF = (req, res, next) => {
    let reqFields = ["name", "email", "phoneNumber", "content"];
    let errMsg = {message: "validation error",
                invalid: []};
    let arr = errMsg.invalid;     
    checkProps(reqFields, req.body, arr); 
    if (arr.length) {
        return res.status(400).json(errMsg); 
    };
    next();
};

const validateUser = (req, res, next) => {
    let reqFields = ["name", "password", "email"];
    let errMsg = {message: "validation error",
                invalid: []};
    let arr = errMsg.invalid;
    checkProps(reqFields, req.body, arr);
    if (arr.length) { 
        return res.status(400).json(errMsg); 
    };    
    next();
};

export { validateCF, validateUser };
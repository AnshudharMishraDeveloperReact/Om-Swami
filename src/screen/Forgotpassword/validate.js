
export function handleValidations(text, type) {
        console.log("textype=>>",text, type)
        if (type === 'phonenumber') {
             let numberRegex = /^[1-9][0-9]{9,12}$/;
            if (text === '') {
                return {
                    status: false,
                    value: text,
                    errorText: 'Please enter mobile number.'
                }
            }
            else if (!numberRegex.test(text)) {
                return {
                    status: false,
                    value: text,
                    errorText:'Please enter valid mobile number.'
                }  
            }
            else {
                return {
                    value: text,
                    status: true,
                    errorText: ''
                }
            }
        }
        else if (type === 'email') {
            let emailRegex = /^[A-Z0-9_-]+([\.][A-Z0-9_-]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,5})+$/i;
           if (text === '') {
               return {
                   status: false,
                   value: text,
                   errorText: 'Please enter a email address.'
               }
           }
           else if (!emailRegex.test(text)) {
               return {
                   status: false,
                   value: text,
                   errorText:'Please enter a valid email address.'
               }  
           }
           else {
               return {
                   value: text,
                   status: true,
                   errorText: ''
               }
           }
       }
    }
    
    
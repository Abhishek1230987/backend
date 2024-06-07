// For handling errors
class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors= [],
        statck= ""
    ){
        super(message)
        this.statusCode= statusCode
        this.data= null //it refers to a property of an object or class instance
        this.message= message
        this.success= false;
        this.errors = errors

        if(stack){
            this.stack= stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    } 
}

export{ApiError}
// asyncHandler is a higher order function, functions which can take functions as parameters as well as can return. Treated as variable.

// 1st way of doing asyncHandler 
const asyncHandler = (requestHandler) =>{
    (req,res,next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
// Promise.resolve() is used to make sure that the function is executed. 
    }
} 


// 2nd way of doing asyncHandler
// const asyncHandler = (fn) => async (req,res,next) =>{
//     try{
//         await fn(req,res,next);
//     }catch (error){
//         res.status(err.code || 500).json({success:false,message: error.message});
//     }
// } 


export {asyncHandler}




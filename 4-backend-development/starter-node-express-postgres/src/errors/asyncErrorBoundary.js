// function asyncErrorBoundary(delegate, defaultStatus) {
//     return (request, response, next) => {
//         Promise.resolve()
//             .then(() => delegate(request, response, next))
//             .catch((error = {}) => {
//                 const { status = defaultStatus, message = error } = error;
//                 next({
//                     status,
//                     message,
//                 });
//             });
//     };
// }

// module.exports = asyncErrorBoundary;


function asyncErrorBoundary(delegate, defaultStatus) {
    return (request, response, next) => {
        // function async()
        (async () => {
            try {
                await delegate(request, response, next);
            } catch (error) {
                const { status = defaultStatus, message = error } = error;
                next({
                    status,
                    message,
                });
            }
        })()
        
    };
}

module.exports = asyncErrorBoundary;

// return a middleware func
// kick of a promise chain


export const asyncHandler =  (requetHanlder) => {
    (req, res, next) => {
        Promise.resolve(requetHanlder(req, res, next)).catch((error) => next(error))
    }
}
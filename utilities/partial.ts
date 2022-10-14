const partial = (func: Function, ...args: any[]):Function => {
    return (...fargs:any[]) => {
        return func(...args, ...fargs)
    }
}

export default partial
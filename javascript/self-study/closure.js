const makeFunc = () => {
    var name = "1한나"
    const displayName = () => {
        console.log(name)
    }
    return displayName
}
console.log('----------')
var myFunc = makeFunc()
myFunc()
console.log('----------')
makeFunc()
console.log('----------')

// Code your solution here

let findMatching = (drivers, string) => {
    return drivers.filter(d => 
        d.toLowerCase() === string.toLowerCase()
    )
}

let fuzzyMatch = (drivers, string) => {
    return drivers.filter(d =>
        d.toLowerCase().charAt(0) === string.toLowerCase().charAt(0)
        )
}

let matchName = (drivers, string) => {
    return drivers.filter(d => 
        d.name === string)
}
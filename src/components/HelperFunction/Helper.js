// helper object that will contain helper methods



//HELPEROBJECT can only be used with animal data and employee data
const HelperObject = {
    CounterFunction: (data) => {
        const Name = []
        for(let element of data) {
            Name.push(element.name)
        }
        return Name
    }
}


export default HelperObject
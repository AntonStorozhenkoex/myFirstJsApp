(() => {
    const selectArray = [
        { value: "Home1", isSelected: false },
        { value: "Home2", isSelected: true },
        { value: "Home3", isSelected: false },
        { value: "Home4", isSelected: false }
    ]

    function createWorkSpace() {
        const workSpace = document.getElementById('my-app')
        const firstHeader = document.createElement('h2')
        const selectList = document.createElement(`select`)
        const secondHeader = document.createElement(`h2`)
        const form = document.createElement(`form`)
        const inputForm = document.createElement(`input`)
        const buttonForm = document.createElement(`button`)

        selectList.id = `select`
        firstHeader.innerText = 'Home'
        secondHeader.innerText = 'Edit Home'
        buttonForm.innerText = 'Save'
        
        workSpace.classList.add('text')
        inputForm.classList.add('input')
        selectList.classList.add('select')
        buttonForm.classList.add('btn')

        for (let i in selectArray) {
            let newOption = document.createElement('option')
            newOption.value = selectArray[i].value
            newOption.innerText = selectArray[i].value

            if (selectArray[i].isSelected) {
                inputForm.value = newOption.value
                newOption.selected = true
            }
            selectList.append(newOption)
        }

        form.addEventListener("submit", function (e) {
            e.preventDefault()
            if (inputForm.value) {
                inputForm.classList.remove('error')
                buttonForm.classList.remove('error')
                let array = Array.prototype.slice.call(document.getElementById('select').options)
                for (let k in array) {
                    if (array[k].value === selectList.value) {
                        array[k].value = inputForm.value
                        array[k].innerText = inputForm.value
                    }
                }

            }else{
                inputForm.classList.add('error')
                buttonForm.classList.add('error')
            }
        })
        inputForm.addEventListener('change',() => {
            if (inputForm.value){
                inputForm.classList.remove('error')
                buttonForm.classList.remove('error')
            }
        })
        selectList.addEventListener('change', function () {
            inputForm.value = selectList.value
        })

        workSpace.append(firstHeader)
        workSpace.append(selectList)
        workSpace.append(form)
        form.append(secondHeader)
        form.append(inputForm)
        form.append(buttonForm)
    }

    document.addEventListener('DOMContentLoaded', createWorkSpace)
})()
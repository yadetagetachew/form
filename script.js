document.getElementById('name').focus()

document.getElementById('other-job-role').style.display = "none"

document.getElementById('title').addEventListener('change', jobRole)

function jobRole(e){
    let i = e.target.selectedIndex
    if(e.target.options[i].text === "Other"){
        document.getElementById('other-job-role').style.display = "initial"
    }
    else{
        document.getElementById('other-job-role').style.display = "none"
    }
}

document.getElementById('color').setAttribute('disabled', '')

document.getElementById('design').addEventListener('change', selectedDesignTheme)

function selectedDesignTheme(e){
    document.getElementById('color').removeAttribute('disabled', '')

    let i = e.target.selectedIndex
    let value = e.target.options[i].value
    let color = document.getElementById('color')

    for(let i = 0; i < color.length; i++){
        if(color.options[i].getAttribute('data-theme') === value){
            color.options[i].removeAttribute('hidden', '')
        }
        else{
            color.options[i].setAttribute('hidden', '')
        } 
    }
}

document.getElementById('activities').addEventListener('change', )

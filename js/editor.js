document.getElementById('font-bold').addEventListener('click', function(){
    const textField = getElement('text-area');
    textField.style.fontWeight = 'bold';
    
})
document.getElementById('font-italic').addEventListener('click', function(){
    const textField = getElement('text-area');
    textField.style.fontStyle = 'italic';
})
document.getElementById('font-underline').addEventListener('click', function(){
    const textField = getElement('text-area');
    textField.style.textDecoration = 'underline';
})

function getElement(id){
    const element = document.getElementById(id);
    return element;
}

function textAlign(id, value){
    getElement(id).addEventListener('click', function(){
        const textField = getElement('text-area');
        textField.style.textAlign = value;
    })
}

textAlign('align-left', 'left')
textAlign('align-center', 'center')
textAlign('align-right', 'right')
textAlign('align-justify', 'justify')

const textField = getElement('text-area');
document.getElementById('font-size').addEventListener('click', function(){
    const fontValue = getElement('font-size').value;
    textField.style.fontSize = `${fontValue}px`;
})

document.getElementById('uppercase').addEventListener('click', function(){
    if(textField.style.textTransform === 'uppercase'){
        textField.style.textTransform = 'lowercase';
        return;
    }
    textField.style.textTransform = 'uppercase';
    // (textField.style.textTransform)
})

document.getElementById('color-picker').addEventListener('change', function(){
    const colorPicker = document.getElementById('color-picker').value;
    textField.style.color = colorPicker;
})


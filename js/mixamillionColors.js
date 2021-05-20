/*
    Mix colors

*/

//create function main
function main(){
    //create varibles to track RGB colors, start with black color
    let red = 0;
    let green = 0;
    let blue = 0;     

    //create a div to display current color
    let showColorDiv = createItem('div', 0, 30, 650, 200);
    styleDiv(showColorDiv, `rgb(${red}, ${green}, ${blue})`);

    //create a div that show current color values in RGB format
    let rgbDiv = createItem('div',10, 30, 650, 50);
    //set text for the div
    rgbDiv.innerHTML = `current color: RGB(${red}, ${green}, ${blue})`;
    //set style for this div using a custom function
    styleDiv(rgbDiv, 'lightgrey', '3px #000 solid', 'bold');

    //create a div that is used to hold all the buttons to make it easier for styling
    let divHoldButtons = createItem('div'); 
    divHoldButtons.style.display = 'grid';
    divHoldButtons.style.gridTemplateColumns = '50px 50px 50px 50px 50px 50px';
    divHoldButtons.style.gridColumnGap = '60px';
   

    //use a loop to create 9 button 
    for(let i = 1; i < 19; i++){
        //create 9 button 
        let button = createItem('button', 10, 10, 100, 50);
        //append button to the div created above
        divHoldButtons.appendChild(button);

       //set the text and attribute for each button that store the amount of that color to add
        if(i == 1 || i == 7 || i == 13){
           button.innerHTML = '+1';
           button.setAttribute('data-value', '1');
        }else if(i == 2 || i == 8 || i == 14){
            button.innerHTML = '+5';
            button.setAttribute('data-value', '5');
        }else if(i == 3 || i == 9 || i == 15){
            button.innerHTML = '+10';
            button.setAttribute('data-value', '10');
        }else if(i == 4 || i == 10 || i == 16){
            button.innerHTML = '-1';
            button.setAttribute('data-value', '-1');
        }else if(i == 5 || i == 11 || i == 17){
            button.innerHTML = '-5';
            button.setAttribute('data-value', '-5');
        }else{
            button.innerHTML = '-10';
            button.setAttribute('data-value', '-10');
        }
    
        //assign backgound color for each button based on index
        //set attribute on each button that stores the color
        if(i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 6  ){
            styleBtn(button, 'red') ;
            button.setAttribute('data-color', 'red');
        }else if(i == 7 || i == 8 || i == 9 || i == 10 || i == 11 || i == 12 ){
            styleBtn(button, 'green');
            button.setAttribute('data-color', 'green');
        }else{
            styleBtn(button, 'blue');
            button.setAttribute('data-color', 'blue');
        }
        
    }



    //use loop to add event to each button
    document.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', (eventData) => {
            //get data-value that was assigned to each element
            let dataValue = parseInt(eventData.target.getAttribute('data-value'));
            //get data-color that was assigned to each element
            let dataColor = eventData.target.getAttribute('data-color');
            if(dataColor == 'red'){
                red = red + dataValue;          
            }else if(dataColor == 'green'){
                green = green + dataValue;
            }else if(dataColor == 'blue'){
                blue = blue + dataValue;
            }
            rgbDiv.innerHTML = `current color: RGB(${red}, ${green}, ${blue})`;
            styleDiv(showColorDiv, `rgb(${red}, ${green}, ${blue})`);
           
        })
    })

    
}


//create a function to create HTML elements
function createItem(type, top, left, width, height){
    let item = document.createElement(type);
    item.style.position = 'relative';
    item.style.width = width + 'px';
    item.style.margin = '10px 10px'
    item.style.height = height + 'px';
    item.style.top = top + 'px';
    item.style.left = left + 'px';
    document.body.appendChild(item);
    return item;
}

//create a style function for the divs that take in a div, and other properties as arguments
function styleDiv(div, background, border, fontweight){
    div.style.backgroundColor = background;
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.border = border;
    div.style.fontWeight = fontweight;
    div.style.alignItems = 'center';
     
}


//create a style function for button
function styleBtn(btn, background){
    btn.style.backgroundColor = background;
    btn.style.color = '#fff';
    btn.style.marginLeft = '20px';
}



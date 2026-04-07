let matrix = ['\u2003','\u2003','\u2003',
              '\u2003','\u2003','\u2003',
              '\u2003','\u2003','\u2003',];   
let player = 0; //if 0 (O), if 1 (X).
async function showGRID(){
    let grid = document.getElementById('main-grid');
    grid.replaceChildren();
    for(let a = 0; a < matrix.length; a++){
        let item = document.createElement('p');
        item.className = "item";
        item.textContent = matrix[a];
        if(matrix[a]=="X") item.style.color = "rgb(199, 62, 62)";
        if(matrix[a]=="O") item.style.color = "rgb(59, 59, 209)";
        item.id = ''+a;
        item.onclick = function () { workGRID(a);};
        grid.appendChild(item);
    };
    return console.log(grid);
};

showGRID();

function workGRID(num){
    if(player==1){
        matrix.splice(num, 1, 'X');
        showGRID();
        return player = 0;
    };

    if(player==0){
        matrix.splice(num, 1, 'O');
        showGRID();
        return player = 1;
    };
};
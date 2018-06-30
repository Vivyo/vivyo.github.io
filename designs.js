$(document).ready(function() {

    $('#sizePicker').submit(function(event) {
        clearGrid();
// clearing a grid with while loop
        makeGrid();
        registerMouseHandlers();
        event.preventDefault();
        removeGrid();
        clearColor();
    });
});

//Create Grid using the attributes o the grid
function makeGrid() {
    let inputH = $('#input_height').val();
    let inputW = $('#input_width').val();
    let table = $('#pixel_canvas');

    for (let r = 1; r <= inputH; r++) {

// To create Table Row
   let row = $('<tr>      </tr>').appendTo(table);
        
     for (let c = 1; c <= inputW; c++) {
// To Create Table Columns
     row.append('<td></td>');
        }
    }
}

// Clear Grid
function clearGrid() {
    $('#pixel_canvas').children().remove();
}

// Color Multiple Grid by moving mouse over them //

function registerMouseHandlers() {
    
    let mouseIsDown = false;

    $('td').on('mousemove', function() {
        if (mouseIsDown) {
            let color = $('#colorPicker').val();
            $(this).css('backgroundColor', color);
        }
    });

    $('td').on('mousedown', function() {
        mouseIsDown = true;
    });

    $('td').on('mouseup', function() {
        mouseIsDown = false;
    });

    // adding color to single cell //
    $('td').on('click', function() {
        let color = $('#colorPicker').val();
        $(this).css('backgroundColor', color);
    });

    // removing color from the cell //      
    $('td').on('dblclick', function() {
        $(this).css('background', 'none');
    })
}

//To Remove all Grid
const removeGrid = () => {
  const removeGridButton = $('#removeGrid');
  const grid = $('tr');
  removeGridButton.click(() => {
    grid.remove();
  });
}

//To Clear Color
const clearColor = () => {
  const clearColorButton = $('#clearColor');
  const gridCell = $('td');
  clearColorButton.click(() => {
    gridCell.removeAttr('style');
  });
}

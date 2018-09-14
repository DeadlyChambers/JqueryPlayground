/*
In this example you will still have the adding functionality, just with more rows in the
table. There will be multiple dom traversing examples, and some oops code.
*/

// find elements
var $table = $("#player-table")
var $nameInput = $("#name")
var $numberInput = $("#number")
var $outputText = $("#output-text")

// 1. Grab element by Id and add a click event, that calls a method to dynamically add a row
// from inputs
// TODO: Swap to button and show the issue with too broad of a selector
// handle click event for the 'Add' Button
$("#add-button").on("click", function () {
    var row = createRow($nameInput.val(), $numberInput.val());
    $table.append(row);
});


// 2. Click the button for display popup, but grabbing by id when there are 2
// of the same id.
// TODO: Uncomment the line to properly populate $name
// handle click event for the 'Create alert with name'
$("#output-name-button").on("click", function () {
    // get the name input, there are two, so this will grab the first, not the second
    var $name = $("#name");

    // how to fix by narrowing your dom traversal    
    // $name = $("#name", $(this).parent())

    var length = $name.length; // although there are 2, this will only show 1
    var name = $name.val();
    alert(`The name is '${name}', and the number of names is '${length}'`);
});

function traverser() {

    // 1. Gather all tds, and display count
    var $tds = $('td');
    appendToTextArea(`1. Total tds '${$tds.length}'`);

    // 2. Get the sibling next to the manning-cell
    var $manningNumberCell = $("#manning-cell").next('td');
    var number = $manningNumberCell.html();
    var name = $('#number-cell').data('cell')
    appendToTextArea(`2. Mannings number ${name} is '${number}'`);

}

// in order to 'append' text to a text area element, I need to get the text in it,
// and append the new value to the textarea
function appendToTextArea(text) {
    $outputText.val($outputText.val() + text + "\n");
}

// dynamically add a row, this could be coming from an api call, or some javascript
function createRow(name, number) {
    var temp =
        `<tr class=\"row\"><td class=\"cell\">${name}</td><td class=\"cell\">${number}</td></tr>`;
    return temp;

}

// 4. a very simple jquery plugin. Pretty much just an extensionn method that will update the 
// button's background from orange, to blue
$.fn.broncoify = function () {
    var $that = $(this);
    $(this).on("click", function (e) {
        var $that = $(this);
        if ($that.css("background-color") === 'rgb(0, 0, 255)')
            $that.css("background-color", "orange");
        else
            $that.css("background-color", "blue");
    })
};

// OnDocumentReady, and see the usage of the jquery plugin
$(function () {
    traverser();
    $("#bronco-button").broncoify();
});
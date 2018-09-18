

// find elements
var $table = $("#player-table")
var $nameInput = $("#name")
var $numberInput = $("#number")

// dynamically add a row, this could be coming from an api call, or some javascript
function createRow(name, number) {
    var temp =
        `<tr class=\"row\"><td class=\"cell\">${name}</td><td class=\"cell\">${number}</td></tr>`;
    return temp;
}
// handle click event
$("button").on("click", function () {
    var row = createRow($nameInput.val(), $numberInput.val());
    $table.append(row);
});





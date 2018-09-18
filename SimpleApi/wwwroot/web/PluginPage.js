


(function ($) {
    // Extending jquery to setup a new plugin
    // calling jquery
    $.fn.setupPlayers = function (options) {

        // Extend our default options with those provided.
        // Note that the first argument to extend is an empty
        // object – this is to keep from overriding our "defaults" object.
        var opts = $.extend({}, $.fn.setupPlayers.defaults, options);

        var $container = $(setupContainer(opts));
        $container.append(setupPlayerTable());
        $(this).after($container);

        // setting up the add button's click event
        $("#add-button").on("click", function () {
            // find elements
            var $table = $("#player-table")
            var $nameInput = $("#name")
            var $numberInput = $("#number")
            var row = createRow($nameInput.val(), $numberInput.val());
            $table.append(row);
        });

        $(this).remove();
        return $container;
    }

    // Plugin defaults – added as a property on our plugin function.
    $.fn.setupPlayers.defaults = {
        buttonText: "Add"
    };

    // dynamically add a row, this could be coming from an api call, or some javascript
    function createRow(name, number) {
        var temp =
            `<tr class=\"row\"><td class=\"cell\">${name}</td><td class=\"cell\">${number}</td></tr>`;
        return temp;
    }

    // The container that will have all of the inputs, and buttons 
    function setupContainer(options) {
        var buttonText = options.buttonText;
        return `  <div id="input-container">
  <input id="name" type="text" />
  <input id="number" type="number"/>
  <button id="add-button" class="button" >
  ${buttonText}
  </button>
</div>`;
    }
    // This is the player table already loaded with a player and number
    function setupPlayerTable() {
        return `<table id="player-table">
<tr>
  <th>Name</th>
  <th>Number</th>
</tr>
<tr class="row">
  <td class="cell">Case Keenum</td>
  <td class="cell">4</td>
</tr>
</table>`;
    }
 }(jQuery));

$(function () {
    // Uncomment the append to show how the return from the jquery plugin's extension method
    // returns a jquery object that you can chain off of.
    $("#plugin-anchor").setupPlayers({ buttonText: 'Add Player' })
    //.append("<h1>hello world</h1>");

});
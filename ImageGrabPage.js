// find elements
var $urlInput = $("#website-url");
var $imageContainer = $("#image-container");

// handle click event
$("button").on("click", function () {
    var url = $urlInput.val();
    if (url.length !== 0) {
        $.ajax({
            url: url,
            crossdomain:true,
            success: function (data, textStatus, jqXHR) {
                var $img = $("img", $(data)).get(0);
                if ($img.length !== 0) {
                    $imageContainer.html(''); // clear container
                    $imageContainer.append($img);
                }
                else {
                    alert('no images found at ' + url);
                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(`status: ${jqXHR.status} response: ${jqXHR.responseText}`)
            },

        });      
    }
    else {
        alert('There is no url in the input');
    }
});


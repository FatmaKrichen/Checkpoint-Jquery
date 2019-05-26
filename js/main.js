console.log("28 04 2019");

function changeBold() {
    $("#text").css("fontWeight", "bold");
}

function ChangeItalic() {
    $("#text").css("fontStyle", "italic");
}
function Underline() {
    $("#text").css("textDecoration" , "underline");
}
function changeFontFamily(event) {
    $("#text").css("fontFamily", event.value  );
}
function changeTailleText(event) {
    $("#text").css("fontSize", event.value  );
}

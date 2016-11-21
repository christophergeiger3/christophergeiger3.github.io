/*
$('#go').onclick = function(){
    var inputText = $('#text-input').val();
    var thugifiedText = inputText + ', dawg';
    $('#output').innerHTML = thugifiedText;
};
*/

document.getElementById('go').onclick = function() {
    var inputText = $('#text-input').val();
    var thugifiedText = inputText + ", dawg";
    document.getElementById('output').innerHTML = thugifiedText;
};
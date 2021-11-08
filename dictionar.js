let dictionary = [];
document.getElementById("add").onclick = function() {
    var text = document.getElementById("input").value;
    var li = "<li>" + text + "</li>";
    document.getElementById("list").innerHTML += li;
    document.getElementById("input").value = "";
    let newLength = dictionary.push(text);
}

document.getElementById("find").onclick = function() {
    let cond = 0;
    dictionary.forEach(function(item, index, array) {
        var x = document.getElementById("input2").value;
        if (x === item) {
            cond = 1;
        }
    });
    if (cond === 1) {
        console.log("The word: ", document.getElementById("input2").value, " exists in the dictionary");
    } else {
        console.log("The word: ", document.getElementById("input2").value, " does not exist in the dictionary");
    }
    document.getElementById("input2").value = "";
}
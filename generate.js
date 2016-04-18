<!DOCTYPE html>
<html>
<body>

<p>Generate a shooting sequence</p>

<input type="submit" onClick="generate()" value="Generate" />

<p id="sequence"></p>

<script>
function generate() {
    var shapes = [
        ["star", "yellow", "1"],
        ["circle", "red", "2"],
        ["square", "blue", "3"],
        ["heart", "green", "4"],
        ["triangle", "white", "5"],
        ["pentagon", "orange", "6"]
    ]
    var i = 0
    var text = ""
    while (shapes.length > 0) {
        rand = Math.floor(Math.random() * shapes.length)
        text += shapes[rand][Math.floor(Math.random() * 3)] + ", "
        shapes.splice(rand, 1)
    }
    document.getElementById("sequence").innerHTML = text;
}
</script>

</body>
</html>

function run() {
    let HTMLCODE = document.getElementById("HTML-CODE").value; 

    let CSSCODE = document.getElementById("CSS-CODE").value; 

    let JSCODE = document.getElementById("JS-CODE").value; 

    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = HTMLCODE +"<style>"+CSSCODE +"</style>";
    output.contentWindow.eval(JSCODE)
}
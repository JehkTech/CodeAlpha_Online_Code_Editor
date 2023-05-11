var languageSelect = document.getElementById("language-select");
var themeSelect = document.getElementById("theme-select");
var editor;

function changeLanguage() {
  var selectedLanguage = languageSelect.value;
  editor.setOption("mode", selectedLanguage);
}

function changeTheme() {
  var selectedTheme = themeSelect.value;
  editor.setOption("theme", selectedTheme);
}

window.onload = function() {
  editor = CodeMirror.fromTextArea(
    document.getElementById("editor"), {
    mode: "xml",
    theme: "dracula",
    lineNumbers: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    showTrailingSpace: true,
    matchBrackets: true
  });
  
  editor.setSize("auto", "300");u68
  editor.showHint

};

function copyToClipboard() {
  var editorText = document.getElementById("editor").value;
  navigator.clipboard.writeText(editorText)
  .then(() => {
    console.log("Code Copied to clipboard");
    alert("Code Copied to clipboard");
  })
  .catch(err => {
    console.error("Error copying to clipboard: ", err);
    alert("Error copying to clipboard");
  });
}


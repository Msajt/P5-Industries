var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
  mode: "xml",
  theme: "ambiance",
  lineNumbers: true,
  autoCloseTags: true
});

function updatePreview() {
  var previewFrame = document.getElementById('preview');
  var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
  preview.open();
  preview.write(editor.getValue());
  preview.close();
}
setTimeout(updatePreview, 300);

function refreshPreview(){
  var refresh = document.getElementById('preview');
  refresh.src = refresh.src;
  refresh.src = '';
}
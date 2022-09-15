function MyFunction() {
  var copytext = document.getElementById("MyInputText");

  copytext.select(); //select the text
  copytext.setSelectionRange(0, 9999); // set the range for text

  navigator.clipboard.writeText(copytext.value); // copy the text which is inside the text feild

  alert("Copied the text :" + copytext.value); // will show the alert box when the text will get Copied
}

import dialog from 'dialog-node';

//will be called after user closes the dialog
var callback = function(code, retVal, stderr)
{
    console.log("return value = <" + retVal + ">");
}

dialog.entry('Type some text', "entry prompt", 0, callback);
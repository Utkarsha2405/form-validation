$(document).ready(function() {
    $("#add").click(function() {
        var intId = $("#buildyourform div").length + 1;
        var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
        var fName = $("<input placeholder=\"Unique Identifier\" type=\"text\" class=\"fieldname\" />");
        var fType = $("<select class=\"fieldtype\"><option value=\"null\">[Type]</option><option value=\"paragraph\">Paragraph</option><option value=\"text\">Text</option><option value=\"email\">Email</option><option value=\"textarea\">Text Area</option><option value=\"file\">File</option><option value=\"phone\">Phone</option><option value=\"date\">Date</option><option value=\"radio\">Radio Buttons</option><option value=\"checkbox\">Check Boxes</option><option value=\"notlisted\">Not Listed</option></select>");
        var fReq = $("<select class=\"fieldreq\"><option value=\"null\">[Required?]</option><option value=\"yes\">Yes</option><option value=\"no\">No</option></select>");
        var fIndex = $("<select class=\"fieldindex\"><option value=\"null\">[Index?]</option><option value=\"yes\">Yes</option><option value=\"no\">No</option><option value=\"maybe\">Maybe</option></select>");
        var fWidth = $("<select class=\"fieldwidth\"><option value=\"null\">[Width]</option><option value=\"one-whole\">100%</option><option value=\"one-half\">50%</option><option value=\"one-third\">33%</option><option value=\"one-quarter\">25%</option></select>");
        var fContent = $("<input placeholder=\"Content/Label\" type=\"text\" class=\"fieldcontent\" />");
        var removeButton = $("<input type=\"button\" class=\"remove\" value=\"X\" />");
        removeButton.click(function() {
            $(this).parent().remove();
        });
        fieldWrapper.append(fName);
        fieldWrapper.append(fType);
        fieldWrapper.append(fReq);
        fieldWrapper.append(fIndex);
        fieldWrapper.append(fWidth);
        fieldWrapper.append(fContent);
        fieldWrapper.append(removeButton);
        $("#buildyourform").append(fieldWrapper);
    });
    $("#preview").click(function() {
        $("#yourform").remove();
        var fieldSet = $("<fieldset id=\"yourform\"><legend>Your Code</legend></fieldset>");
        $("#buildyourform div").each(function() {
            var id = "input" + $(this).attr("id").replace("field","");
            var label = $("<pre style=\"clear:both;\" class=\"" + id + "ident" + "\">" + "'" + $(this).find("input.fieldname").first().val() + "' => array(" + "</pre>");
            var input;
            var inputtype = ($(this).find("select.fieldtype").first().val());
            switch ($(this).find("select.fieldtype").first().val()) {
                case "null":
                    input = $("<pre id=\"" + id + "type" + "\">/*'type' => 'UNDEFINED', */</pre>");
                    break;
                case "paragraph":
                    input = $("<pre id=\"" + id + "type" + "\">'type' => 'paragraph', </pre>"); 
                    break;
                case "text":
                    input = $("<pre id=\"" + id + "type" + "\">'type' => 'text', </pre>"); 
                    break;
                case "email":
                    input = $("<pre id=\"" + id + "type" + "\">'type' => 'email', </pre>"); 
                    break;
                case "textarea":
                    input = $("<pre id=\"" + id + "type" + "\">'type' => 'textarea', </pre>"); 
                    break;
                case "file":
                    input = $("<pre id=\"" + id + "type" + "\">'type' => 'file', </pre>"); 
                    break;
                case "phone":
                    input = $("<pre id=\"" + id + "type" + "\">'type' => 'phone_set', </pre>"); 
                    break;
                case "date":
                    input = $("<pre id=\"" + id + "type" + "\">'type' => 'date', </pre>"); 
                    break;
                case "radio":
                    input = $("<pre id=\"" + id + "type" + "\">'type' => 'radio', </pre>"); 
                    break; 
                case "checkbox":
                    input = $("<pre id=\"" + id + "type" + "\">'type' => 'checkbox', </pre>"); 
                    break; 
                case "notlisted":
                    input = $("<pre id=\"" + id + "type" + "\">/*'type' => 'UNDEFINED', */</pre>"); 
                    break; 
            }
            var requi;
            switch ($(this).find("select.fieldreq").first().val()) {
                case "null":
                    requi = $("<pre id=\"" + id + "req" + "\">/*'isRequired' => UNDEFINED, */</pre>");
                    break;
                case "yes":
                    requi = $("<pre id=\"" + id + "req" + "\">'isRequired' => true, </pre>"); 
                    break;
                case "no":
                    requi = $("<pre id=\"" + id + "req" + "\">'isRequired' => false, </pre>"); 
                    break;
            }
            var index;
            switch ($(this).find("select.fieldindex").first().val()) {
                case "null":
                    index = $("<pre id=\"" + id + "index" + "\">/*'index' => UNDEFINED, */</pre>");
                    break;
                case "yes":
                    index = $("<pre id=\"" + id + "index" + "\">'index' => true, </pre>"); 
                    break;
                case "no":
                    index = $("<pre id=\"" + id + "index" + "\">'index' => false, </pre>"); 
                    break;
                case "maybe":
                    index = $("<pre id=\"" + id + "index" + "\">'index' => /*true*/, </pre>"); 
                    break;
            }
            var width;
            switch ($(this).find("select.fieldwidth").first().val()) {
                case "null":
                    width = $("<pre id=\"" + id + "width" + "\"></pre>");
                    break;
                case "one-whole":
                    width = $("<pre id=\"" + id + "width" + "\">'width' => 'one-whole', </pre>"); 
                    break;
                case "one-half":
                    width = $("<pre id=\"" + id + "width" + "\">'width' => 'one-half', </pre>"); 
                    break;
                case "one-third":
                    width = $("<pre id=\"" + id + "width" + "\">'width' => 'one-third', </pre>"); 
                    break;
                case "one-quarter":
                    width = $("<pre id=\"" + id + "width" + "\">'width' => 'one-quarter', </pre>"); 
                    break;
            }
            if (inputtype = "text"){
              var content = $("<pre class=\"" + id + "content" + "\">" + "'label' => '" + $(this).find("input.fieldcontent").first().val().replace("<","&lt;").replace("/","&#47;").replace(">","&gt;") + "'),</pre>");
            } else {
              var content = $("<pre class=\"" + id + "content" + "\">" + "'content' => '" + $(this).find("input.fieldcontent").first().val().replace("<","&lt;").replace("/","&#47;").replace(">","&gt;") + "'),</pre>");
            }
            fieldSet.append(label);
            fieldSet.append(input);
            fieldSet.append(requi);
            fieldSet.append(index);
            fieldSet.append(width);
            fieldSet.append(content);
        });
        $("body").append(fieldSet);
    });
});
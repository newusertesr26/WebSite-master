$(document).ready(function () {
    $("form[name='form-hire-us']").validate({
        rules: {
            Name: "required",
            EmailId: {
                required: true,
                email: true
            },
            Country: "required",
            PhoneNumber: {
                number: true,
                required: true
            },
            Developer: "required",
            Attachment: "required"
        },
        messages: {
            Name: "This field is required",
            EmailId: {
                email: "Please enter valid email",
                required: "This field is required"
            },
            Country: "This field is required",
            PhoneNumber: {
                required: "This field is required",
                number: "Please enter valid contact number"
            },
            Developer: "This field is required",
            Attachment: "This field is required"
        },
        submitHandler: function (form) {
            $("#btn-loader").show();
            $("#span-submit").html("Submitting..");
            submitHireUs().then((data) => {
                if (data == 1) {
                    showToastMessage("success", "Thanks for contacting us. We will reach you soon..");
                    clearForm();
                }
                else if (data == -2) {
                    showToastMessage("error", "Attachment file is required.");
                }
                else {
                    showToastMessage("error", "Error while submiting your query.");
                }
                resetLoader();
            }).catch((error) => {
                showToastMessage("error", "Error while submiting your query.");
                resetLoader();
            });
        }
    });
    $("#cancel-hire-us").click(function () {
        $('#hiringpopup').modal('hide');
    });
    $("#file-attachment").change(function (e) {
        debugger;
        if ($(this).get(0).files[0]) {
            var filename = $(this).get(0).files[0].name;
            var finalName = filename.substring(0, 12);
            if (filename.length < 11) {
                finalName = filename;
            }
            else {
                finalName = finalName + "..";
            }
            $("#span-attach-resume").html(finalName);
            $('#span-attach-resume').attr('style', 'color: white !important');
            $("#div-file-attachment").addClass("active-attachment");
        }
        else {
            $("#span-attach-resume").html("Attachment");
            $('#span-attach-resume').removeAttr('style');
            $("#div-file-attachment").removeClass("active-attachment");
        }
    });
    bindCountry();
});
submitHireUs = async () => {
    var myform = document.getElementById("form-hire-us");
    var fd = new FormData(myform);
    var fileattachment = document.getElementById('file-attachment');
    if (fileattachment.files.length > 0) {
        fd.append("Attachment", fileattachment.files[0]);
    }
    const settings = {
        method: 'POST',
        body: fd
    };
    try {
        const fetchResponse = await fetch("/hire-us-send-mail", settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        return e;
    }
}
function bindCountry() {
    fetch("/data/country.json")
        .then(response => {
            return response.json();
        })
        .then(data => {
            $.each(data, function (key, value) {
                
                $('#ddl-country')
                    .append($("<option></option>")
                        .attr("value", value.name)
                        .text(value.name));
            });
        });
}
function clearForm() {
    $('#form-hire-us').trigger("reset");
    $("#file-attachment").val('');
    $("#attachment-value").val('');
}
function resetLoader() {
    $("#btn-loader").hide();
    $("#span-submit").html("Yes, I want to talk to an export");
}
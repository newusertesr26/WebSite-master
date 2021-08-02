$(document).ready(function () {
    $("form[name='contact-form']").validate({
        rules: {
            name: "required",
            description: "required",
            emailid: {
                required: true,
                email: true
            },
            contactnumber: {
                number: true,
                required: true
            }
        },
        messages: {
            name: "Please enter your name",
            emailid: {
                email: "Please enter valid email",
                required: "Please enter your email"
            },
            contactnumber: {
                required: "Please enter your contact number",
                number: "Please enter valid contact number"
            },
            description: "Please enter description"
        },
        submitHandler: function (form) {
            $("#btn-loader").show();
            $("#span-submit").html("Submitting..");
            submitContact().then((data) => {
                if (data == 1) {
                    showToastMessage("success","Thanks for contacting us. We will reach you soon..");
                    clearForm();
                }
                else {
                    showToastMessage("error","Error while submiting your query.");
                }
                resetLoader();
            }).catch((error) => {
                showToastMessage("error","Error while submiting your query.");
                resetLoader();
            });
        }
    });
});
submitContact = async () => {
    var obj = new Object();
    obj.Name = $("#name").val();
    obj.EmailId = $("#emailid").val();
    obj.ContactNumber = $("#contactnumber").val();
    obj.Description = $("#description").val();
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    };
    try {
        const fetchResponse = await fetch("/contact-us-send-mail", settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        return e;
    }
}
function clearForm() {
    $("#name").val("");
    $("#emailid").val("");
    $("#contactnumber").val("");
    $("#description").val("");
}
function resetLoader() {
    $("#btn-loader").hide();
    $("#span-submit").html("Submit");
}
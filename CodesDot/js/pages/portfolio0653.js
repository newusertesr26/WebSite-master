$(document).ready(function () {
    $("form[name='form-portfolio']").validate({
        rules: {
            FirstName: "required",
            LastName: "required",
            EmailId: {
                required: true,
                email: true
            },
            ContactNumber: {
                number: true,
                required: true
            },
            Message: "required"
        },
        messages: {
            FirstName: "This field is required",
            LastName: "This field is required",
            EmailId: {
                email: "Please enter valid email",
                required: "This field is required"
            },
            PhoneNumber: {
                required: "This field is required",
                number: "Please enter valid contact number"
            },
            Message: "This field is required"
        },
        submitHandler: function (form) {
            $("#btn-loader").show();
            $("#span-submit").html("Submitting..");
            submitPortfolio().then((data) => {
                debugger;
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
submitPortfolio = async () => {
    var myform = document.getElementById("form-portfolio");
    var fd = new FormData(myform);
    fd.append("ProjectUrl", window.location.href);
    const settings = {
        method: 'POST',
        body: fd
    };
    try {
        const fetchResponse = await fetch("/portfolio/portfolio-send-email", settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        return e;
    }
}
function clearForm() {
    $('#form-portfolio').trigger("reset");
}
function resetLoader() {
    $("#btn-loader").hide();
    $("#span-submit").html("Submit");
}
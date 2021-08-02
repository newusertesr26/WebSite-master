var isApplyJob = false;
$(document).ready(function () {
    //$("form[name='form-apply-job']").validate({
    //    rules: {
    //        FirstName: "required",
    //        LastName: "required",
    //        EmailId: {
    //            required: true,
    //            email: true
    //        },
    //        PhoneNumber: {
    //            number: true,
    //            required: true
    //        },
    //        Location: "required",
    //        AboutYourSelf: "required",
    //        ResumeFile: "required"
    //    },
    //    messages: {
    //        FirstName: "This field is required",
    //        LastName: "This field is required",
    //        EmailId: {
    //            email: "Please enter valid email",
    //            required: "This field is required"
    //        },
    //        PhoneNumber: {
    //            required: "This field is required",
    //            number: "Please enter valid contact number"
    //        },
    //        Location: "This field is required",
    //        AboutYourSelf: "This field is required",
    //        ResumeFile: "This field is required"
    //    },
    //    submitHandler: function (form) {
    //        $("#btn-loader").show();
    //        $("#span-submit").html("Submitting..");
    //        if (!isApplyJob) {
    //            isApplyJob = true;
    //            submitApplyJob().then((data) => {
    //                if (data == 1) {
    //                    showToastMessage("success", "Thanks for applying job. We will reach you soon..");
    //                    clearForm();
    //                }
    //                else if (data == -2) {
    //                    showToastMessage("error", "Resume file is required.");
    //                }
    //                else if (data == -3) {
    //                    showToastMessage("error", "Invalid file format! Allowed only DOC or PDF formats.");
    //                }
    //                else {
    //                    showToastMessage("error", "Error while submiting your query.");
    //                }
    //                resetLoader();
    //                isApplyJob = false;
    //            }).catch((error) => {
    //                showToastMessage("error", "Error while submiting your query.");
    //                resetLoader();
    //                isApplyJob = false;
    //            });
    //        }
    //    }
    //});

    $(".btn-apply-job").click(function () {
        var fileid = $(this).attr("attr-id");
        $("#FileId").val(fileid);
        $('#applyingpopup').modal('show');
    });
    $("#file-attachment").change(function (e) {
        debugger;
        if ($(this).get(0).files[0]) {
            var filename = $(this).get(0).files[0].name;
            var finalName = filename.substring(0, 15);
            if (filename.length < 15) {
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
            $("#span-attach-resume").html("Attach Resume");
            $('#span-attach-resume').removeAttr('style');
            $("#div-file-attachment").removeClass("active-attachment");
        }
    });
});
//submitApplyJob = async () => {
//    var myform = document.getElementById("form-apply-job");
//    var fd = new FormData(myform);
//    var fileattachment = document.getElementById('file-attachment');
//    if (fileattachment.files.length > 0) {
//        fd.append("ResumeFile", fileattachment.files[0]);
//    }
//    fd.append("FileId", $("#FileId").val());
//    const settings = {
//        method: 'POST',
//        body: fd
//    };
//    try {
//        const fetchResponse = await fetch("/apply-job-send-mail", settings);
//        const data = await fetchResponse.json();
//        return data;
//    } catch (e) {
//        return e;
//    }
//}
function clearForm() {
    $('#form-apply-job').trigger("reset");
    $("#file-attachment").val(''); 
}
function resetLoader() {
    $("#btn-loader").hide();
    $("#span-submit").html("Submit");
}
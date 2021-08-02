var isapplyjob = false;

var career = {

    InitializedControl: function () {

        $(".text-danger").hide();

        $(".btn-apply-job").click(function () {
            var fileid = $(this).attr("attr-id");
            $("#FileId").val(fileid);
            $('#applyingpopup').modal('show');
        });

        $("#btn-submit").click(function () {
            $("#btn-loader").show();

            var fd = new FormData();

            var firstname = $("#FirstName").val();
            var lastname = $("#LastName").val();
            var emailid = $("#EmailId").val();
            var phonenumber = $("#PhoneNumber").val();
            var location = $("#Location").val();
            var linkedinprofile = $("#LinkedInProfile").val();
            var aboutyourself = $("#AboutYourSelf").val();
            var fileattachment = $("#file-attachment")[0].files[0];

            //console.log(firstname, lastname, emailid, phonenumber, location, linkedinprofile, aboutyourself, fileattachment);

            fd.append("firstname", firstname);
            fd.append("lastname", lastname);
            fd.append("emailid", emailid);
            fd.append("phonenumber", phonenumber);
            fd.append("location", location);
            fd.append("linkedinprofile", linkedinprofile);
            fd.append("aboutyourself", aboutyourself);
            fd.append("file", fileattachment);
            fd.append("filename", fileattachment.name);
            fd.append("filetype", fileattachment.type);
         

            $.ajax({
                type: "POST",
                url: "/career/CareerDataSave",
                data: fd,
                dataType: "json",
                contentType: 'application/json; charset=utf-8',
                contentType: false,
                processData: false, 
                success: function (data) {
                    $("#btn-loader").hide();
                    alert(data);
                },
                error: function () {
                    alert("Error occured!!")
                }
            });

        });


        $("#file-attachment").change(function (e) {
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

    },

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
    //},

    clearForm: function () {
        $('#form-apply-job').trigger("reset");
        $("#file-attachment").val('');
    },
    resetLoader: function () {
        $("#btn-loader").hide();
        $("#span-submit").html("Submit");
    }

};


$(document).ready(function () {
    career.InitializedControl();
    
});


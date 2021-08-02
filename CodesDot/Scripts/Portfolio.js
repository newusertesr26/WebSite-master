
    $(document).ready(function () {
        $("#btn-submit").click(function () {
            $("#btn-loader").show();

            var fd = new FormData();

            var FirstName = $("#FirstName").val();
            var LastName = $("#LastName").val();
            var EmailId = $("#EmailId").val();
            var ContactNumber = $("#ContactNumber").val();
            var Message = $("#Message").val();

            console.log(FirstName, LastName, EmailId, ContactNumber, Message);

            //fd.append("firstname", firstname);
            //fd.append("lastname", lastname);
            //fd.append("emailid", emailid);
            //fd.append("phonenumber", phonenumber);
            //fd.append("location", location);
            //fd.append("linkedinprofile", linkedinprofile);
            //fd.append("aboutyourself", aboutyourself);
            //fd.append("file", fileattachment);
            //fd.append("filename", fileattachment.name);
            //fd.append("filetype", fileattachment.type);

            var req = {
                firstname: FirstName,
                lastname: LastName,
                emailaddress: EmailId,
                phoneno: ContactNumber,
                message: Message
            };


            $.ajax({
                type: "POST",
                url: "/Portfolio/ContactDataSave",
                data: JSON.stringify(req),
                dataType: "json",
                contentType: 'application/json; charset=utf-8',
                success: function (data) {
                    console.log(data);
                    $("#btn-loader").hide();
                    alert(data);
                },
                error: function () {
                    alert("Error occured!!")
                }
            });

        });
    });



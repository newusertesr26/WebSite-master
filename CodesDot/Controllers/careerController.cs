using CodesDot.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CodesDot.Controllers
{
    public class careerController : Controller
    {
        CodesdotEntities1 codesDotEntities;
        // GET: hireus
        public careerController()
        {
            codesDotEntities = new CodesdotEntities1();
        }
        // GET: career
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Businessanalyst()
        {
            return View();
        }
        public ActionResult Businessdevelopmentexecutive()
        {
            return View();
        }
        public ActionResult Businessdevelopmentmanager()
        {
            return View();
        }
        public ActionResult Uiuxdesigner()
        {
            return View();
        }
        public ActionResult Projectmanager()
        {
            return View();
        }
        public ActionResult Teamleader()
        {
            return View();
        }
        public ActionResult Reactnativedeveloper()
        {
            return View();
        }
        public ActionResult Androiddeveloper()
        {
            return View();
        }
        public ActionResult Flutterdeveloper()
        {
            return View();
        }
        public ActionResult Iosdeveloper()
        {
            return View();
        }
        public ActionResult Sraspnetdeveloper()
        {
            return View();
        }
        public ActionResult Angulardeveloper()
        {
            return View();
        }
        public ActionResult Jraspnetmvcdeveloper()
        {
            return View();
        }
        public ActionResult Meanstackdeveloper()
        {
            return View();
        }
        public ActionResult Nodejsdeveloper()
        {
            return View();
        }
        public ActionResult Phpcilaraveldeveloper()
        {
            return View();
        }
        public ActionResult Reactjsdeveloper()
        {
            return View();
        }
        public ActionResult Srwordpressdeveloper()
        {
            return View();
        }
        public ActionResult Seoexecutive()
        {
            return View();
        }

        [HttpPost]
        public JsonResult CareerDataSave(CareerModel model)
        {

            Career career = new Career();
            string output = "";
            try
            {
                MemoryStream target = new MemoryStream();
                model.file.InputStream.CopyTo(target);
                byte[] data = target.ToArray();

                career.firstname = model.firstname;
                career.lastname = model.lastname;
                career.emailid = model.emailid;
                career.phonenumber = model.phonenumber;
                career.location = model.location;
                career.linkedinprofile = model.linkedinprofile;
                career.aboutyourself = model.aboutyourself;
                career.filename = model.filename;
                career.filebinary = data;
                career.filetype = model.filetype;

                codesDotEntities.Careers.Add(career);
                codesDotEntities.SaveChanges();
                output = "Data saved successfully";
            }
            catch (Exception ex)
            {
                return Json(ex, JsonRequestBehavior.AllowGet);
            }
            return Json(output, JsonRequestBehavior.AllowGet);
        }

        //public ActionResult AddDocFile(CustomerdocFiles pictureVM)
        //{
        //    SavePictureResponse response = new SavePictureResponse();
        //    CustomerDocumentDetail picture = new CustomerDocumentDetail();
        //    var contentType = pictureVM.FileBinary.ContentType;
        //    int fileSizeInBytes = pictureVM.FileBinary.ContentLength;
        //    MemoryStream target = new MemoryStream();
        //    pictureVM.FileBinary.InputStream.CopyTo(target);
        //    byte[] data = target.ToArray();

        //    //picture.FileBinary = data;
        //    picture.DocumentName = pictureVM.Filename;
        //    picture.CustomerId = pictureVM.CustID;
        //    picture.CategoryId = pictureVM.Categoryid;
        //    picture.UploadedOn = DateTime.UtcNow;
        //    picture.IsVerifiedType = 0;
        //    picture.IsSubmited = false;
        //    picture.DocGuid = pictureVM.DocGuid;
        //    try
        //    {
        //        var _doc = db.CustomerDocumentDetail.Add(picture);
        //        db.SaveChanges();

        //        string prodpath = Server.MapPath("~/Content/CustomerDocuments/" + pictureVM.CustID);
        //        if (!Directory.Exists(prodpath))
        //        {
        //            Directory.CreateDirectory(prodpath);
        //        }

        //        string seotrimname = pictureVM.Filename;

        //        string extensionname = GetFileExtensionFromMimeType(contentType);

        //        //var thumbFileName = string.Format("{0}_{1}.{2}", picture.id, seotrimname, extensionname);

        //        string picturename = string.Format("{0}\\{1}", prodpath, seotrimname);

        //        if (!System.IO.File.Exists(picturename))
        //        {
        //            using (System.IO.File.Create(picturename))
        //            {
        //            }
        //            System.IO.File.WriteAllBytes(picturename, data);
        //        }


        //        response.issuccess = true;
        //        response.message = "Record saved successfully.";
        //        //return "Saved-" + _pictures.Id;
        //    }
        //    catch (Exception ex)
        //    {
        //        response.issuccess = true;
        //        response.message = ex.Message.ToString();
        //        //return "Error-" + ex.Message.ToString();
        //    }
        //    return Json(response, JsonRequestBehavior.AllowGet);

        //}

    }
}

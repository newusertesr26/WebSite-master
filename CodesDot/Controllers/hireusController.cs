using Amazon.CloudFormation.Model;
using CodesDot.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace CodesDot.Controllers
{
    public class hireusController : Controller
    {

        CodesdotEntities1 codesDotEntities;         
        // GET: hireus
        public hireusController()
        {
            codesDotEntities = new CodesdotEntities1();
        }
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult contactus()
        {
            return View();
        }
        [HttpPost]
        public JsonResult ContactDataSave(ContactusModel model)
        {

            Contact contact = new Contact();
            string output = "";
            try
            {
                contact.name = model.name;
                contact.email = model.email;
                contact.phonenno = model.phonenno;
                contact.description = model.description;

                codesDotEntities.Contacts.Add(contact);
                codesDotEntities.SaveChanges();
                output = "Data saved successfully";
            }
            catch (Exception ex)
            {
                return Json(ex, JsonRequestBehavior.AllowGet);
            }
                return Json(output, JsonRequestBehavior.AllowGet);
        }
    }
}


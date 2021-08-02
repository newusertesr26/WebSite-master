using CodesDot.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CodesDot.Controllers
{
    public class portfolioController : Controller
    {
        CodesdotEntities1 codesDotEntities;
        // GET: hireus
        public portfolioController()
        {
            codesDotEntities = new CodesdotEntities1();
        }
        // GET: portfolio
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Gdpimpex()
        {
            return View();
        }
        public ActionResult Honeyexport()
        {
            return View();
        }
        public ActionResult Medicaldevice()
        {
            return View();
        }
        public ActionResult Millonhands()
        {
            return View();
        }
        public ActionResult Narmada()
        {
            return View();
        }
        public ActionResult Onesaid()
        {
            return View();
        }
        public ActionResult Sddiam()
        {
            return View();
        }
        public ActionResult Smileprogram()
        {
            return View();
        }
        public ActionResult Varnilabgrown()
        {
            return View();
        }
        public JsonResult ContactDataSave(PortfolioModel model)
        {

            Portfolio port = new Portfolio();
            string output = "";
            try
            {
                port.firstname = model.firstname;
                port.lastname = model.lastname;
                port.emailaddress = model.emailaddress;
                port.phoneno = model.phoneno;
                port.message = model.message;

                codesDotEntities.Portfolios.Add(port);
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


using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CodesDot.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult aboutus()
        {         
            return View();
        }
        public ActionResult Privacypolicy()
        {
            return View();
        }
        public ActionResult Sitemap()
        {
            return View();
        }

    }
}
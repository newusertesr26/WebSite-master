using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CodesDot.Models
{
    public class CareerModel
    {
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string emailid { get; set; }
        public string phonenumber { get; set; }
        public string location { get; set; }
        public string linkedinprofile { get; set; }
        public string aboutyourself { get; set; }
        public HttpPostedFileBase file { get; set; }
        public string filename { get; set; }
        public byte[] filebinary { get; set; }
        public string filetype { get; set; }
    }
}
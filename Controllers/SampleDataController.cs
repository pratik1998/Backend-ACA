using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ACA.Models;
using Newtonsoft.Json;

namespace ACA.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        [HttpPost("address")]
        public string returnAddress([FromBody]Address add)
        {
            //var currAdd = new Address();
            string json = JsonConvert.SerializeObject(add);
            return json;
        }

        [HttpPost("personalInfo")]
        public string savePersonalInfo([FromBody]PersonalInfo pInfo)
        {
            string json = JsonConvert.SerializeObject(pInfo);
            return json;
        }
    }
}

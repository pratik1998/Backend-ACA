using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ACA.Models
{
    public class Address{
        public string contactPerson{ get; set; }
        public string addressLine1{ get; set; }
        public string addressLine2{ get; set; }
        public string city{ get; set; }
        public string state{ get; set; }
        public string pincode{ get; set; }
    }
}
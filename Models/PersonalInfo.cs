using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ACA.Models
{
    public class PersonalInfo{
        public string fullName{ get; set; }
        public string gName{ get; set; }
        public string dob{ get; set; }
        public string gender{ get; set; }
        public Address address{ get; set; }
        public ContactInfo contactInfo{ get; set; }
    }
}
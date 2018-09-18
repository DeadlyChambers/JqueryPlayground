using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SimpleApi.Controllers
{  
    
    [Route("api/[controller]")]
    [ApiController]
    public class ElementsController : ControllerBase
    {
        [Route("div/{content}")]
        public ActionResult GetDiv(string content)
        {
            //Simple action with simple return
            return Ok("<h1>Response From Api</h1>");
        }
        
        [Route("cats/{id:int}")]
        public ActionResult GetCats(int id)
        {
            return Ok($"<div id='container-for-demo-purposes'><img src='http://localhost:54487/img/cat{id}.jpeg'></img></div>");
        }
        

    }

}

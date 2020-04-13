using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using MyReactApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace MyReactApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IDbConnectionFactory _dbConnectionFactory;

        public ProductController(IDbConnectionFactory dbConnectionFactory)
        {
            _dbConnectionFactory = dbConnectionFactory;
        }

        // GET: api/Product
        [HttpGet]
        [Route("List")]
        public IEnumerable<Product> List(int productSubcategoryId)
        {
            using (var connection = _dbConnectionFactory.GetConnection())
            {
                return connection.Query<Product>(
                    "select * from [Production].[Product] where [ProductSubcategoryID] = @ProductSubcategoryID",
                    new { productSubcategoryId });
            }
        }

        [HttpGet]
        public Product Get(int productId)
        {
            using (var connection = _dbConnectionFactory.GetConnection())
            {
                return connection.Query<Product>(
                    "select top 1 * from [Production].[Product] where [ProductID] = @ProductID",
                    new { productId }).FirstOrDefault();
            }
        }

        // POST: api/Product
        [HttpPost]
        public IActionResult Post([FromBody] Product value)
        {
            if(value.ListPrice > 100)
            {
                ModelState.AddModelError("ListPrice", "Toooo much!");
                return BadRequest(ModelState);
            }

            // Save the thing

            return Ok();
        }

        // PUT: api/Product/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
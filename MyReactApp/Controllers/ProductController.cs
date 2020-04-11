using Dapper;
using Microsoft.AspNetCore.Mvc;
using MyReactApp.Models;
using System.Collections.Generic;

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
        public IEnumerable<Product> Get(int productSubcategoryId)
        {
            using (var connection = _dbConnectionFactory.GetConnection())
            {
                return connection.Query<Product>(
                    "select * from [Production].[Product] where [ProductSubcategoryID] = @ProductSubcategoryID",
                    new { productSubcategoryId });
            }
        }

        // POST: api/Product
        [HttpPost]
        public void Post([FromBody] string value)
        {
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
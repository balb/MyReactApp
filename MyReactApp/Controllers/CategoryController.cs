using Dapper;
using Microsoft.AspNetCore.Mvc;
using MyReactApp.Models;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace MyReactApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        // GET: api/Category
        [HttpGet]
        public IEnumerable<object> Get()
        {
            var connectionString = "server=(local);database=AdventureWorks2017;Integrated Security=SSPI";
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();
                var sql = @"
                select * from Production.ProductCategory
                select * from Production.ProductSubcategory";

                using (var multi = connection.QueryMultiple(sql))
                {
                    var categories = multi.Read<Category>().ToList();
                    var subCategories = multi.Read<SubCategory>().ToList();
                    return categories.Select(c => new
                    {
                        c.ProductCategoryId,
                        c.Name,
                        SubCategories = subCategories
                            .Where(sc => sc.ProductCategoryId == c.ProductCategoryId)
                            .Select(sc => new { sc.ProductSubcategoryId, sc.Name })
                    });
                }
            }
        }
    }
}
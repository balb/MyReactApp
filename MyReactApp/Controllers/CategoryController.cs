using Dapper;
using Microsoft.AspNetCore.Mvc;
using MyReactApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace MyReactApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IDbConnectionFactory _dbConnectionFactory;

        public CategoryController(IDbConnectionFactory dbConnectionFactory)
        {
            _dbConnectionFactory = dbConnectionFactory;
        }

        // GET: api/Category
        [HttpGet]
        public IEnumerable<object> Get()
        {
            using (var connection = _dbConnectionFactory.GetConnection())
            {
                var sql = @"
                select * from Production.ProductCategory
                select * from Production.ProductSubcategory";

                using (var multi = connection.QueryMultiple(sql))
                {
                    var categories = multi.Read<Category>().ToList();
                    var subCategories = multi.Read<SubCategory>().ToList();
                    return categories.Select(c => new
                    {
                        Id = c.ProductCategoryId,
                        c.Name,
                        SubCategories = subCategories
                            .Where(sc => sc.ProductCategoryId == c.ProductCategoryId)
                            .Select(sc => new { Id = sc.ProductSubcategoryId, sc.Name })
                    });
                }
            }
        }
    }
}
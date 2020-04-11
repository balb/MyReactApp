using System.Data;
using System.Data.SqlClient;

namespace MyReactApp
{
    public class DbConnectionFactory : IDbConnectionFactory
    {
        public IDbConnection GetConnection()
        {
            var connectionString = "server=(local);database=AdventureWorks2017;Integrated Security=SSPI";
            var connection = new SqlConnection(connectionString);
            connection.Open();
            return connection;
        }
    }
}
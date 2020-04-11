using System.Data;

namespace MyReactApp
{
    public interface IDbConnectionFactory
    {
        IDbConnection GetConnection();
    }
}
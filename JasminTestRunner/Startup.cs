using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JasminTestRunner.Startup))]
namespace JasminTestRunner
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            
        }
    }
}

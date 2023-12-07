using Microsoft.EntityFrameworkCore;
using WEB_PORTAL_API.Model.Entities;

namespace WEB_PORTAL_API.Context
{
    public class MGContext : DbContext
    {
        public MGContext(DbContextOptions<MGContext> options)
                  : base(options)
        {
        }
                    public DbSet<News> News { get; set; }
                    public DbSet<User> Users { get; set; }
                    public DbSet<About> Abouts { get; set; }
                    public DbSet<Contact> Contacts { get; set; }
                    public DbSet<Service> Services { get; set; }

    }

}


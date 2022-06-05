using Microsoft.EntityFrameworkCore;
using pjChallengeN5.Models;


namespace pjChallengeN5.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> option) : base(option)
        {

        }

        public DbSet<Permisos> Permisos { get; set; }
        public DbSet<TipoPermisos> TipoPermisos { get; set; }

        
    }
}

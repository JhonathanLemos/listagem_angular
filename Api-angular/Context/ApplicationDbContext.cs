using Api_angular.Entidades;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

namespace Api_angular.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Cliente>()
            .HasMany(a => a.Produtos)
            .WithOne(b => b.Cliente)
            .HasForeignKey(b => b.ClienteId);

            builder.Entity<Produto>()
           .HasOne(a => a.Cliente)
           .WithMany(b => b.Produtos)
           .HasForeignKey(b => b.ClienteId);
        }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Produto> Produtos { get; set; }

        
    }
}

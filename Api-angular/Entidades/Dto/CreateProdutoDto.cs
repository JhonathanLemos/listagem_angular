using NetCoreAPI.Repositories;

namespace Api_angular.Entidades
{
    public class CreateProdutoDto : Entity
    {
        public string Nome { get; set; }
        public long ClienteId { get; set; }
    }
}

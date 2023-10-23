using NetCoreAPI.Repositories;

namespace Api_angular.Entidades
{
    public class ProdutoDto : Entity
    {

        public string Nome { get; set; }
        public long ClienteId { get; set; }
        public string NomeCliente{ get; set; }
    }
}

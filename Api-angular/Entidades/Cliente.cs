using NetCoreAPI.Repositories;
using System.Text.Json.Serialization;

namespace Api_angular.Entidades
{
    public class Cliente : Entity
    {
        public string Nome{ get; set; }
        [JsonIgnore]
        public IEnumerable<Produto> Produtos { get; set; }
    }
}

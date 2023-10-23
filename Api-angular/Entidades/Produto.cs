using NetCoreAPI.Repositories;
using System.Text.Json.Serialization;

namespace Api_angular.Entidades
{
    public class Produto : Entity
    {

        public string Nome { get; set; }

        [JsonIgnore]
        public Cliente Cliente { get; set; }
        public long ClienteId { get; set; }
    }
}

using Api_angular.Entidades;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace NetCoreAPI.Mappers
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<ProdutoDto, Produto>()
                .ForMember(x => x.Cliente, opt => opt.Ignore()); ;
            CreateMap<CreateProdutoDto, Produto>();
            CreateMap<ProdutoDto, IActionResult>();
            CreateMap<Produto, ProdutoDto>()
                .ForMember(x => x.NomeCliente, opt => opt.MapFrom(x => x.Cliente.Nome));
    
        }
    }
}

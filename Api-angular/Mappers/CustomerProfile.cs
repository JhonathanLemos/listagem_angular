using Api_angular.Entidades;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace NetCoreAPI.Mappers
{
    public class CustomerProfile : Profile
    {
        public CustomerProfile()
        {
            CreateMap<ClienteDto, Cliente>().ForMember(x => x.Produtos, opt => opt.Ignore());
            CreateMap<Cliente, ClienteDto>();
        }
    }
}

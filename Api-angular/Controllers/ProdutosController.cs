using Api_angular.Context;
using Api_angular.Entidades;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NetCoreAPI.Repositories;

[Route("api/[controller]")]
[ApiController]
public class ProdutosController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly IRepository<Produto> _repository;

    public ProdutosController(IRepository<Produto> repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }


    [HttpGet]
    public async Task<IActionResult> GetAll([FromQuery] GetAll input)
    {
        var query = _repository.GetAll();

        if (input.Search != null)
        query = query.Where(x => x.Nome.Contains(input.Search));

        int totalItems = query.Count();

        int skip = input.PageIndex * input.PageSize;

        var items = query.Include(x => x.Cliente).Skip(skip).Take(input.PageSize).ToList();
        var result = new
        {
            TotalItems = totalItems,
            Items = items
        };

        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var result = await _repository.GetById(id);
        if (result == null)
            return NotFound("Entidade não encontrada");

        return Ok(_mapper.Map<ProdutoDto>(result));
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] CreateProdutoDto produtoDto)
    {
        var produto = _mapper.Map<Produto>(produtoDto);
        return Ok(await _repository.Add(produto));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, [FromBody] CreateProdutoDto produtoDto)
    {
        var entity = await _repository.GetById(id);
        if (entity == null)
            return NotFound("Nenhum entidade encontrada!");

        _mapper.Map(produtoDto, entity);
        return Ok(await _repository.Update(entity));
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var result = await _repository.GetById(id);
        if (result == null)
            return NotFound("Entidade nao encontrada");

        await _repository.Delete(result);
        return Ok();
    }
    // Implemente suas ações de API aqui, por exemplo, GET, POST, PUT, DELETE.
}

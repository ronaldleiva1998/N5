using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Nest;
using pjChallengeN5.Data;
using pjChallengeN5.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace pjChallengeN5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PermisosController : ControllerBase
    {

        private readonly ApplicationDbContext _db;
        
        public PermisosController(ApplicationDbContext db)
        {
            _db = db;
        }

        //public rt(IElasticClient elasticClient)
        //{
        //    this.elasticClient = elasticClient;
        //}

        [HttpGet]
        public async Task<IActionResult> GetPermisos()
        {
            var lista = await _db.Permisos.OrderBy(c => c.NombreEmpleado).ToListAsync();

            return Ok(lista);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> ObtenerPermiso(int id)
        {
            var obj =await _db.Permisos.FirstOrDefaultAsync(c => c.Id == id);

            if (obj == null)
            {
                return NotFound();
            }
            return Ok(obj);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> ModificarPermiso(int id ,Permisos permiso)
        {
            if (id != permiso.Id)
            {
                return BadRequest();
            }

            _db.Entry(permiso).State= EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
                return Ok();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PermisosExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            //return NoContent();
        }

        private bool PermisosExists(int id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<IActionResult> CrearPermiso([FromBody] Permisos permisos)
        {

            if (permisos==null)
            {
                return BadRequest(ModelState);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _db.AddAsync (permisos);
            await _db.SaveChangesAsync();
            return Ok();
        }




    }
}

using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace pjChallengeN5.Models
{
    [Table("TipoPermisos")]
    public class TipoPermisos
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string Descripcion { get; set; }

        //public ICollection<Permisos> Permisos { get; set; }

        [JsonIgnore]
        public List<Permisos> Permisos { get; set; }
       


    }
}

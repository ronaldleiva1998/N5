using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace pjChallengeN5.Models

{
    [Table("Permisos")]
    public class Permisos
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string NombreEmpleado { get; set; }

        [Required]
        public string ApellidoEmpleado { get; set; }

        [ForeignKey("FK_TipoPermiso")]
        public int TipoPermiso { get; set; }
        [JsonIgnore]
        public TipoPermisos FK_TipoPermiso { get; set; }

        public DateTime FechaPermiso { get; set; }




    }
}

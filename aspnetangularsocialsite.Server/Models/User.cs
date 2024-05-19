using Microsoft.Extensions.Hosting;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using System.ComponentModel.DataAnnotations;

namespace aspnetangularsocialsite.Server.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Required]
        [MaxLength(100)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(100)]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
        public string PasswordHash { get; set; }

        public string ProfilePictureUrl { get; set; }

        public string Bio { get; set; }

        public ICollection<Post> Posts { get; set; }
        public ICollection<Connection> Connections { get; set; }
    }
}

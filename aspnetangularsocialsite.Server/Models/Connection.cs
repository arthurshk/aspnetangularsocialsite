using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace aspnetangularsocialsite.Server.Models
{
    public class Connection
    {
        [Key]
        public int ConnectionId { get; set; }

        public int UserId { get; set; }

        public int ConnectedUserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }

        [ForeignKey("ConnectedUserId")]
        public User ConnectedUser { get; set; }
        public DateTime ConnectedAt { get; set; }
    }
}

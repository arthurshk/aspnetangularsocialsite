using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace aspnetangularsocialsite.Server.Models
{
    public class Like
    {
        [Key]
        public int LikeId { get; set; }

        public int PostId { get; set; }

        public int UserId { get; set; }

        [ForeignKey("PostId")]
        public Post Post { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}

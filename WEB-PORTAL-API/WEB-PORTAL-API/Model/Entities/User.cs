using WEB_PORTAL_API.Context;
namespace WEB_PORTAL_API.Model.Entities
{
    public class User : BaseEntity
    {
        public Guid UserId { get; set; }
        public string UserName { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ProfilePicture { get; set; }
    }


}
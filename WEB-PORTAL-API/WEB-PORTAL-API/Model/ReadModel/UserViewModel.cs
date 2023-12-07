namespace WEB_PORTAL_API.Model.ReadModel
{
    public class UserViewModel
    {
        public string UserName { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public IFormFile ProfilePicture { get; set; }
    }
}

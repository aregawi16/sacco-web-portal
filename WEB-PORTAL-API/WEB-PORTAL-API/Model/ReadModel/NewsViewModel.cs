namespace WEB_PORTAL_API.Model.Entities
{
    public class NewsViewModel
    {
        public int NewsId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public IFormFile Image { get; set; }
    }
}

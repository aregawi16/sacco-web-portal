namespace WEB_PORTAL_API.Model.Entities
{
    public class News : BaseEntity
    {
        public int NewsId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
    }
}

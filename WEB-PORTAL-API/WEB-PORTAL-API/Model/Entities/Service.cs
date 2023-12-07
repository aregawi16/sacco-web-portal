namespace WEB_PORTAL_API.Model.Entities
{
    public class Service : BaseEntity
    {
        public int ServiceId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}

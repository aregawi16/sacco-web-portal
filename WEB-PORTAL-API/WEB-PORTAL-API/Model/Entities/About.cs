namespace WEB_PORTAL_API.Model.Entities
{
    public class About : BaseEntity
    {
        public int AboutId { get; set; }
        public AboutType AboutType { get; set; }
        public string Description { get; set; }
    }

    public enum AboutType
    {
        General,
        Vision,
        Mission,
        Value,
        Goal,
        Starategy,
        Program

    }
}

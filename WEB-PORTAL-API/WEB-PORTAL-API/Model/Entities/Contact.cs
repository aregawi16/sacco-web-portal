namespace WEB_PORTAL_API.Model.Entities
{
    public class Contact : BaseEntity
    {
        public int ContactId { get; set; }
        public string MobileNo { get; set; }
        public string TelephoneNo { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public string StreetAddress { get; set; }
    }
}

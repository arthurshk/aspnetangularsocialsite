using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace aspnetangularsocialsite.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PaymentsController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public PaymentsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("create-payment-intent")]
        public ActionResult CreatePaymentIntent()
        {
            StripeConfiguration.ApiKey = _configuration["Stripe:SecretKey"];

            var options = new PaymentIntentCreateOptions
            {
                Amount = 1099, 
                Currency = "usd",
                PaymentMethodTypes = new List<string> { "card" },
            };

            var service = new PaymentIntentService();
            PaymentIntent paymentIntent = service.Create(options);

            return Ok(new { clientSecret = paymentIntent.ClientSecret });
        }
    }
}
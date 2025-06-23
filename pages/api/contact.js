export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message, landingPage } = req.body;

    // Basic validation
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    // Log the submission (in production, you'd save to database or send email)
    console.log('Form submission:', {
      name,
      email,
      phone,
      message,
      landingPage,
      timestamp: new Date().toISOString()
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In production, integrate with your email service:
    // - SendGrid
    // - Mailchimp
    // - ConvertKit
    // - EmailJS
    // - etc.

    return res.status(200).json({ 
      message: 'Success',
      discountCode: 'NATURAL15'
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 
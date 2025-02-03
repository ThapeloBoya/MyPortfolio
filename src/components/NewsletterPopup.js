import React, { useState, useEffect } from 'react';

const NewsletterPopup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 10 seconds

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const API_KEY = '6073eecbf22948824e78a196946c635d-us19'; // Replace with your Mailchimp API Key
    const LIST_ID = 'a110b820aa'; // Replace with your Mailchimp List ID
    const DC = 'us19'; // Replace with your Mailchimp data center (e.g., us19)

    const endpoint = `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/`;

    const data = {
      email_address: email,
      status: 'subscribed', // Can be 'subscribed', 'unsubscribed', 'cleaned'
    };

    const options = {
      method: 'POST',
      headers: {
        'Authorization': `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(endpoint, options);
      const responseData = await response.json(); // Get the response data
      console.log('Mailchimp Response:', responseData); // Log the response data

      if (response.ok) {
        setIsSubscribed(true);
      } else {
        setError(`Subscription failed: ${responseData.detail || 'Unknown error'}`); // Provide more detailed error
      }
    } catch (err) {
      console.error('Error:', err); // Log any network or other errors
      setError('There was an error subscribing, please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null; // Don't render the popup until after the timeout

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={closePopup}>×</button>
        <h2 className="popup-title">Subscribe to Our Newsletter</h2>
        <p className="popup-text">Stay updated with the latest news and offers!</p>
        {isSubscribed ? (
          <p className="popup-text">Thank you for subscribing!</p>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <input
                className="popup-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <button className="popup-submit" type="submit" disabled={isLoading}>
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {error && <p className="error">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default NewsletterPopup;

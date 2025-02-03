import React, { useEffect } from 'react';

const WhatsAppWidget = () => {
  useEffect(() => {
    // Create the script element for WhatsApp widget
    const script = document.createElement('script');
    script.src = 'https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js';
    script.async = true;
    script.onload = () => {
      const wa_btnSetting = {
        btnColor: '#16BE45',
        ctaText: '',
        cornerRadius: 40,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        btnPosition: 'right',
        whatsAppNumber: '27670651600',
        welcomeMessage: 'Hello',
        zIndex: 999999,
        btnColorScheme: 'light'
      };
      window._waEmbed(wa_btnSetting); // Initialize the widget
    };

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array to run once

  return null; // The component does not render anything itself
};

export default WhatsAppWidget;

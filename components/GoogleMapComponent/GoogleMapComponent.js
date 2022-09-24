import React from 'react';
import styles from './GoogleMapComponent.module.css';

export const GoogleMapComponent = () => {
  return (
    <div className={styles.map}>
      <iframe
        id={styles.map}
        title="Serious Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.6352032303416!2d44.487949515586294!3d40.19493117702235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd26fabe1d79%3A0xa3eecbc6612f93c4!2sSerious%20WEB!5e0!3m2!1sru!2s!4v1649932731883!5m2!1sru!2s"
        max-width="600"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

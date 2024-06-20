import { useEffect } from 'react';
import styles from './PreFooter.module.css';

function PreFooter() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.preFooterDiv}>
      <div className={styles.preFooterDivHeading}>
        <div>
          <span>Let us know what you would like to communicate and we will get back to you as soon as possible.</span>
          <p></p>
          <div className={styles.contactMeme}></div>
        </div>
      </div>
      <div data-tf-live="01J0K5P2BXF1MHBM76935ZKJRE" ></div>

    </div >
  );
}

export default PreFooter;

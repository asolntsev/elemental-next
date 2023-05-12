import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Icard from '@site/src/components/icard';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [tips, setTips] = useState([
    {
      title: '1: How To Upload A File',
      contentURl: 'docs/how-to-upload-a-file/1-upload-a-file-ruby',
      level: 1,
      text: 'Uploading a file is a common piece of functionality found on the web but when trying to automate it, you get prompted with a dialog box that is just out of reach for Selenium. In these cases people often look to a third-party tool to manipulate this window.',
    },
    {
      title: '2: Download A File',
      contentUrl: 'docs/download-a-file/2-download-a-file-ruby',
      level: 2,
      text: "Just like with uploading files we hit the same issue with downloading them a dialog box just out of Selenium's reach. With some additional configuration, we can side-step the dialog box.",
    },
    {
      title: '3: Work With Frames',
      contentUrl: 'docs/work-with-frames/3-work-with-frames-ruby',
      level: 1,
      text: "In this tip, you'll learn how to work with frames and write tests against them. On occasion, we may encounter relics of the front-end world, such as frames.",
    },
  ]);
  return (
    <Layout title={`Elemental Selenium`} description='Elemental Selenium, your reliable opinionated tips'>
      <div className='home-wrapper'>
        <h1 className='home-header'> Make sure your code lands</h1>
        <p>
          A <i>free</i> weekly email of tips to help make Selenium one of the most robust browser automation tools out
          there.
        </p>
        <form className='home-form'>
          <input type='email' id='email' placeholder='email-address@send-me-tips.com'></input>
          <button className='home-button'>Join the mailing list</button>
        </form>
        <a href='tips' className='home-link'>
          {' '}
          Skip it, take me to the tips
        </a>
      </div>
      <div className='icards-container'>
        {tips.map((tip) => (
          <Icard contentUrl={tip.contentUrl} level={tip.level} title={tip.title} text={tip.text} />
        ))}
      </div>
      <img className='home-footer' src='./img/backgrounds/home-footer.svg' alt='' />
    </Layout>
  );
}

export default Home;
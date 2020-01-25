import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';

const Index = () => (
  <div>
<Link href="/about" title="About Page">
  <a>About Page</a>
</Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index
const Home = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.json();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <div>
      <Head title="HOME" />
      <Nav />

      <div className="hero">
        <h1 className="title">HEY YA</h1>
        <p className="description">
        
        </p>

        <p className="row date">
          is: &nbsp;{' '}
          {date ? (
            <span>
              <b>{date.date}</b>
            </span>
          ) : (
            <span className="loading"></span>
          )}
        </p>

        <div className="row">
          <Link href="https://github.com/zeit/next.js#setup">
            <a className="card">
              <h3>Getting Started &rarr;</h3>
            
            </a>
          </Link>
          <Link href="https://github.com/zeit/next.js/tree/master/examples">
            <a className="card">
              <h3>Examples &rarr;</h3>
             
            </a>
          </Link>
          <Link href="https://github.com/zeit/next.js">
            <a className="card">
              <h3>Create Next App &rarr;</h3>
              
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .date {
          height: 24px;
          max-width: calc(100% - 32px)
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
        }
        .date p {
          text-align: center;
        }
        .date span {
          width: 176px;
          text-align: center;
        }
        @keyframes Loading {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        .date .loading {
          max-width: 100%;
          height: 24px;
          border-radius: 4px;
          display: inline-block;
          background: linear-gradient(270deg, #D1D1D1, #EAEAEA);
          background-size: 200% 200%;
          animation: Loading 2s ease infinite;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export Home;

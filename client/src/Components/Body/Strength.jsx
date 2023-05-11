import { Center, Heading } from '@chakra-ui/react';
import React from 'react';
import highQualityBrand from './highQualityBrand.png';
import afterSalesService from './afterSalesService.png';
import strength from './Strength.module.css';

function Strength() {
  return (
    <section className={strength.strength}>
      <Center>
        <Heading margin="10px 0 30px 0">STRENGTH</Heading>
      </Center>
      <div className={strength.news}>
        <article className={strength.newz}>
          <div className={strength.newsArticle}>
            <div className={strength.vert}>
              <span>|</span> Core Competency
            </div>
          </div>
          <div className={strength.newsDetails}>
            <img src={highQualityBrand} alt="" />
            <p>#1 High Quality Standard</p>
          </div>
          <div className={strength.newsDetails}>
            <img src={afterSalesService} alt="" />
            <p>#2 After Sales Service</p>
          </div>
          <div className={strength.newsDetails}>
            <img src={highQualityBrand} alt="" />
            <p>#3 Continuously Onboarding Global High-Quality Supplier</p>
          </div>
        </article>
        <article className={strength.newz}>
          <div className={strength.newsArticle}>
            <div className={strength.vert}>
              <span>|</span> Our Objectives
            </div>
          </div>
          <div className={strength.newsDetails}>
            <img src={highQualityBrand} alt="" />
            <p>#1 Reasonable Price</p>
          </div>
          <div className={strength.newsDetails}>
            <img src={afterSalesService} alt="" />
            <p>#2 Personalized or Customized Product Mfg.</p>
          </div>
          <div className={strength.newsDetails}>
            <img src={highQualityBrand} alt="" />
            <p>#3 Continuously Onboarding Global High-Quality Supplier</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Strength;

import React from 'react';
import AsideLayout from '../AsideLayout/AsideLayout';
import s from './TermsAside.module.css';

const TermsAside = () => (
  <AsideLayout asideTitle="Terms and Conditions" closeTitle="Return" closeLink="contact">
    <h2 className={s.subTitle}>
      Introduction
    </h2>
    <p className={s.text}>
      These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Frédéric Paurisse | Creative developer accessible at fredericpaurisse.fr.
    </p>
    <p className={s.text}>
      Minors or people below 18 years old are not allowed to use this Website.
    </p>
    <h2 className={s.subTitle}>
      Intellectual Property Rights
    </h2>
    <p className={s.text}>
      Other than the content you own, under these Terms, Frédéric Paurisse and/or its licensors own all the intellectual property rights and materials contained in this Website.
    </p>
    <p className={s.text}>
      You are granted limited license only for purposes of viewing the material contained on this Website.
    </p>
    <h2 className={s.subTitle}>
      Restrictions
    </h2>
    <p className={s.text}>
      You are specifically restricted from all of the following:
    </p>
    <ul>
      <li>publishing any Website material in any other media;</li>
      <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
      <li>publicly performing and/or showing any Website material;</li>
      <li>using this Website in any way that is or may be damaging to this Website;</li>
      <li>using this Website in any way that impacts user access to this Website;</li>
      <li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
      <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
      <li>using this Website to engage in any advertising or marketing.</li>
    </ul>
    <p className={s.text}>
      Certain areas of this Website are restricted from being access by you and Frédéric Paurisse may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.
    </p>
    <h2 className={s.subTitle}>
      Your Content
    </h2>
    <p className={s.text}>
      In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Frédéric Paurisse a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
    </p>
    <p className={s.text}>
      Your Content must be your own and must not be invading any third-party’s rights. Frédéric Paurisse reserves the right to remove any of Your Content from this Website at any time without notice.
    </p>
    <h2 className={s.subTitle}>
      Your Privacy
    </h2>
    <p className={s.text}>
      Please read Privacy Policy.
    </p>
    <h2 className={s.subTitle}>
      No warranties
    </h2>
    <p className={s.text}>
      This Website is provided "as is," with all faults, and Frédéric Paurisse express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
    </p>
    <h2 className={s.subTitle}>
      Limitation of liability
    </h2>
    <p className={s.text}>
      In no event shall Frédéric Paurisse, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  Frédéric Paurisse, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
    </p>
    <h2 className={s.subTitle}>
      Indemnification
    </h2>
    <p className={s.text}>
      You hereby indemnify to the fullest extent Frédéric Paurisse from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
    </p>
    <h2 className={s.subTitle}>
      Severability
    </h2>
    <p className={s.text}>
      If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
    </p>
    <h2 className={s.subTitle}>
      Variation of Terms
    </h2>
    <p className={s.text}>
      Frédéric Paurisse is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
    </p>
    <h2 className={s.subTitle}>
      Assignment
    </h2>
    <p className={s.text}>
      The Frédéric Paurisse is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
    </p>
    <h2 className={s.subTitle}>
      Entire Agreement
    </h2>
    <p className={s.text}>
      These Terms constitute the entire agreement between Frédéric Paurisse and you in relation to your use of this Website, and supersede all prior agreements and understandings.
    </p>
    <h2 className={s.subTitle}>
      Governing Law and Jurisdiction
    </h2>
    <p className={s.text}>
      These Terms will be governed by and interpreted in accordance with the laws of the State of fr, and you submit to the non-exclusive jurisdiction of the state and federal courts located in fr for the resolution of any disputes.
    </p>
  </AsideLayout>
);

export default TermsAside;

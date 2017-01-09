import React, { Component } from 'react';

class About extends Component {

  render() {
    return(
      <div>
        <div className='about-background'>
        <div className='row'>
          <div className='col s12 m12 center'>
            <h3> The PUG Team </h3>
          </div>
        </div>
          <div className='row'>
            <div className='col s3'>
              <div className='spencer z-depth-5 responsive-img'> </div>
              <hr />
              <p className='center'><em> Ginger </em></p>
              <div className='social-media'>
                <a href='https://github.com/spenhappenin' target='_blank' rel='noopener'><img className='social-icons responsive-img' style={{height: '55px', width: '55px'}} src='http://res.cloudinary.com/omash612/image/upload/v1483734372/spencer_github_pcbm3z.png' /></a>
                <a href='https://www.linkedin.com/in/spencer-richards' target='_blank' rel='noopener'><img className='social-icons responsive-img' style={{height: '40px', width: '40px', marginTop: '6px'}} src='http://res.cloudinary.com/omash612/image/upload/v1483478100/linkedinlogo_sjckc6.png' /> </a>
                <a href='mailto:spencer.richards7@gmail.com'><img className='social-icons responsive-img' src="http://res.cloudinary.com/omash612/image/upload/v1483478773/gmailLogo_as7oja.png" style={{ height: '40px', width: '40px', marginTop: '6px'}}></img></a>
              </div>
            </div>
            <div className='col s3'>
              <div className='alex z-depth-5 responsive-img'> </div>
              <hr />
              <p className='center' style={{fontSize: '12px'}}><span style={{fontWeight: 'bolder', fontSize: '16px', color: '#027e99'}}> Alex Romney </span> is a technology guru and sports entusiast. After being introduced to volleyball at a young age, his love for the game has grown while coaching and playing at all levels. When he's not watching anime, he enjoys being active and can often be found hiking with his wife, Amy. Alex enjoys learning and has discovered a new love for coding at DevPoint labs this year. He has a love for all food, his Japanese roots and looks forward to a career as a software developer. </p>
              <div className='social-media'>
                <a href='https://github.com/AlexRomney' target='_blank' rel='noopener'><img className='social-icons responsive-img' style={{height: '55px', width: '55px'}} src='http://res.cloudinary.com/omash612/image/upload/v1483476650/daftpunkcat2_wj6cy9.gif' /></a>
                <a href='https://www.linkedin.com/in/alex-romney' target='_blank' rel='noopener'><img className='social-icons responsive-img' style={{height: '40px', width: '40px', marginTop: '6px'}} src='http://res.cloudinary.com/omash612/image/upload/v1483478100/linkedinlogo_sjckc6.png' /> </a>
                <a href='mailto:alexromney1215@gmail.com'><img className='social-icons responsive-img' src="http://res.cloudinary.com/omash612/image/upload/v1483478773/gmailLogo_as7oja.png" style={{ height: '40px', width: '40px', marginTop: '6px'}}></img></a>
              </div>
            </div>
            <div className='col s3'>
              <div className='william z-depth-5'> </div>
              <hr />
              <p className='center'><em> Huge Beard, Tatted Dog Lover </em></p>
              <div className='social-media'>
               <a href='https://github.com/WilliamW101' target='_blank'><img className='social-icons' style={{height: '55px', width: '55px'}} src='http://res.cloudinary.com/omash612/image/upload/v1483734378/william_github_olct83.png' /></a>
               <a href='https://www.linkedin.com/in/william-winger' target='_blank'><img className='social-icons' style={{height: '40px', width: '40px', marginTop: '6px'}} src='http://res.cloudinary.com/omash612/image/upload/v1483478100/linkedinlogo_sjckc6.png' /> </a>
               <a href='mailto:billy_thekid55@hotmail.com'><img className='social-icons' src="http://res.cloudinary.com/omash612/image/upload/v1483478773/gmailLogo_as7oja.png" style={{ height: '40px', width: '40px', marginTop: '6px'}}></img></a>
             </div>
            </div>
            <div className='col s3'>
              <div className='rebecca z-depth-5'> </div>
              <hr />
              <p className='center'><em> Yoga Master Extraordinaire </em></p>
              <div className='social-media'>
                <a href='https://github.com/rebeccashifflett' target='_blank' rel='noopener'><img className='social-icons responsive-img' style={{height: '55px', width: '55px'}} src='http://res.cloudinary.com/omash612/image/upload/v1483734375/femalecodertocat_dimxz8.png' /></a>
                <a href='www.linkedin.com/in/rebecca-shifflett-rs' target='_blank' rel='noopener'><img className='social-icons responsive-img' style={{height: '40px', width: '40px', marginTop: '6px'}} src='http://res.cloudinary.com/omash612/image/upload/v1483478100/linkedinlogo_sjckc6.png' /> </a>
                <a href='mailto:no.choshoku@gmail.com'><img className='social-icons responsive-img' src="http://res.cloudinary.com/omash612/image/upload/v1483478773/gmailLogo_as7oja.png" style={{ height: '40px', width: '40px', marginTop: '6px'}}></img></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

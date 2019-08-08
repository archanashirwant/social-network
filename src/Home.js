import React from 'react';
import { InfoGroup, Info } from './InfoGroup';
import JigSaw from './JigSaw';
import Slides from './Slides';

const Home = () => {
  
  return (
   
     
        <div className="Home">
         <Slides/>
          <InfoGroup>
            <Info 
              iconClass="icon icon-screen-desktop" 
              title="Save" 
              caption="Playdate works great for coordinating childcare with families you know and trust, ensuring safety for kids."/>
            <Info 
              iconClass="icon icon-layers" 
              title="Easy" 
              caption="We help you find nearby parents, meet up for playdates, and build life-changing local networks for sharing kids’ activities & childcare."/>
            <Info 
              iconClass="icon icon-check" 
              title="Create Memories" 
              caption="The first friendships and play dates will be charished for lifetime."/>
          </InfoGroup>

          <JigSaw 
            order={2}
            img="images/groupkids.gif"
            title="Who We Are"
            caption="We believe thet no child should ever be bored.
            Playdate is a smart  solution for  the parents to find playdates for their kids and to meet up with other like minded parents.
            On Playdate, we show you other parents in your neighborhood with similar-aged children and create matches based on shared interests.
            You can chat, arrange meetups and share experiences based on meaningful topics.
            Your child will make new friends...and you will too!."
          />

        

        </div>
     
   
  );
}

export default Home;
import React from 'react'

import Hero from '../components/Hero';
import Content from '../components/Content';

export default function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <p>I am a <strong>Software Engineer</strong> who specializes in <strong>JavaScript</strong> related technologies including React, Angular, Vue, Express, and Electron.</p>

                <p>In my free time I am almost always reading articles on Dev.to or the JavaScript documentation.</p>

                <p>I currently work in Ed Tech, assisting students with professional advice and guiding them to become better developers. Before this I have had varying technical position. I was a Quality Control Chemical Tech analyzing the behaviors of raw materials, which involved mastering lab tools in order to measure mentioned behaviors. I was also a mobile expert with T-Mobile, guiding prospects and current customers in their purchasing decisions by maintaining relevant knowledge of cellphone technologies and tech-trends.</p>

                <p>I have always felt a great amount of personal success by getting better at my job, which is what makes me constantly grow. I am always learning, I am quick at picking up new concepts, engaged, and always making the best out of every situation. I love having a beautiful outlook about what's in front of me because it inspires me to keep ready on what's next instead of dwelling on the past.</p>
            </Content>
        </div>
    )
}